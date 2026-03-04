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
import portfolioSavana from "@/assets/portfolio-savanaconstrucoes.png";
import portfolioPetalasLisas from "@/assets/portfolio-petalaslisas.png";
import portfolioGlamourFestivo from "@/assets/portfolio-glamourfestivo.png";
import portfolioWilhelmImport from "@/assets/portfolio-wilhelmimport.png";
import portfolioNaturadente from "@/assets/portfolio-naturadente.png";
import portfolioBoutiquePurple from "@/assets/portfolio-boutiquepurplefashion.png";
import portfolioPerfumaria from "@/assets/portfolio-perfumariacosmetica.png";
import portfolioLiebeZumHaus from "@/assets/portfolio-liebezumhaus.png";
import portfolioImperioKiss from "@/assets/portfolio-imperiokiss.png";
import portfolioDaylinCabrera from "@/assets/portfolio-daylincabrera.png";
import portfolioPaulaDuarte from "@/assets/portfolio-pauladuarteadvogados.png";
import portfolioMarisolTravel from "@/assets/portfolio-marisoltravel.png";
import portfolioSouzaCar from "@/assets/portfolio-oficinasouzacar.png";
import portfolioFemmeSkin from "@/assets/portfolio-femmeskin.png";
import portfolioJoaoSantos from "@/assets/portfolio-joaosantosimobiliaria.png";
import portfolioIndianPalace from "@/assets/portfolio-indianpalacetandoori.png";
import portfolioLemosBeauty from "@/assets/portfolio-lemosbeautyhome.png";
import portfolioArteNoAzulejo from "@/assets/portfolio-artenoazulejo.png";
import portfolioTotalMudancas from "@/assets/portfolio-totalmudancas.png";
import portfolioTikkaTalk from "@/assets/portfolio-tikkatalk.png";
import portfolioCabeloPremium from "@/assets/portfolio-cabelopremium.png";
import portfolioIngridSuellen from "@/assets/portfolio-ingridsuellen.png";
import portfolioTecnicaEliane from "@/assets/portfolio-tecnicaelianewilhelm.png";
import portfolioLastMountain from "@/assets/portfolio-lavandarialastmountain.png";
import portfolioMrtAutoSpa from "@/assets/portfolio-mrtautospa.png";

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
  { id: 23, cat: "websites", title: "Savana Construções", desc: "Remodelações e Construções.", result: "+280% pedidos de orçamento", color: "from-red-600 to-orange-600", image: portfolioSavana, link: "https://savanaconstrucoes.com/" },
  { id: 24, cat: "websites", title: "Pétalas Lisas", desc: "Empresa de Limpeza.", result: "+300% contactos online", color: "from-cyan-500 to-blue-500", image: portfolioPetalasLisas, link: "https://petalaslisas.com/" },
  { id: 25, cat: "websites", title: "Glamour Festivo", desc: "Roupas de Casamento.", result: "+350% vendas online", color: "from-indigo-500 to-violet-500", image: portfolioGlamourFestivo, link: "https://glamourfestivo.com/" },
  { id: 26, cat: "websites", title: "Wilhelm Import", desc: "Importação e Exportação.", result: "+280% leads qualificados", color: "from-teal-500 to-cyan-500", image: portfolioWilhelmImport, link: "https://wilhelmimport.com/" },
  { id: 27, cat: "websites", title: "Naturadente", desc: "Odontologia.", result: "+320% consultas agendadas", color: "from-pink-500 to-rose-500", image: portfolioNaturadente, link: "https://naturadente.com/" },
  { id: 28, cat: "websites", title: "Boutique Purple Fashion", desc: "Vestuário Feminino.", result: "+350% vendas online", color: "from-emerald-500 to-green-500", image: portfolioBoutiquePurple, link: "https://boutiquepurplefashion.com/" },
  { id: 29, cat: "websites", title: "Perfumaria Cosmética", desc: "Perfumes e Cosméticos.", result: "+290% vendas online", color: "from-amber-500 to-orange-500", image: portfolioPerfumaria, link: "https://perfumariacosmetica.pt/" },
  { id: 30, cat: "websites", title: "Liebe Zum Haus", desc: "Empresa de Limpeza.", result: "+300% contactos online", color: "from-blue-500 to-indigo-500", image: portfolioLiebeZumHaus, link: "https://liebezumhaus.com/" },
  { id: 31, cat: "websites", title: "Imperio Kiss", desc: "Clínica Odontológica.", result: "+320% consultas agendadas", color: "from-violet-500 to-purple-500", image: portfolioImperioKiss, link: "https://imperiokiss.com/" },
  { id: 32, cat: "websites", title: "Daylin Cabrera", desc: "Cabeleireira.", result: "+280% agendamentos online", color: "from-orange-500 to-red-500", image: portfolioDaylinCabrera, link: "https://daylincabrera.com/" },
  { id: 33, cat: "websites", title: "Paula Duarte Advogados", desc: "Advogacia.", result: "+300% consultas agendadas", color: "from-cyan-500 to-blue-500", image: portfolioPaulaDuarte, link: "https://pauladuarteadvogados.com/" },
  { id: 34, cat: "websites", title: "Marisol Travel", desc: "Viagens e Turismo.", result: "+350% reservas online", color: "from-rose-500 to-pink-500", image: portfolioMarisolTravel, link: "https://marisoltravel.com/" },
  { id: 35, cat: "websites", title: "Oficina Souza Car", desc: "Oficina Mecânica.", result: "+280% agendamentos online", color: "from-emerald-500 to-teal-500", image: portfolioSouzaCar, link: "https://oficinasouzacar.com/" },
  { id: 36, cat: "websites", title: "Femme Skin", desc: "Estética e Massagens.", result: "+320% agendamentos online", color: "from-purple-500 to-indigo-500", image: portfolioFemmeSkin, link: "https://femme.skin/" },
  { id: 37, cat: "websites", title: "João Santos Imobiliária", desc: "Imobiliária.", result: "+350% leads qualificados", color: "from-amber-500 to-yellow-500", image: portfolioJoaoSantos, link: "https://joaosantosimobiliaria.com/" },
  { id: 38, cat: "websites", title: "Indian Palace Tandoori", desc: "Restaurante Indiano.", result: "+290% reservas online", color: "from-red-500 to-orange-500", image: portfolioIndianPalace, link: "https://indianpalacetandoori.com/" },
  { id: 39, cat: "websites", title: "Lemos Beauty Home", desc: "Estética, Massagens e Maquiagem.", result: "+320% agendamentos online", color: "from-sky-500 to-cyan-500", image: portfolioLemosBeauty, link: "https://lemosbeautyhome.com/" },
  { id: 40, cat: "websites", title: "Arte no Azulejo", desc: "Azulejos Artesanais feitos à mão.", result: "+280% vendas online", color: "from-fuchsia-500 to-pink-500", image: portfolioArteNoAzulejo, link: "https://artenoazulejo.com/" },
  { id: 41, cat: "websites", title: "Total Mudanças", desc: "Empresa de Mudanças.", result: "+300% pedidos de orçamento", color: "from-lime-500 to-green-500", image: portfolioTotalMudancas, link: "https://totalmudancas.com/" },
  { id: 42, cat: "websites", title: "Tikka Talk Restaurant", desc: "Restaurante Indiano.", result: "+310% reservas online", color: "from-violet-500 to-blue-500", image: portfolioTikkaTalk, link: "https://tikkatalkrestaurant.com/" },
  { id: 43, cat: "websites", title: "Cabelo Premium", desc: "Produtos Capilares.", result: "+290% vendas online", color: "from-teal-500 to-emerald-500", image: portfolioCabeloPremium, link: "https://cabelopremium.com/" },
  { id: 44, cat: "websites", title: "Ingrid Suellen", desc: "Design de Sobrancelhas.", result: "+340% agendamentos online", color: "from-orange-500 to-amber-500", image: portfolioIngridSuellen, link: "https://ingridsuellen.com/" },
  { id: 45, cat: "websites", title: "Técnica Eliane Wilhelm", desc: "Depilação.", result: "+310% agendamentos online", color: "from-cyan-500 to-blue-500", image: portfolioTecnicaEliane, link: "https://tecnicaelianewilhelm.com/" },
  { id: 46, cat: "websites", title: "Lavandaria Last Mountain", desc: "Lavandaria de Roupas.", result: "+280% pedidos online", color: "from-rose-500 to-pink-500", image: portfolioLastMountain, link: "https://lavandarialastmountain.com/" },
  { id: 47, cat: "websites", title: "MRT Auto Spa", desc: "Lavagem de Automóveis.", result: "+320% reservas online", color: "from-emerald-500 to-teal-500", image: portfolioMrtAutoSpa, link: "https://mrtautospa.com/" },
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
                    loading="lazy"
                    decoding="async"
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
                      className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/85 transition-all shadow-md hover:shadow-lg"
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
