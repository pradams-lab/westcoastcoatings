export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  propertyType: string;
  location: string;
  message: string;
  photoName?: string | undefined;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLead(input: unknown): LeadInput {
  const data = (input ?? {}) as Record<string, unknown>;
  const str = (key: string, max: number) => String(data[key] ?? "").trim().slice(0, max);

  const lead: LeadInput = {
    name: str("name", 100),
    email: str("email", 255),
    phone: str("phone", 40),
    projectType: str("projectType", 60),
    propertyType: str("propertyType", 60),
    location: str("location", 120),
    message: str("message", 2000),
    photoName: str("photoName", 200) || undefined,
  };

  const errors: string[] = [];
  if (!lead.name) errors.push("Name is required.");
  if (!emailPattern.test(lead.email)) errors.push("A valid email address is required.");
  if (lead.phone.replace(/\D/g, "").length < 7) errors.push("A valid phone number is required.");
  if (!lead.projectType) errors.push("Project type is required.");
  if (!lead.propertyType) errors.push("Property type is required.");
  if (!lead.message) errors.push("Please tell us about your project.");

  if (errors.length) throw new Error(errors.join(" "));
  return lead;
}
