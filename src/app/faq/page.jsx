import FAQContent from "./FAQContent";

export const metadata = {
    title: "Frequently Asked Questions | Study Abroad Guide",
    description: "Get answers to your questions about study abroad process, visa, admission, and education loans with JV Overseas.",
    openGraph: {
        title: "Study Abroad FAQs | JV Overseas",
        description: "Everything you need to know about your international education journey.",
        url: "https://www.jvoverseas.com/faq",
        images: ["/og-faq.webp"],
    },
};

export default function FAQPage() {
    return <FAQContent />;
}
