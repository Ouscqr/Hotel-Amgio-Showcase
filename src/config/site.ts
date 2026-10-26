/**
 * Central, environment-driven site configuration.
 *
 * Everything that identifies a real property (brand name, street address,
 * phone number, e-mail address, booking-engine endpoints, map embed) is read
 * from Vite environment variables at build time so that this repository can be
 * published without any client data. See `.env.example` for the full list.
 *
 * IMPORTANT: only `VITE_`-prefixed variables are inlined into the browser
 * bundle. Never put an API key, token, webhook secret or password here - those
 * belong in server-side code (Vercel Function / API route) and must never be
 * prefixed with `VITE_`.
 */

const env = import.meta.env;

/** Returns a trimmed value, or `null` when the variable is unset/blank. */
function readEnv(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : null;
}

function readEnvOr(value: string | undefined, fallback: string): string {
  return readEnv(value) ?? fallback;
}

/**
 * Neutral demo values used when the project runs without a `.env` file.
 * They are intentionally generic and match `reservations@example.com` style
 * placeholders so that nothing points at a real business.
 */
const demo = {
  name: "Harbor House Amsterdam",
  street: "123 Example Street",
  cityLine: "1000 AA Amsterdam",
  country: "Netherlands",
  email: "reservations@example.com",
  phoneDisplay: "+31 20 000 0000",
  phoneHref: "+31200000000",
  mapEmbedUrl: "https://www.google.com/maps?q=Amsterdam&output=embed",
} as const;

export const siteConfig = {
  /** Brand name shown in the footer, as the hero subtitle and in the page title. */
  name: readEnvOr(env.VITE_HOTEL_NAME, demo.name),

  contact: {
    /** Recipient for contact-form enquiries (also used to build the mailto: link). */
    email: readEnvOr(env.VITE_CONTACT_EMAIL, demo.email),
    /** Formatted for humans, e.g. "+31 20 000 0000". */
    phoneDisplay: readEnvOr(env.VITE_CONTACT_PHONE_DISPLAY, demo.phoneDisplay),
    /** E.164 value used in the `tel:` link, e.g. "+31200000000". */
    phoneHref: readEnvOr(env.VITE_CONTACT_PHONE_HREF, demo.phoneHref),
    address: {
      street: readEnvOr(env.VITE_HOTEL_STREET, demo.street),
      cityLine: readEnvOr(env.VITE_HOTEL_CITY_LINE, demo.cityLine),
      country: readEnvOr(env.VITE_HOTEL_COUNTRY, demo.country),
    },
    /** Public Google Maps embed URL (the keyless `output=embed` form works fine). */
    mapEmbedUrl: readEnvOr(env.VITE_MAP_EMBED_URL, demo.mapEmbedUrl),
  },

  booking: {
    /** Landing page of the booking engine, used by all "Book now" call to actions. */
    defaultUrl: readEnv(env.VITE_BOOKING_URL),
    /** Endpoint that accepts arrival/departure query parameters (deep link). */
    searchUrl: readEnv(env.VITE_BOOKING_SEARCH_URL),
    /** Query parameter names expected by the booking engine. */
    checkInParam: readEnvOr(env.VITE_BOOKING_CHECKIN_PARAM, "checkIn"),
    checkOutParam: readEnvOr(env.VITE_BOOKING_CHECKOUT_PARAM, "checkOut"),
    /** Locale forwarded to the booking engine. */
    language: readEnvOr(env.VITE_BOOKING_LANGUAGE, "en"),
    /** `false` when the app runs in demo mode without a booking engine. */
    get isConfigured(): boolean {
      return Boolean(this.defaultUrl || this.searchUrl);
    },
  },
} as const;

/** Static document title, also used when the bundle is rendered without a backend. */
export const documentTitle = `${siteConfig.name} | Direct Booking`;
