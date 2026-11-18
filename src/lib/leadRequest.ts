// CANDIDATE_PENDING_JEV — pm-revenue 2026-11-16. Option F2 for the dead Railway form (G06). NOT DEPLOYED.
// Pure validation for an AI Health Check request. No imports, no network. Used by the API route below.

export type LeadRequest = {
  businessName: string;
  website: string;
  name: string;
  email: string;
  phone: string;
  challenge: string;
};

export type LeadResult = { ok: true; lead: LeadRequest } | { ok: false; errors: string[] };

const LIMITS: Record<keyof LeadRequest, number> = {
  businessName: 120, website: 300, name: 120, email: 254, phone: 40, challenge: 2000,
};
const EMAIL = /^[^\s@<>()]+@[^\s@<>()]+\.[A-Za-z]{2,}$/;

function clean(value: unknown): string {
  return typeof value === "string" ? value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim() : "";
}

export function validateLead(input: unknown): LeadResult {
  const raw = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const errors: string[] = [];
  if (clean(raw.company_url_confirm)) {
    // honeypot field: hidden from people, filled by bots
    return { ok: false, errors: ["rejected"] };
  }
  const lead: LeadRequest = {
    businessName: clean(raw.businessName),
    website: clean(raw.website),
    name: clean(raw.name),
    email: clean(raw.email).toLowerCase(),
    phone: clean(raw.phone),
    challenge: clean(raw.challenge),
  };
  for (const key of ["businessName", "website", "name", "email"] as const) {
    if (!lead[key]) errors.push(`${key} is required`);
  }
  for (const key of Object.keys(LIMITS) as (keyof LeadRequest)[]) {
    if (lead[key].length > LIMITS[key]) errors.push(`${key} is too long`);
  }
  if (lead.email && !EMAIL.test(lead.email)) errors.push("email is not valid");
  if (lead.website) {
    try {
      const url = new URL(/^https?:\/\//i.test(lead.website) ? lead.website : `https://${lead.website}`);
      if (!/^https?:$/.test(url.protocol) || !url.hostname.includes(".")) errors.push("website is not valid");
      else lead.website = url.toString();
    } catch {
      errors.push("website is not valid");
    }
  }
  return errors.length ? { ok: false, errors } : { ok: true, lead };
}
