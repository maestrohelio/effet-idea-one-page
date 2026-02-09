import { MessageCircle, Mail, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import SectionWrapper from "./SectionWrapper";

const SOCIALS = [
  { name: "Facebook", url: "https://www.facebook.com/Effectidea", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "Instagram", url: "https://www.instagram.com/effectidea/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCx7nbv6Wa-8jk7f9w781mnw", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "Twitter", url: "https://twitter.com/idea_effect", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

const ContactsSection = () => (
  <SectionWrapper id="contactos" className="bg-muted/30">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Pronto para{" "}
        <span className="gradient-text">Transformar seu Negócio?</span>
      </h2>
      <p className="text-muted-foreground text-base md:text-lg mb-10">
        Fale connosco por WhatsApp, telefone ou redes sociais. Atendemos em português, com equipas em Portugal e Suíça.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        <a href={whatsappLink("Olá! Gostaria de falar com um especialista.")} target="_blank" rel="noopener noreferrer" className="glow-card p-6 text-center group">
          <Phone size={24} className="mx-auto mb-3 text-accent" />
          <p className="text-xs text-muted-foreground mb-1">WhatsApp Portugal</p>
          <p className="text-foreground font-semibold">+351 911 770 115</p>
        </a>
        <a href="https://wa.me/41766299188" target="_blank" rel="noopener noreferrer" className="glow-card p-6 text-center group">
          <Phone size={24} className="mx-auto mb-3 text-accent" />
          <p className="text-xs text-muted-foreground mb-1">WhatsApp Suíça</p>
          <p className="text-foreground font-semibold">+41 76 629 91 88</p>
        </a>
        <a href="mailto:info@effectidea.com" className="glow-card p-6 text-center group">
          <Mail size={24} className="mx-auto mb-3 text-accent" />
          <p className="text-xs text-muted-foreground mb-1">E-mail</p>
          <p className="text-foreground font-semibold">info@effectidea.com</p>
        </a>
      </div>

      <div className="flex items-center justify-center gap-4 mb-10">
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-muted-foreground group-hover:fill-primary-foreground transition-colors">
              <path d={s.icon} />
            </svg>
          </a>
        ))}
      </div>

      <a
        href={whatsappLink("Olá! Quero falar com um especialista agora!")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-neon inline-flex items-center gap-2 text-base px-8 py-4"
      >
        <MessageCircle size={20} />
        Falar com um Especialista Agora
      </a>
    </div>
  </SectionWrapper>
);

export default ContactsSection;
