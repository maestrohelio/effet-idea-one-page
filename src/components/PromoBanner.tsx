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
          <div className="flex items-center gap-1 text-primary-foreground text-[10px] sm:text-xs">
            <Clock size={12} className="shrink-0 hidden sm:block" />
            <span>{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>

          {expired ? (
            <a
              href={whatsappLink("Quero o site por 200€")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs py-1.5 px-4 whitespace-nowrap font-bold rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors animate-pulse shadow-lg"
            >
              Ainda dá Tempo, Clique Aqui!
            </a>
          ) : (
            <a
              href={whatsappLink("Quero o site por 200€")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon text-xs py-1.5 px-4 whitespace-nowrap"
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
