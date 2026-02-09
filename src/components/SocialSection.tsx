import { CalendarDays, MessageSquare, Palette, BarChart, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import SectionWrapper from "./SectionWrapper";

const SERVICES = [
  { icon: CalendarDays, title: "Planeamento de Conteúdo Mensal", desc: "Estratégia editorial alinhada à sua marca." },
  { icon: MessageSquare, title: "Gestão Diária & Interação", desc: "Presença ativa e engajamento real." },
  { icon: Palette, title: "Criação Visual", desc: "Imagens, vídeos, stories de impacto." },
  { icon: BarChart, title: "Relatórios de Desempenho", desc: "Dados claros para decisões inteligentes." },
];

const SocialSection = () => (
  <SectionWrapper id="redes-sociais">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Redes Sociais que{" "}
        <span className="gradient-text">Conectam e Engajam</span>
      </h2>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        Construímos e gerimos sua presença social com conteúdo relevante, consistente e alinhado à sua marca – para criar comunidade e fidelizar clientes.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {SERVICES.map((s) => (
        <div key={s.title} className="glow-card p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-bg flex items-center justify-center">
            <s.icon size={24} className="text-primary-foreground" />
          </div>
          <h3 className="font-heading font-bold text-foreground mb-2 text-sm">{s.title}</h3>
          <p className="text-muted-foreground text-sm">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className="text-center">
      <a
        href={whatsappLink("Olá! Quero as minhas redes sociais profissionais!")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-neon inline-flex items-center gap-2"
      >
        <MessageCircle size={18} />
        Quero Minhas Redes Profissionais
      </a>
    </div>
  </SectionWrapper>
);

export default SocialSection;
