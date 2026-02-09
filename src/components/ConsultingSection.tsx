import { Search, Lightbulb, FileText, ShieldCheck, MessageCircle } from "lucide-react";
import { whatsappLink, isPromoActive } from "@/lib/whatsapp";
import SectionWrapper from "./SectionWrapper";

const BENEFITS = [
  { icon: Search, text: "Análise do seu negócio e presença atual" },
  { icon: Lightbulb, text: "Identificação de oportunidades" },
  { icon: FileText, text: "Plano de ação personalizado" },
  { icon: ShieldCheck, text: "Sem compromisso" },
];

const ConsultingSection = () => (
  <SectionWrapper id="consultoria">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Descubra como{" "}
        <span className="gradient-text">Potencializar seu Negócio</span>
        {" "}– Grátis
      </h2>
      <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
        Agende uma consultoria estratégica gratuita de 30 minutos. Analisamos seu caso e traçamos um plano claro para você crescer online.
        {isPromoActive() && (
          <span className="block mt-2 text-foreground font-medium">
            Na consultoria, mostramos como pode ter um site profissional por 200€ durante a promoção vigente.
          </span>
        )}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto text-left">
        {BENEFITS.map((b) => (
          <div key={b.text} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <b.icon size={20} className="text-accent shrink-0 mt-0.5" />
            <span className="text-foreground text-sm font-medium">{b.text}</span>
          </div>
        ))}
      </div>

      <a
        href={whatsappLink("Olá! Quero agendar a minha consultoria grátis!")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-neon inline-flex items-center gap-2 text-base px-8 py-4"
      >
        <MessageCircle size={20} />
        Quero Minha Consultoria Grátis
      </a>
    </div>
  </SectionWrapper>
);

export default ConsultingSection;
