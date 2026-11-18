// CANDIDATE_PENDING_JEV — pm-revenue 2026-11-16. Option F2 server route. NOT DEPLOYED.
// POST /api/health-check-request. Validates, then forwards server-side to LEAD_WEBHOOK_URL
// (a Google Apps Script web app that appends a row to Joel's sheet and emails him a notice).
// If the env var is missing or the webhook fails, it returns an error so the page falls back to mailto.
// Uses only web-standard Request/Response, so it runs in Next.js and in plain Node tests.
import { validateLead } from "../../../lib/leadRequest";

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }
  const result = validateLead(body);
  if (!result.ok) {
    return Response.json({ ok: false, error: "invalid", details: result.errors }, { status: 400 });
  }
  const url = process.env.LEAD_WEBHOOK_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!url || !secret) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ secret, source: "maximusintel.com/free-report", received_at: new Date().toISOString(), ...result.lead }),
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    const text = await res.text();
    if (!res.ok || !/"ok"\s*:\s*true/.test(text)) {
      return Response.json({ ok: false, error: "upstream" }, { status: 502 });
    }
  } catch {
    return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  }
  return Response.json({ ok: true }, { status: 200 });
}
