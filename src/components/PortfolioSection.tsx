import { useState } from "react";
import { MessageCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";
import SectionWrapper from "./SectionWrapper";

type Category = "todos" | "websites" | "campanhas" | "redes";

const PROJECTS = [
  { id: 1, cat: "websites" as const, title: "E-commerce Moda Premium", desc: "Loja online com design exclusivo e checkout otimizado.", result: "+200% vendas em 3 meses", color: "from-purple-600 to-blue-500" },
  { id: 2, cat: "campanhas" as const, title: "Campanha Google Ads – Clínica", desc: "Estratégia de conversão para clínica dentária.", result: "CPA reduzido em 60%", color: "from-blue-500 to-cyan-400" },
  { id: 3, cat: "websites" as const, title: "Site Corporativo – Consultoria Financeira", desc: "Website profissional com painel de serviços e formulário de contacto.", result: "+180% leads em 4 meses", color: "from-pink-500 to-purple-600" },
  { id: 4, cat: "websites" as const, title: "Site Institucional – Advocacia", desc: "Presença digital profissional e credível.", result: "+150% leads qualificados", color: "from-indigo-500 to-purple-600" },
  { id: 5, cat: "campanhas" as const, title: "Meta Ads – Imobiliária", desc: "Campanhas segmentadas para vendas de imóveis.", result: "ROI de 420%", color: "from-green-500 to-teal-400" },
  { id: 6, cat: "websites" as const, title: "Landing Page – Clínica Estética", desc: "Página de alta conversão com agendamento online integrado.", result: "+300% agendamentos", color: "from-orange-500 to-red-500" },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "Todos", value: "todos" },
  { label: "Websites", value: "websites" },
  { label: "Campanhas", value: "campanhas" },
  { label: "Redes Sociais", value: "redes" },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState<Category>("todos");
  const filtered = filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <SectionWrapper id="portfolio" className="bg-muted/30">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Trabalhos que{" "}
          <span className="gradient-text">Falam por Nós</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Veja alguns dos sites e campanhas que criámos para clientes reais – e os resultados que alcançaram.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === f.value
                ? "gradient-bg text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glow-card overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <ExternalLink size={32} className="text-white/50 group-hover:text-white/80 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
                <span className="inline-flex items-center text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {p.result}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <a
          href={whatsappLink("Olá! Quero resultados iguais para o meu negócio!")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon inline-flex items-center gap-2"
        >
          <MessageCircle size={18} />
          Quero Resultados Iguais
        </a>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
