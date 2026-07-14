import { createFileRoute } from "@tanstack/react-router";

// Stripe webhook endpoint.
// Configure this URL in your Stripe dashboard:
//   https://<your-domain>/api/public/stripe-webhook
// and set STRIPE_WEBHOOK_SECRET in project secrets.
export const Route = createFileRoute("/api/public/stripe-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env.STRIPE_SECRET_KEY;
        const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
        if (!key || !whSecret) {
          return new Response("Stripe not configured", { status: 503 });
        }

        const sig = request.headers.get("stripe-signature");
        if (!sig) return new Response("Missing signature", { status: 400 });

        const body = await request.text();
        const Stripe = (await import("stripe")).default;
        const stripe = new Stripe(key);

        let event: import("stripe").Stripe.Event;
        try {
          event = await stripe.webhooks.constructEventAsync(body, sig, whSecret);
        } catch (err) {
          console.error("[stripe-webhook] bad signature", err);
          return new Response("Invalid signature", { status: 400 });
        }

        console.info("[stripe-webhook] event received", { type: event.type, id: event.id });
        return new Response("ok");
      },
    },
  },
});
