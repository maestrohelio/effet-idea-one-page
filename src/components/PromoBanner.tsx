import { useEffect, useState } from "react";
import { Rocket, Clock } from "lucide-react";
import { whatsappLink, PROMO_END_DATE, isPromoActive } from "@/lib/whatsapp";

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = PROMO_END_DATE.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!isPromoActive()) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 gradient-bg-animated py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary-foreground text-xs sm:text-sm font-medium">
          <Rocket size={16} className="shrink-0" />
          <span className="hidden sm:inline">
            <strong>PROMOÇÃO RELÂMPAGO:</strong> Sites Profissionais a partir de <strong>200€</strong>!
          </span>
          <span className="sm:hidden font-bold">Sites a 200€ – Tempo Limitado!</span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-primary-foreground text-xs">
            <Clock size={14} />
            <span>{timeLeft.days}d {String(timeLeft.hours).padStart(2, "0")}h {String(timeLeft.minutes).padStart(2, "0")}m {String(timeLeft.seconds).padStart(2, "0")}s</span>
          </div>
          <a
            href={whatsappLink("Quero o site por 200€")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-xs py-1.5 px-4 whitespace-nowrap"
          >
            Quero Aproveitar
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
