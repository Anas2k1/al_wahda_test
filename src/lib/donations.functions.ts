import { createServerFn } from "@tanstack/react-start";
import { getRequestHost } from "@tanstack/react-start/server";
import { z } from "zod";

const donateSchema = z.object({
  fund: z.string().trim().min(1).max(60),
  amount: z.number().int().min(1).max(100000), // taka
  currency: z.enum(["bdt", "eur", "gbp"]).default("bdt"),
  recurrence: z.enum(["one_time", "weekly", "monthly"]).default("one_time"),
  donor_name: z.string().trim().max(120).optional(),
  donor_email: z.string().trim().toLowerCase().email().max(254).optional(),
  donor_phone: z.string().trim().max(40).optional(),
  anonymous: z.boolean().default(false),
});

export const createDonationCheckout = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => donateSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error(
        "Donations are not yet configured. The site administrator needs to add a Stripe secret key.",
      );
    }

    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(key);

    const host = getRequestHost();
    const proto = host.includes("localhost") ? "http" : "https";
    const origin = `${proto}://${host}`;

    const amount_cents = data.amount * 100;
    const fundLabel = data.fund;
    const isRecurring = data.recurrence !== "one_time";
    const interval = data.recurrence === "weekly" ? "week" : "month";

    const session = await stripe.checkout.sessions.create({
      mode: isRecurring ? "subscription" : "payment",
      payment_method_types: ["card"],
      customer_email: data.donor_email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: data.currency,
            unit_amount: amount_cents,
            product_data: {
              name: `Al Wahda Foundation — ${fundLabel}`,
              description: isRecurring
                ? `Recurring ${data.recurrence.replace("_", " ")} donation`
                : "One-time donation",
            },
            ...(isRecurring && { recurring: { interval } }),
          },
        },
      ],
      success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate/cancel`,
      metadata: {
        fund: data.fund,
        recurrence: data.recurrence,
        anonymous: String(data.anonymous),
        donor_name: data.donor_name ?? "",
        donor_phone: data.donor_phone ?? "",
      },
    });

    console.info("[donations] checkout created", {
      sessionId: session.id,
      fund: data.fund,
      amount_cents,
      recurrence: data.recurrence,
    });

    if (!session.url) throw new Error("Stripe did not return a checkout URL.");
    return { url: session.url };
  });
