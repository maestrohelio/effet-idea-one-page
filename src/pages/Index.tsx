import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import HeroSection from "@/components/HeroSection";
import WebsitesSection from "@/components/WebsitesSection";
import AdsSection from "@/components/AdsSection";
import SocialSection from "@/components/SocialSection";
import PortfolioSection from "@/components/PortfolioSection";
import ConsultingSection from "@/components/ConsultingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <PromoBanner />
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
