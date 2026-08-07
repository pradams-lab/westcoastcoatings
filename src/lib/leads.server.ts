import type { LeadInput } from "@/lib/leads";

/**
 * Lead delivery.
 *
 * Today: the validated lead is recorded in the server log so no submission is
 * faked on the client — the form only reports success when this resolves.
 *
 * To enable email notifications later, add a provider call here (this is the
 * only file that needs to change):
 *
 *   1. Notify the business:  to = tyler@westcoastcoatings.org
 *   2. Confirm to customer:  to = lead.email
 *
 * Read credentials with process.env inside this function.
 */
export async function deliverLead(lead: LeadInput) {
  const receivedAt = new Date().toISOString();

  console.info("[west-coast-coatings] estimate request", { receivedAt, ...lead });

  // TODO: connect a transactional email provider (e.g. Resend) here.
  const emailConfigured = Boolean(process.env["RESEND_API_KEY"]);

  return { ok: true as const, receivedAt, emailConfigured };
}
