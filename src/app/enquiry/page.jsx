import ApplyForm from "../../components/forms/ApplyForm";

export const metadata = {
    title: "Enquiry Form - JV Overseas",
    description: "Get in touch with us for expert guidance on your study abroad journey.",
    alternates: {
        canonical: '/enquiry',
    },
};

export default function EnquiryPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <ApplyForm />
                </div>
            </div>
        </main>
    );
}
