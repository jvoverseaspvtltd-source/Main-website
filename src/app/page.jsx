import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import CountriesSection from "../components/home/CountriesSection";
import UniversitiesNetwork from "../components/home/UniversitiesNetwork";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export const metadata = {
  title: "JV Overseas - Home | Empowering Your International Education Dreams",
  description: "Expert study abroad consultancy. We help students with university admissions, visa processing, and education loans for USA, UK, Canada, Australia, and more.",
  alternates: {
    canonical: "https://www.jvoverseas.com",
  },
  openGraph: {
    title: "JV Overseas - Home | Study Abroad & Education Loans",
    description: "Your gateway to global opportunities. Professional guidance for your international education journey.",
    url: "https://www.jvoverseas.com",
    images: ["/icon.webp"],
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
