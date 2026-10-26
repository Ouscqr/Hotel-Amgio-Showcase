import { format } from "date-fns";
import { siteConfig } from "@/config/site";

/**
 * Date format expected by the booking engine: non-padded month/day
 * (e.g. `2025-5-9` instead of `2025-05-09`). This is a provider contract,
 * not configuration - adjust here if you switch providers.
 */
const BOOKING_DATE_FORMAT = "yyyy-M-d";

/**
 * Only absolute http(s) URLs may be used for navigation. This blocks a
 * misconfigured (or malicious) environment value such as `javascript:...`
 * from being executed in the visitor's browser.
 */
function isSafeNavigationUrl(value: string | null): value is string {
  if (!value) return false;
  try {
    const { protocol } = new URL(value);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * Builds a deep link into the configured booking engine.
 *
 * Returns `null` when no booking engine is configured, which is the normal
 * state for the public demo build of this portfolio project.
 */
export function generateBookingUrl(
  checkIn?: Date,
  checkOut?: Date,
  guests?: number
): string | null {
  const { defaultUrl, searchUrl, checkInParam, checkOutParam, language } =
    siteConfig.booking;

  if (!isSafeNavigationUrl(searchUrl)) {
    return isSafeNavigationUrl(defaultUrl) ? defaultUrl : null;
  }

  if (!checkIn || !checkOut) {
    return isSafeNavigationUrl(defaultUrl) ? defaultUrl : null;
  }

  const params = new URLSearchParams({
    lang: language,
    [checkInParam]: format(checkIn, BOOKING_DATE_FORMAT),
    [checkOutParam]: format(checkOut, BOOKING_DATE_FORMAT),
  });

  // Party size is not part of the current provider contract. When the engine
  // supports it, add the parameter here (with clamping) instead of trusting the
  // raw value from the form.
  void guests;

  const separator = searchUrl.includes("?") ? "&" : "?";
  return `${searchUrl}${separator}${params.toString()}`;
}

/**
 * Sends the visitor to the booking engine.
 * Returns `false` in demo mode so the caller can explain what happened.
 */
export function openBookingPage(checkIn?: Date, checkOut?: Date): boolean {
  const url = generateBookingUrl(checkIn, checkOut);
  if (!url) {
    return false;
  }
  window.location.assign(url);
  return true;
}

