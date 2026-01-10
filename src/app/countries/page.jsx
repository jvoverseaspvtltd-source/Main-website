
import CountriesClient from "./CountriesClient";

export const metadata = {
    title: "Study in 32+ Countries | USA, UK, Canada, Australia & More",
    description: "Explore study abroad options in top global destinations. Detailed info on universities, courses, and post-study work rights for Indian students.",
    openGraph: {
        title: "Study Abroad Destinations | JV Overseas",
        description: "Your guide to studying in USA, UK, Canada, Australia, Germany and 30+ other countries.",
        url: "https://www.jvoverseas.com/countries",
        images: ["/og-countries.webp"],
    },
    alternates: {
        canonical: '/countries',
    },
};

export default function CountriesPage() {
    return <CountriesClient />;
}