// pm-revenue 2026-11-16: local tests for option F2. Node 24 built-in test runner + type stripping. No network:
// global fetch is replaced by a stub that plays the Apps Script webhook.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, writeFileSync, mkdtempSync, copyFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const tmp = mkdtempSync(join(tmpdir(), "formfix-"));
copyFileSync(join(here, "../src/lib/leadRequest.ts"), join(tmp, "leadRequest.ts"));
writeFileSync(join(tmp, "route.ts"), readFileSync(join(here, "../src/app/api/health-check-request/route.ts"), "utf8")
  .replace('"../../../lib/leadRequest"', JSON.stringify(pathToFileURL(join(tmp, "leadRequest.ts")).href)));
const { validateLead } = await import(pathToFileURL(join(tmp, "leadRequest.ts")).href);
const { POST } = await import(pathToFileURL(join(tmp, "route.ts")).href);
const good = { businessName: "Example Roofing (SIMULATED)", website: "exampleroofing.test", name: "Pat Example", email: "Pat@Example.test", phone: "", challenge: "Missed calls" };
const req = (body) => new Request("http://localhost/api/health-check-request", { method: "POST", headers: { "content-type": "application/json" }, body: typeof body === "string" ? body : JSON.stringify(body) });
let calls = [];
const stub = (status, text) => { calls = []; globalThis.fetch = async (url, init) => { calls.push({ url, init }); return new Response(text, { status }); }; };

test("valid lead is normalized", () => {
  const r = validateLead(good); assert.equal(r.ok, true);
  assert.equal(r.lead.email, "pat@example.test"); assert.equal(r.lead.website, "https://exampleroofing.test/");
});
test("missing required fields are listed", () => {
  const r = validateLead({}); assert.equal(r.ok, false);
  assert.deepEqual(r.errors.sort(), ["businessName is required", "email is required", "name is required", "website is required"]);
});
test("bad email and javascript: url are rejected", () => {
  assert.equal(validateLead({ ...good, email: "nope" }).ok, false);
  assert.equal(validateLead({ ...good, website: "javascript:alert(1)" }).ok, false);
});
test("honeypot filled is rejected", () => { assert.deepEqual(validateLead({ ...good, company_url_confirm: "x" }), { ok: false, errors: ["rejected"] }); });
test("overlong field rejected", () => { assert.equal(validateLead({ ...good, challenge: "a".repeat(2001) }).ok, false); });
test("route: not configured -> 503 (page falls back to mailto)", async () => {
  delete process.env.LEAD_WEBHOOK_URL; delete process.env.LEAD_WEBHOOK_SECRET; stub(200, '{"ok":true}');
  const res = await POST(req(good)); assert.equal(res.status, 503); assert.equal(calls.length, 0);
});
test("route: bad json -> 400, invalid -> 400, no upstream call", async () => {
  process.env.LEAD_WEBHOOK_URL = "https://script.google.test/exec"; process.env.LEAD_WEBHOOK_SECRET = "s3cret"; stub(200, '{"ok":true}');
  assert.equal((await POST(req("{not json"))).status, 400);
  assert.equal((await POST(req({ ...good, email: "x" }))).status, 400); assert.equal(calls.length, 0);
});
test("route: good lead forwarded with secret -> 200", async () => {
  stub(200, '{"ok":true}'); const res = await POST(req(good)); assert.equal(res.status, 200);
  assert.equal(calls.length, 1); const sent = JSON.parse(calls[0].init.body);
  assert.equal(sent.secret, "s3cret"); assert.equal(sent.email, "pat@example.test"); assert.equal(sent.source, "maximusintel.com/free-report");
});
test("route: webhook says ok:false (bad secret) -> 502", async () => { stub(200, '{"ok":false,"error":"auth"}'); assert.equal((await POST(req(good))).status, 502); });
test("route: webhook 404 like today's Railway app -> 502", async () => { stub(404, '{"status":"error","code":404,"message":"Application not found"}'); assert.equal((await POST(req(good))).status, 502); });
test("route: network error -> 502", async () => { globalThis.fetch = async () => { throw new Error("down"); }; assert.equal((await POST(req(good))).status, 502); });
