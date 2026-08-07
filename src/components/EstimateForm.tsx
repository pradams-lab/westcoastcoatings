import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";

import { ActionButton } from "@/components/ui-kit";
import { submitEstimateRequest } from "@/lib/leads.functions";
import { projectTypes, propertyTypes, site } from "@/lib/site";

const fieldClass =
  "w-full border border-charcoal/15 bg-transparent px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-gold focus:outline-none";

const labelClass =
  "block text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/55";

export function EstimateForm() {
  const submit = useServerFn(submitEstimateRequest);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setStatus("loading");
    setError(null);

    try {
      await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          projectType: String(fd.get("projectType") ?? ""),
          propertyType: String(fd.get("propertyType") ?? ""),
          location: String(fd.get("location") ?? ""),
          message: String(fd.get("message") ?? ""),
          photoName: photoName || undefined,
        },
      });
      form.reset();
      setPhotoName("");
      setStatus("success");
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please call us and we'll take your details over the phone.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="reveal-in border border-gold/40 bg-warm-white p-10">
        <p className="eyebrow">Request received</p>
        <h3 className="mt-5 font-display text-3xl text-charcoal">Thanks for reaching out!</h3>
        <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
          We've received your project request. A member of the West Coast Coatings team will review
          your details and get back to you shortly.
        </p>
        <a
          href={site.phoneHref}
          className="mt-8 inline-block border-b border-gold pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal"
        >
          Need us sooner? {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="location">
            Project location
          </label>
          <input id="location" name="location" className={fieldClass} placeholder="City or county" />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="projectType">
            Project type
          </label>
          <select id="projectType" name="projectType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a system
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="propertyType">
            Property type
          </label>
          <select id="propertyType" name="propertyType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a property type
            </option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelClass} htmlFor="message">
          Tell us about your project
        </label>
        <textarea id="message" name="message" required rows={5} className={fieldClass} />
      </div>

      <div className="space-y-2">
        <label className={labelClass} htmlFor="photo">
          Photo (optional)
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? "")}
          className="w-full border border-dashed border-charcoal/20 px-4 py-3.5 text-sm text-charcoal/70 file:mr-4 file:border-0 file:bg-charcoal file:px-4 file:py-2 file:text-[10px] file:font-semibold file:uppercase file:tracking-[0.2em] file:text-warm-white"
        />
        <p className="text-xs text-muted-foreground">
          We'll note that you have a photo and ask for it by email — file uploads aren't stored yet.
        </p>
      </div>

      {error ? (
        <p role="alert" className="border-l-2 border-destructive pl-4 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <ActionButton type="submit" variant="gold" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Request My Free Estimate"}
      </ActionButton>
      <p aria-live="polite" className="sr-only">
        {status === "loading" ? "Sending your request" : ""}
      </p>
    </form>
  );
}
