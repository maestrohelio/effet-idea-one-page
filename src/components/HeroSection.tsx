import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import Particles from "./Particles";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.85, 0.3]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        {/* Desktop/Tablet image */}
        <img
          src={heroBg}
          alt=""
          loading="eager"
          decoding="async"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        {/* Mobile image */}
        <img
          src={heroBgMobile}
          alt=""
          loading="eager"
          decoding="async"
          className="block md:hidden w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/50 via-background/60 to-background/95" />

      <Particles />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="gradient-text">Parece magia,</span>{" "}
          <span className="text-foreground">mas nós fazemos a internet funcionar para si.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Criamos <strong className="text-foreground">websites que vendem</strong> e gerimos{" "}
          <strong className="text-foreground">anúncios que convertem</strong>. Da primeira impressão ao cliente final,
          construímos presenças digitais que geram resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappLink("Olá! Quero um site que venda!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2 text-base px-8 py-4"
          >
            <MessageCircle size={20} />
            Quero um Site que Venda
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-border rounded-lg px-8 py-4 hover:bg-muted transition-colors"
          >
            Ver Portfólio
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
