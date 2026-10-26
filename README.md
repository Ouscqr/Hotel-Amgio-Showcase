# Hotel Booking Showcase

A production-grade marketing site for a city hotel: responsive landing page, date-based
booking deep links, a validated enquiry form, five locales and dark mode.

> **Demo content.** This repository is a portfolio build. Branding, address, phone number,
> booking endpoints and room inventory are supplied through environment variables and
> neutral placeholders - no customer data, credentials or proprietary endpoints live in the
> codebase. See [Configuration](#configuration).

---

## Tech stack

| Concern   | Choice                                                            |
| --------- | ----------------------------------------------------------------- |
| Framework | React 18 + TypeScript, bundled with Vite 5                        |
| Styling   | Tailwind CSS + shadcn/ui (Radix primitives)                       |
| Forms     | Zod schema validation, react-hook-form available for larger forms |
| Dates     | date-fns + react-day-picker                                       |
| i18n      | Lightweight context-based dictionary (`src/locales`)              |
| Hosting   | Vercel (SPA rewrites + security headers in `vercel.json`)         |

## Getting started

```bash
npm install
cp .env.example .env   # optional: the app runs on demo defaults without it
npm run dev            # http://localhost:8080
```

Other scripts:

```bash
npm run build     # production bundle in dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

Requires Node.js 18+.

## Configuration

Every property-specific value is read at build time in `src/config/site.ts` from
`VITE_*` environment variables. Missing values fall back to generic demo data, so the
project builds and runs with zero configuration.

| Variable                      | Purpose                                           |
| ----------------------------- | ------------------------------------------------- |
| `VITE_HOTEL_NAME`             | Brand name (footer, page title)                   |
| `VITE_CONTACT_EMAIL`          | Enquiry recipient / displayed e-mail              |
| `VITE_CONTACT_PHONE_DISPLAY`  | Human-readable phone number                       |
| `VITE_CONTACT_PHONE_HREF`     | E.164 phone number for `tel:` links               |
| `VITE_HOTEL_STREET`           | Address line 1                                    |
| `VITE_HOTEL_CITY_LINE`        | Postal code + city                                |
| `VITE_HOTEL_COUNTRY`          | Country                                           |
| `VITE_MAP_EMBED_URL`          | Keyless Google Maps embed URL                     |
| `VITE_BOOKING_URL`            | Booking-engine landing page                       |
| `VITE_BOOKING_SEARCH_URL`     | Deep-link endpoint that accepts arrival/departure |
| `VITE_BOOKING_CHECKIN_PARAM`  | Query parameter name for the arrival date         |
| `VITE_BOOKING_CHECKOUT_PARAM` | Query parameter name for the departure date       |
| `VITE_BOOKING_LANGUAGE`       | Locale forwarded to the booking engine            |

Leave the booking variables empty to run the public demo: the UI then explains that the
engine is not configured instead of redirecting visitors to a third-party URL.

**Secrets never belong in this file.** Only `VITE_*` variables reach the browser bundle.
Anything sensitive (mail-provider API keys, webhook secrets, database URIs) must live in
server-side code and be supplied through the hosting provider's environment store.

## Project structure

```
src/
├── components/        # Navbar, hero, booking form, room cards, UI kit
├── config/            # site.ts (env-driven config) + rooms.ts (demo inventory)
├── contexts/          # language provider
├── lib/booking.ts     # booking-engine deep-link builder
├── locales/           # en, es, it, pt, zh dictionaries
└── pages/             # Index, Contact, NotFound
```

## Behaviour worth reviewing

- **Booking deep links** - `lib/booking.ts` builds a URL with the provider's non-padded
  date format and configurable parameter names, so switching providers is a config change.
- **Graceful demo mode** - when no booking engine is configured, call-to-actions surface a
  toast instead of navigating to a dead or third-party link.
- **Enquiry form** - every field is trimmed, type-checked and length-capped with Zod before
  it is encoded into the `mailto:` payload, which prevents header injection. The same
  schema validates a server-side route if the form is later wired to an API.
- **Security headers** - `vercel.json` ships a strict CSP, HSTS, `nosniff`,
  `frame-ancestors 'none'` and a restrictive `Permissions-Policy`.
- **No source maps in production** - the public bundle cannot be used to reconstruct the
  source tree.

## License

Released for portfolio review. Photography is placeholder imagery; replace it with assets
you own or are licensed to use before deploying.
