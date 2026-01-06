import React from 'react';

export const metadata = {
    title: "Terms of Service | JV Overseas",
    description: "Terms and conditions for using the JV Overseas website and services.",
};

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-4xl bg-white p-10 rounded-2xl shadow-sm">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">Terms of Service</h1>

                <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                    <p>Last updated: January 06, 2026</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the JV Overseas website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on JV Overseas' website for personal, non-commercial transitory viewing only.
                        </p>
                        <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display;</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">3. Disclaimer</h2>
                        <p>
                            The materials on JV Overseas' website are provided on an 'as is' basis. JV Overseas makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">4. Limitations</h2>
                        <p>
                            In no event shall JV Overseas or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JV Overseas' website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">6. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
