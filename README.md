# Kingdom Marketing

A full-stack TanStack Start + React training-course application for Christian businesses, covering Biblical marketing principles, FTC legal compliance, and real-world application.

## What's included

- Public landing page, curriculum page, and sales/enroll page
- Supabase authentication (email/password and Google OAuth)
- Stripe-ready checkout integration (payments must be enabled in the project)
- Protected course interface with lesson progress tracking
- Row-level security (RLS) database schema for `purchases` and `lesson_progress`
- SEO: sitemap, robots.txt, and unique metadata per page

## Tech stack

- TanStack Start v1 + React 19 + TypeScript
- Tailwind CSS v4 with OKLCH design tokens
- Fraunces display + Public Sans body fonts
- Supabase for auth and database
- Stripe for checkout (configuration required)

## Install and run

```bash
bun install
bun run dev
```

## Environment

Copy `.env.example` to `.env` and fill in values from your Supabase project's
Settings → API page:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=

SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=

STRIPE_SECRET_KEY=
```

`STRIPE_SECRET_KEY` is optional for local development — checkout reports
"not configured" until it's set. The checkout price is defined in
`src/lib/checkout.functions.ts` (`PRICE_CENTS`), not a Stripe Price ID.

Google sign-in requires the Google provider to be enabled under your
Supabase project's Authentication → Providers settings, with its own
Google Cloud OAuth client ID/secret.

## Database

Apply the migrations in `supabase/migrations/` to your Supabase project
(via the Supabase CLI, or paste them into the SQL editor in order).

## Deployment

The build target is set in `vite.config.ts` (`nitro({ preset: "..." })`),
currently `node-server`. Change the preset if you deploy to Vercel
(`"vercel"`), Netlify (`"netlify"`), or Cloudflare Workers
(`"cloudflare-module"`) instead.

## License

For your own use only. All rights reserved.
