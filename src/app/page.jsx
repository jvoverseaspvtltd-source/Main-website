import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import CountriesSection from "../components/home/CountriesSection";
import UniversitiesNetwork from "../components/home/UniversitiesNetwork";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export const metadata = {
  title: "JV Overseas - Home",
  description: "Your gateway to global opportunities. Study abroad, immigration, and visa services.",
  icons: {
    icon: "/icon.webp",
    apple: "/icon.webp",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServicesSection />
      <CountriesSection />
      <UniversitiesNetwork />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
