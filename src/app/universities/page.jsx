import UniversitiesClient from "../../components/universities/UniversitiesClient";

export const metadata = {
    title: "Top Global Universities | Study in USA, UK, Canada & Germany",
    description: "Explore 500+ partner universities across 32 countries. Filter by programs, fees, and regions for international students with JV Overseas.",
    alternates: {
        canonical: "https://www.jvoverseas.com/universities",
    },
    openGraph: {
        title: "Global Universities Directory | JV Overseas",
        description: "Your gateway to top-tier international education. Find the best universities in USA, UK, Canada, and Australia.",
        url: "https://www.jvoverseas.com/universities",
        images: ["/og-universities.webp"],
    },
};

export default function UniversitiesPage() {
    return <UniversitiesClient />;
}