import { Monitor, Search, Share2, Zap, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink, isPromoActive } from "@/lib/whatsapp";
import websitesBg from "@/assets/websites-bg.jpg";

const FEATURES = [
  { icon: Monitor, title: "Design Responsivo & Moderno", desc: "Sites que ficam perfeitos em qualquer dispositivo." },
  { icon: Search, title: "Otimizado para SEO", desc: "Apareça nos primeiros resultados do Google." },
  { icon: Share2, title: "Integração Social & WhatsApp", desc: "Conecte todas as suas plataformas." },
  { icon: Zap, title: "Rápido, Seguro e Pronto para Vender", desc: "Performance máxima e alta conversão." },
];

const WebsitesSection = () => (
  <section id="websites" className="relative py-20 md:py-28 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img
        src={websitesBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-center"
      />
    </div>
    {/* Overlay 60% */}
    <div className="absolute inset-0 z-[1] bg-background/60" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 relative z-10"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Sites Profissionais que{" "}
            <span className="gradient-text">Cativam e Convertem</span>
          </h2>
          {isPromoActive() && (
            <span className="pulse-badge inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              PROMOÇÃO ATIVA
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Cada site é uma máquina de vendas 24/7, pensado para o seu negócio e otimizado para performance, SEO e experiência do utilizador.
          {isPromoActive() && (
            <span className="block mt-2 text-foreground font-medium">
              Aproveite nossa promoção relâmpago: sites profissionais completos a partir de 200€, por tempo limitado.
            </span>
          )}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {FEATURES.map((f) => (
          <div key={f.title} className="glow-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-bg flex items-center justify-center">
              <f.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={whatsappLink("Olá! Quero o meu site premium!")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon inline-flex items-center gap-2"
        >
          <MessageCircle size={18} />
          Quero Meu Site Premium
        </a>
        {isPromoActive() && (
          <a
            href={whatsappLink("Quero o site por 200€")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-border rounded-lg px-6 py-3 hover:bg-muted transition-colors"
          >
            <Clock size={16} />
            Aproveitar Promoção de 200€
          </a>
        )}
      </div>
    </motion.div>
  </section>
);

export default WebsitesSection;
