import { z } from "zod";

// EmailJS identifiers are browser-public configuration, never server secrets.
// The studio uses an email link; this preserves the retained contact form.
const emailConfiguration = z.object({
  serviceId: z.string().min(1),
  templateId: z.string().min(1),
  publicKey: z.string().min(1),
});

const email = emailConfiguration.safeParse({
  serviceId: import.meta.env.VITE_SERVICE_ID,
  templateId: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
});

export const emailSettings = email.success ? email.data : null;
