import FullEligibilityForm from "../../components/forms/FullEligibilityForm";

export const metadata = {
    title: "Education Loan Eligibility - JV Overseas",
    description: "Accurately evaluate your education loan eligibility with our comprehensive profile analysis.",
};

export default function EligibilityPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-[#001F3F] mb-4">Education Loan Eligibility</h1>
                    <p className="text-lg text-gray-600">
                        Complete our comprehensive profile evaluation to calculate your maximum eligible loan amount
                        and receive tailored bank recommendations.
                    </p>
                </div>
                <FullEligibilityForm />
            </div>
        </main>
    );
}
