const WHATSAPP_PT = "351911770115";
const WHATSAPP_CH = "41766299188";

export function whatsappLink(message: string, country: "pt" | "ch" = "pt") {
  const phone = country === "pt" ? WHATSAPP_PT : WHATSAPP_CH;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Promotion config
export const PROMO_END_DATE = new Date("2025-03-31T23:59:59");
export const isPromoActive = () => new Date() < PROMO_END_DATE;
