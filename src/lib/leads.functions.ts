import { createServerFn } from "@tanstack/react-start";

import { validateLead, type LeadInput } from "@/lib/leads";
import { deliverLead } from "@/lib/leads.server";

/**
 * Receives an estimate request. Validation runs server-side; delivery is
 * handled by `deliverLead`, the single place to wire a transactional email
 * provider (e.g. Resend) later.
 */
export const submitEstimateRequest = createServerFn({ method: "POST" })
  .inputValidator((input: LeadInput) => validateLead(input))
  .handler(async ({ data }) => deliverLead(data));
