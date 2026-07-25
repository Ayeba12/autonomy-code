/** "2026-07-21" → "21 July 2026" (en-GB, UTC-stable). */
export const formatArticleDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
