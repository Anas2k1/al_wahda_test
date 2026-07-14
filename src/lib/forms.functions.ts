import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const emailSchema = z.string().trim().toLowerCase().email().max(254);

// NEWSLETTER
const newsletterSchema = z.object({ email: emailSchema });

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => newsletterSchema.parse(data))
  .handler(async ({ data }) => {
    console.info("[newsletter] submission accepted", { email: data.email });
    return { ok: true };
  });

// CONTACT
const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: emailSchema,
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(4000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    console.info("[contact] message accepted", data);
    return { ok: true };
  });

// VOLUNTEER
const volunteerSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: emailSchema,
  phone: z.string().trim().max(40).optional(),
  city: z.string().trim().max(120).optional(),
  interests: z.array(z.string().min(1).max(60)).max(12).optional(),
  message: z.string().trim().max(2000).optional(),
});

export const submitVolunteer = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => volunteerSchema.parse(data))
  .handler(async ({ data }) => {
    console.info("[volunteer] application accepted", data);
    return { ok: true };
  });
