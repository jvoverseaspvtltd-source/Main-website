import ContactClient from "../../components/contact/ContactClient";

export const metadata = {
    title: "Contact Us | Get Free Study Abroad Consultation & Guidance",
    description: "Reach out to JV Overseas specialists for admission aid, visa queries, and education loans. Visit our offices or book a virtual session today.",
    alternates: {
        canonical: "https://www.jvoverseas.com/contact",
    },
    openGraph: {
        title: "Contact JV Overseas | Global Education Experts",
        description: "Expert guidance is just a call away. Get in touch for personalized study abroad counseling.",
        url: "https://jvoverseas.com/contact",
        images: ["/og-contact.webp"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
