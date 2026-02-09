import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import logoDark from "@/assets/logo-horizontal-dark.png";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Websites", href: "#websites" },
  { label: "Anúncios", href: "#anuncios" },
  { label: "Redes Sociais", href: "#redes-sociais" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "Contactos", href: "#contactos" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio">
          <img src={logoDark} alt="Effect Idea" className="h-8 md:h-10" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Olá! Gostaria de saber mais sobre os vossos serviços.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon hidden sm:inline-flex items-center gap-2 text-sm"
          >
            <MessageCircle size={16} />
            Fale Connosco
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de saber mais sobre os vossos serviços.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon mt-3 inline-flex items-center gap-2 text-sm w-full justify-center"
          >
            <MessageCircle size={16} />
            Fale Connosco
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
