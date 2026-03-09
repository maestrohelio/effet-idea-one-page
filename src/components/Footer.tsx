import { isPromoActive, getPromoEndDate } from "@/lib/whatsapp";
import logoDark from "@/assets/logo-horizontal-dark.png";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Websites", href: "#websites" },
  { label: "Anúncios", href: "#anuncios" },
  { label: "Redes Sociais", href: "#redes-sociais" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "Contactos", href: "#contactos" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div>
          <a href="https://effectidea.com" target="_blank" rel="noopener noreferrer">
            <img src={logoDark} alt="Effect Idea" className="h-8 mb-4" />
          </a>
          {isPromoActive() && (
            <p className="text-muted-foreground text-xs">
              ✨ Promoção de sites a 200€ válida até{" "}
              {getPromoEndDate().toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}.
            </p>
          )}
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4 text-sm">
          <a href="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
          <a href="/termos" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Effect Idea. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
