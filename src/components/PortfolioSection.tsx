import { MessageCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";
import SectionWrapper from "./SectionWrapper";
import portfolioTacofrei from "@/assets/portfolio-tacofrei.png";
import portfolioSwissGoldenTours from "@/assets/portfolio-swissgoldentours.png";
import portfolioToprontapramim from "@/assets/portfolio-toprontapramim.png";
import portfolioAstrologa from "@/assets/portfolio-astrologamarialuis.png";
import portfolioHappyYellow from "@/assets/portfolio-happyyellow.png";
import portfolioEstofosKorban from "@/assets/portfolio-estofoskorban.png";
import portfolioEletricaCunha from "@/assets/portfolio-eletricacunha.png";
import portfolioDiamanteDourado from "@/assets/portfolio-diamantedourado.png";
import portfolioManuelJacinto from "@/assets/portfolio-astrologomanueljacinto.png";
import portfolioArteAfiada from "@/assets/portfolio-arteafiada.png";
import portfolioAfricanoa from "@/assets/portfolio-africanoa.png";
import portfolioWsObras from "@/assets/portfolio-wsobras.png";
import portfolioJasaServicos from "@/assets/portfolio-jasaservicos.png";
import portfolioMyPortailTech from "@/assets/portfolio-myportailtech.png";
import portfolioElliHair from "@/assets/portfolio-ellihair.png";
import portfolioTonsDePele from "@/assets/portfolio-tonsdepele.png";
import portfolioOzone7 from "@/assets/portfolio-ozone7.png";



interface Project {
  id: number;
  cat: "websites" | "campanhas" | "redes";
  title: string;
  desc: string;
  result: string;
  color: string;
  image?: string;
  link?: string;
}

const PROJECTS: Project[] = [
  { id: 1, cat: "websites", title: "Tacofrei", desc: "Loja online com design exclusivo.", result: "+200% vendas em 3 meses", color: "from-purple-600 to-blue-500", image: portfolioTacofrei, link: "https://tacofrei.com/" },
  { id: 7, cat: "websites", title: "Swiss Golden Tours", desc: "Empresa de Turismo e Transfers em Zürich.", result: "+250% reservas online", color: "from-amber-500 to-orange-500", image: portfolioSwissGoldenTours, link: "https://swissgoldentours.com/" },
  { id: 8, cat: "websites", title: "Tô Pronta Pra Mim", desc: "Loja de Roupas Feminina.", result: "+320% vendas online", color: "from-rose-400 to-pink-500", image: portfolioToprontapramim, link: "https://toprontapramim.com/" },
  { id: 9, cat: "websites", title: "Astróloga Maria Luis", desc: "Astrologia, Tarôt e Espiritualidade.", result: "+280% consultas online", color: "from-teal-600 to-emerald-500", image: portfolioAstrologa, link: "https://astrologamarialuis.com/" },
  { id: 10, cat: "websites", title: "Happy Yellow", desc: "Eventos, Show e Agenciamento.", result: "+350% visibilidade online", color: "from-yellow-400 to-amber-500", image: portfolioHappyYellow, link: "https://happy-yellow.com/" },
  { id: 11, cat: "websites", title: "Estofos Korban", desc: "Estofamento de Luxo para Iates.", result: "+220% pedidos de orçamento", color: "from-sky-500 to-blue-600", image: portfolioEstofosKorban, link: "https://estofoskorban.com/" },
  { id: 12, cat: "websites", title: "Elétrica Cunha Soluções", desc: "Serviços de elétrica.", result: "+190% pedidos online", color: "from-orange-500 to-amber-600", image: portfolioEletricaCunha, link: "https://eletricacunhasolucoes.com/" },
  { id: 13, cat: "websites", title: "Diamante Dourado", desc: "Imobiliária.", result: "+400% leads qualificados", color: "from-yellow-600 to-amber-700", image: portfolioDiamanteDourado, link: "https://diamantedourado.com.pt/" },
  { id: 14, cat: "websites", title: "Astrólogo Manuel Jacinto", desc: "Astrologia e Tarot.", result: "+260% consultas agendadas", color: "from-violet-600 to-purple-700", image: portfolioManuelJacinto, link: "https://astrologomanueljacinto.com/" },
  { id: 15, cat: "websites", title: "Cutelaria Arte Afiada", desc: "Cutelaria e Facas Especiais.", result: "+290% vendas online", color: "from-stone-600 to-amber-700", image: portfolioArteAfiada, link: "https://arteafiada.com/" },
  { id: 16, cat: "websites", title: "Africanoa", desc: "Viagens, Turismo e Exportação.", result: "+310% reservas online", color: "from-green-600 to-emerald-500", image: portfolioAfricanoa, link: "https://africanoa.com/" },
  { id: 17, cat: "websites", title: "WS Obras", desc: "Obras e Remodelações.", result: "+240% pedidos de orçamento", color: "from-red-500 to-rose-600", image: portfolioWsObras, link: "https://ws-obras.com/" },
  { id: 18, cat: "websites", title: "Jasa Serviços", desc: "Mudanças em Geral.", result: "+200% contactos online", color: "from-red-600 to-gray-700", image: portfolioJasaServicos, link: "https://jasaservicos.effectidea.com/" },
  { id: 19, cat: "websites", title: "My Portail Tech", desc: "Automações de Portões.", result: "+270% pedidos online", color: "from-orange-500 to-yellow-500", image: portfolioMyPortailTech, link: "https://myportailtech.com/" },
  { id: 20, cat: "websites", title: "Elli Hair", desc: "Produtos para Cabelos Especiais.", result: "+340% vendas online", color: "from-yellow-700 to-amber-800", image: portfolioElliHair, link: "https://lp.ellihair.com/" },
  { id: 21, cat: "websites", title: "Tons de Pele", desc: "Vestuário Íntimo Feminino.", result: "+380% vendas online", color: "from-rose-700 to-red-800", image: portfolioTonsDePele, link: "https://tonsdepele.com/" },
  { id: 22, cat: "websites", title: "Ozone 7 Real Estate", desc: "Imobiliária.", result: "+350% leads qualificados", color: "from-amber-500 to-yellow-600", image: portfolioOzone7, link: "https://ozone7realestate.com/" },
  { id: 23, cat: "websites", title: "Nome do Projeto 3", desc: "Descrição do projeto.", result: "+200% resultados", color: "from-lime-500 to-green-500" },
];

const PortfolioSection = () => {

  return (
    <SectionWrapper id="portfolio" className="bg-muted/30">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Trabalhos que{" "}
          <span className="gradient-text">Falam por Nós</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Veja alguns dos sites que criámos para clientes reais – e os resultados que alcançaram.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glow-card overflow-hidden group"
            >
              {p.image ? (
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full absolute top-0 left-0 group-hover:-translate-y-[calc(100%-12rem)]"
                    style={{ transition: "transform 12s ease-in-out" }}
                  />
                </div>
              ) : (
                <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <ExternalLink size={32} className="text-white/50 group-hover:text-white/80 transition-colors" />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {p.result}
                  </span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Ver Site
                    </a>
                  )}
                </div>
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
