import ServicesClient from "../../components/services/ServicesClient";

export const metadata = {
    title: "Specialist Study Abroad Services | Admission, Visa & Loan Assistance",
    description: "Comprehensive end-to-end guidance for international students. From university selection and SOP writing to visa mock interviews and post-arrival help.",
    alternates: {
        canonical: "https://www.jvoverseas.com/services",
    },
    openGraph: {
        title: "Expert Study Abroad Services | JV Overseas",
        description: "Professional guidance for your global education journey. Admission, Visa, and Loan assistance for top destinations.",
        url: "https://www.jvoverseas.com/services",
        images: ["/og-services.webp"],
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}