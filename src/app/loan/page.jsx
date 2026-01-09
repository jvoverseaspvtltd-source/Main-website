import LoanClient from "../../components/loan/LoanClient";

export const metadata = {
    title: "Education Loans for Study Abroad | Low Interest Rates & Fast Approval",
    description: "Secure funding through PNB, Avanse, Axis, and ICICI. Specialized assistance for secured and unsecured student loans with JV Overseas.",
    alternates: {
        canonical: "https://www.jvoverseas.com/loan",
    },
    openGraph: {
        title: "Overseas Education Loan Assistance | JV Overseas",
        description: "Empowering your global ambitions with seamless financial solutions. Fast approval for study abroad loans.",
        url: "https://www.jvoverseas.com/loan",
        images: ["/og-loan.webp"],
    },
};

export default function LoanPage() {
    return <LoanClient />;
}
