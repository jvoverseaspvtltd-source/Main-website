import ApplyForm from "../../components/forms/ApplyForm";

export const metadata = {
    title: "Apply Now - JV Overseas",
    description: "Start your application process today.",
};

export default function ApplyPage() {
    return (
        <div className="container mx-auto px-4 py-16 bg-gray-50 min-h-screen">
            <ApplyForm />
        </div>
    );
}
