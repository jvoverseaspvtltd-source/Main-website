import React from 'react';

export const metadata = {
    title: "Privacy Policy | JV Overseas",
    description: "Learn how JV Overseas collects, uses, and protects your personal information.",
    alternates: {
        canonical: '/privacy-policy',
    },

};

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-4xl bg-white p-10 rounded-2xl shadow-sm">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">Privacy Policy</h1>

                <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                    <p>Last updated: January 06, 2026</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">1. Introduction</h2>
                        <p>
                            Welcome to JV Overseas Pvt. Ltd. ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fill out enquiry or application forms.</li>
                            <li>Register for an account or portal.</li>
                            <li>Subscribe to our newsletter.</li>
                            <li>Contact us via email, phone, or chat.</li>
                        </ul>
                        <p>
                            This information may include your name, email address, phone number, academic history, and financial details required for loan assistance.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">3. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and improve our consultancy and financial services.</li>
                            <li>Process your applications and loan enquiries.</li>
                            <li>Communicate with you regarding your requests.</li>
                            <li>Send updates and promotional materials (with your consent).</li>
                            <li>Comply with legal and regulatory requirements.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">4. Information Sharing</h2>
                        <p>
                            We may share your information with third-party partners (such as universities and banks) only as necessary to provide the services you have requested. We do not sell your personal data to third parties.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures to protect the security of your personal information. However, please remember that no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">6. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about our Privacy Policy, please contact us at:
                        </p>
                        <ul className="list-none space-y-1">
                            <li><strong>Email:</strong> admin@jvoverseas.com</li>
                            <li><strong>Phone:</strong> +91 8712275590</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
