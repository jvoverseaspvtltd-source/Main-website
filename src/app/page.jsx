import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import CountriesSection from "../components/home/CountriesSection";
import UniversitiesNetwork from "../components/home/UniversitiesNetwork";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export const metadata = {
  title: {
    absolute: "JV Overseas | Study Abroad Consultants & Education Loan Experts",
  },
  description: "Expert study abroad consultancy. We help students with university admissions, visa processing, and education loans for USA, UK, Canada, Australia, and more.",
  openGraph: {
    title: "JV Overseas | Study Abroad Consultants & Education Loan Experts",
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
