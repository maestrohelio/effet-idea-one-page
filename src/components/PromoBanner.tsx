import { useEffect, useState } from "react";
import { Rocket, Clock } from "lucide-react";
import { whatsappLink, getPromoEndDate } from "@/lib/whatsapp";

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = getPromoEndDate().getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setExpired(true);
        return;
      }
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

  return (
    <div className="fixed top-16 left-0 right-0 z-40 gradient-bg-animated py-2 px-0 sm:px-4">
      <div className="w-full px-3 sm:container sm:mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1 sm:gap-2 text-primary-foreground text-[10px] sm:text-sm font-medium min-w-0">
          <Rocket size={12} className="shrink-0 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">
            <strong>PROMOÇÃO RELÂMPAGO:</strong> Sites Profissionais a partir de <strong>200€</strong>!
          </span>
          <span className="sm:hidden font-bold leading-tight">
            PROMOÇÃO RELÂMPAGO: Sites a partir de 200€!
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <span className="text-primary-foreground text-[10px] sm:text-xs font-mono">
            {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
          </span>

          {expired ? (
            <a
              href={whatsappLink("Quero o site por 200€")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs py-1 px-2.5 sm:py-1.5 sm:px-4 whitespace-nowrap font-bold rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors animate-pulse shadow-lg"
            >
              Ainda dá Tempo!
            </a>
          ) : (
            <a
              href={whatsappLink("Quero o site por 200€")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon text-[10px] sm:text-xs py-1 px-2.5 sm:py-1.5 sm:px-4 whitespace-nowrap"
            >
              Quero Aproveitar
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
