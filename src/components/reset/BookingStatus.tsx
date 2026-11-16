"use client";

import { useSyncExternalStore } from "react";
import { BOOKING_CLOSES, reset } from "@/content/reset";

const CLOSES_AT = new Date(BOOKING_CLOSES).getTime();
const subscribe = () => () => {};

/**
 * The close of booking, in plain words and with no clock. The server
 * renders "Booking closes 24 November."; once that day has passed, the
 * browser swaps in the closed wording.
 */
export const BookingStatus = ({ className = "" }: { className?: string }) => {
  const closed = useSyncExternalStore(
    subscribe,
    () => Date.now() >= CLOSES_AT,
    () => false,
  );

  return <p className={className}>{closed ? reset.bookingClosed : reset.bookingCloses}</p>;
};
