import Header from "@/components/Header";

import HeroSection from "@/components/HeroSection";
import WebsitesSection from "@/components/WebsitesSection";
import AdsSection from "@/components/AdsSection";
import SocialSection from "@/components/SocialSection";
import PortfolioSection from "@/components/PortfolioSection";
import ConsultingSection from "@/components/ConsultingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => (
  <>
    <Header />
    
    <WhatsAppChat />
    <main>
      <HeroSection />
      <WebsitesSection />
      <AdsSection />
      <SocialSection />
      <PortfolioSection />
      <ConsultingSection />
      <ContactsSection />
    </main>
    <Footer />
  </>
);

export default Index;
