/** Shared consent storage for the banner and the /cookies preferences widget. */

export type ConsentChoice = "all" | "essential";

const STORAGE_KEY = "tac-consent-v1";

/** Fired when a choice changes anywhere, so every consent UI stays in sync. */
export const CONSENT_EVENT = "tac-consent-change";

export const readConsent = (): ConsentChoice | null => {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "all" || value === "essential" ? value : null;
};

export const writeConsent = (choice: ConsentChoice) => {
  window.localStorage.setItem(STORAGE_KEY, choice);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
};
