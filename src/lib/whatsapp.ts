const WHATSAPP_PT = "351911770115";
const WHATSAPP_CH = "41766299188";

export function whatsappLink(message: string, country: "pt" | "ch" = "pt") {
  const phone = country === "pt" ? WHATSAPP_PT : WHATSAPP_CH;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Promotion: 3 days, 6 hours, 30 minutes from first visit
const PROMO_DURATION_MS = (3 * 86400 + 6 * 3600 + 30 * 60) * 1000;
const STORAGE_KEY = "ei_promo_start";

export function getPromoEndDate(): Date {
  let start = localStorage.getItem(STORAGE_KEY);
  if (!start) {
    start = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, start);
  }
  return new Date(new Date(start).getTime() + PROMO_DURATION_MS);
}

export const isPromoActive = () => new Date() < getPromoEndDate();
