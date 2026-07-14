## Goal

Build a website modeled after assunnahfoundation.org — an Islamic non-profit dedicated to education, da'wah, and welfare — as a full multi-page site with live Stripe donation checkout.

## Design direction

Editorial Islamic aesthetic: warm parchment/cream background, deep emerald + muted gold accents, generous whitespace, geometric pattern accents (subtle SVG arabesque dividers), a serif display font (e.g. Cormorant / Amiri vibe) paired with a clean sans (Inter/Work Sans). Calm, dignified, content-forward — not flashy. Before building, I'll generate 3 rendered design directions with these constraints locked and let you pick.

## Pages (file-based routes under `src/routes/`)

- `/` — Hero, mission statement, three pillars (Education / Service / Da'wah), donation CTA, ongoing activities, recent news, footer
- `/about` — Story, registration info, leadership, values
- `/programs` — All programs grouped (Regular, Seasonal, Emergency)
- `/programs/$slug` — Individual program detail pages
- `/activities` — Ongoing activities list
- `/news` — News/blog index
- `/news/$slug` — Article page
- `/events` — Upcoming events
- `/volunteer` — Volunteer form (stored via Lovable Cloud)
- `/gallery` — Photo gallery
- `/contact` — Contact info + form
- `/donate` — Donation page with fund selector, amount presets, custom amount, one-time/monthly toggle → Stripe Checkout
- `/donate/success` and `/donate/cancel` — Post-checkout pages

Each route gets its own SEO `head()` (unique title, description, og tags).

## Donations 

1. placeholder

## Backend (mongodb)

Tables:

- `donations` — donation records from webhook
- `volunteers` — volunteer signup submissions
- `contact_messages` — contact form submissions
- `newsletter_subscribers` — footer newsletter signups

All with explicit GRANTs, RLS enabled, anon INSERT-only policies where appropriate, no public reads.

## Content

Realistic placeholder content modeled after As-Sunnah Foundation (education, welfare, da'wah programs, Qurbani, flood relief, tube wells, winter clothing, etc.). Generated hero + program imagery in keeping with the chosen direction.

## Technical notes

- TanStack Start file-based routes; each leaf route sets its own `head()`
- TanStack Query for any data loading; `useSuspenseQuery` pattern
- Server functions in `src/lib/*.functions.ts`; webhook as server route under `src/routes/api/public/`
- Stripe secret used only inside `.handler()` via `process.env`
- Design tokens in `src/styles.css` only — no hardcoded color classes in components

## Build order

1. Generate 3 design directions → you pick one
2. Enable Lovable Cloud + Stripe payments
3. Migrations (tables + grants + RLS)
4. Design tokens + shared layout (nav, footer, pattern dividers)
5. Static content pages
6. Donation flow + webhook
7. Forms (volunteer, contact, newsletter) wired to DB
8. SEO polish + verify build