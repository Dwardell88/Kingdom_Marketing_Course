# Kingdom Marketing

A full-stack TanStack Start + React training-course application for Christian businesses, covering Biblical marketing principles, FTC legal compliance, and real-world application.

## What's included

- Public landing page, curriculum page, and sales/enroll page
- Supabase (Lovable Cloud) authentication with Google OAuth
- Stripe-ready checkout integration (payments must be enabled in the project)
- Protected course interface with lesson progress tracking
- Row-level security (RLS) database schema for `purchases` and `lesson_progress`
- SEO: sitemap, robots.txt, and unique metadata per page

## Tech stack

- TanStack Start v1 + React 19 + TypeScript
- Tailwind CSS v4 with OKLCH design tokens
- Fraunces display + Public Sans body fonts
- Lovable Cloud / Supabase for auth and database
- Stripe for checkout (configuration required)

## Install and run

```bash
bun install
bun run dev
```

## Environment

Copy `.env` from your Lovable project settings and ensure it contains:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

Stripe requires a `STRIPE_SECRET_KEY` and `STRIPE_PRICE_ID` for live checkout.

## Database

Apply the migrations in `supabase/migrations/` to your Lovable Cloud backend.

## License

For your own use only. All rights reserved.
