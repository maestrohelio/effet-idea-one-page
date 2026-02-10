import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, TrendingUp, BarChart3, Target } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import DashboardBackground from "./DashboardBackground";

const BADGES = ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Remarketing", "Campanhas Locais", "Conversão Maximizada"];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-extrabold gradient-text">
      €{count.toLocaleString()}{suffix}
    </div>
  );
}

const AdsSection = () => (
  <section id="anuncios" className="relative py-20 md:py-28 overflow-hidden">
    <DashboardBackground />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 relative z-10"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Gestão de Campanhas que{" "}
            <span className="gradient-text">Trazem Clientes Certos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
            Não basta aparecer; é preciso converter. Gerimos suas campanhas no Google, Meta, TikTok e mais, com estratégia, análise constante e máximo retorno.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {BADGES.map((b) => (
              <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-muted text-foreground">
                {b}
              </span>
            ))}
          </div>
          <a
            href={whatsappLink("Olá! Quero anúncios que vendem!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Quero Anúncios que Vendem
          </a>
        </div>

        {/* Dashboard visual */}
        <div className="glow-card p-8">
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm mb-2">Já gerimos mais de</p>
            <AnimatedCounter target={1000000} suffix="+" />
            <p className="text-muted-foreground text-sm mt-2">em anúncios para clientes na Europa</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, label: "ROI Médio", value: "340%" },
              { icon: BarChart3, label: "Campanhas", value: "500+" },
              { icon: Target, label: "Conversões", value: "50K+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-muted/50">
                <stat.icon size={20} className="mx-auto mb-2 text-secondary" />
                <p className="font-heading font-bold text-foreground text-lg">{stat.value}</p>
                <p className="text-muted-foreground text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AdsSection;
