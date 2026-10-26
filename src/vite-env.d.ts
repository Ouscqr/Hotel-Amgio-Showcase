/// <reference types="vite/client" />

/**
 * Public, build-time configuration. Only `VITE_`-prefixed variables are exposed
 * to the browser bundle - never add secrets to this interface.
 */
interface ImportMetaEnv {
  readonly VITE_HOTEL_NAME?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_CONTACT_PHONE_DISPLAY?: string;
  readonly VITE_CONTACT_PHONE_HREF?: string;
  readonly VITE_HOTEL_STREET?: string;
  readonly VITE_HOTEL_CITY_LINE?: string;
  readonly VITE_HOTEL_COUNTRY?: string;
  readonly VITE_MAP_EMBED_URL?: string;
  readonly VITE_BOOKING_URL?: string;
  readonly VITE_BOOKING_SEARCH_URL?: string;
  readonly VITE_BOOKING_CHECKIN_PARAM?: string;
  readonly VITE_BOOKING_CHECKOUT_PARAM?: string;
  readonly VITE_BOOKING_LANGUAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
