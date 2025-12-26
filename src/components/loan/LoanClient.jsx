"use client";
import React from 'react';
import {
    Banknote,
    CheckCircle2,
    Info,
    FileText,
    User,
    Briefcase,
    GraduationCap,
    AlertCircle,
    Building2,
    Users2
} from 'lucide-react';
import Link from 'next/link';

const partners = [
    "Punjab National Bank (PNB)", "Avanse", "Credila", "Auxilo",
    "InCred", "Tata Capital", "Prodigy Finance", "Axis Bank", "ICICI Bank"
];

const eligibility = [
    "Minimum bank transaction of ₹30,000 per month for last 6 months",
    "Acceptable CIBIL score (Clean credit history)",
    "Stable income source of co-applicant (Salary/Business)",
    "Parent/guardian should preferably own a house"
];

const documents = {
    student: [
        "Aadhaar Card & PAN Card",
        "Valid Passport",
        "10th, 12th & Degree Certificates",
        "University Offer Letter (Admission Letter)"
    ],
    coApplicant: [
        "Aadhaar Card & PAN Card",
        "Last 3 years ITR",
        "Last 6 months Bank Statement",
        "Salary Slips (if employed) or Business Proof (if self-employed)"
    ]
};

export default function LoanClient() {
    return (
        <main className="min-h-screen pt-1 bg-white">
            {/* Education Loan Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#0F2A44] via-blue-900 to-indigo-900 overflow-hidden">
                {/* Background Blur Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <span className="text-white font-semibold">Education Loan</span>
                        </div>

                        {/* Icon */}
                        <Banknote className="w-16 h-16 text-blue-300 mx-auto mb-6" />

                        {/* Heading */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Education Loan Information
                        </h1>

                        {/* Sub text */}
                        <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                            Empowering your global ambitions with seamless financial solutions.
                            JV Overseas assists students in securing education loans through
                            India&apos;s leading banks and NBFCs.
                        </p>

                    </div>
                </div>
            </section>


            {/* Partners Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/3">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Banking Partners</h2>
                            <p className="text-slate-600 mb-6">We have strong tie-ups with 60+ branches and leading financial institutions across India.</p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">
                                <Building2 className="w-4 h-4" />
                                <span>60+ Branches Pan-India</span>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {partners.map((bank, i) => (
                                <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center font-bold text-slate-700 hover:bg-blue-50 hover:border-blue-200 transition-all">
                                    {bank}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Basic Loan Eligibility (Indicative)</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {eligibility.map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                                    <p className="text-slate-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Required Flow */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Information Required from Students</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Column 1: Personal & Academic */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-blue-600 font-bold text-xl border-b border-blue-100 pb-4">
                                <User className="w-6 h-6" />
                                <h3>Personal & Academic</h3>
                            </div>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Full Name</span> <span className="text-slate-400 text-sm">As per Passport</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>DOB / Email / Mobile</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Aadhaar / PAN / Passport</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>10th, 12th & Degree Marks</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Backlogs / Gap Years</span></li>
                            </ul>
                        </div>

                        {/* Column 2: University & Tests */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-purple-600 font-bold text-xl border-b border-purple-100 pb-4">
                                <GraduationCap className="w-6 h-6" />
                                <h3>Course & University</h3>
                            </div>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Target Country</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>University Name</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Course & Intake Details</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Offer Letter Status</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Test Scores (IELTS/PTE/GRE)</span></li>
                            </ul>
                        </div>

                        {/* Column 3: Loan Details */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-emerald-600 font-bold text-xl border-b border-emerald-100 pb-4">
                                <Banknote className="w-6 h-6" />
                                <h3>Loan Requirements</h3>
                            </div>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Total Course Cost</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Requested Loan Amount</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Self-Contribution</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Secured / Unsecured</span></li>
                                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Co-Applicant Details</span> <span className="text-slate-400 text-sm">Up to 4 Allowed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Co-Applicant & Finance */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-4 mb-8">
                                <Users2 className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl font-bold text-slate-900">Co-Applicant & Financials</h2>
                            </div>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>We require basic details of the co-applicant(s) including Name, Relationship, Occupation, and Monthly Income. </p>
                                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                                    <p className="text-amber-900 font-medium">Note: If parents are not available, clearly mention with supporting documents (e.g., Death Certificate if applicable).</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                                        <FileText className="w-5 h-5 text-blue-500" />
                                        <span>Latest ITR for 3 Years</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-blue-500" />
                                        <span>Business Proof / Slips</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Documents Required (Soft Copies)</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-blue-600 mb-4 uppercase tracking-wider text-sm">For Students</h4>
                                        <ul className="space-y-3">
                                            {documents.student.map((doc, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                                    <span>{doc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-purple-600 mb-4 uppercase tracking-wider text-sm">For Co-Applicants</h4>
                                        <ul className="space-y-3">
                                            {documents.coApplicant.map((doc, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                                    <span>{doc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-slate-500 italic">
                        <AlertCircle className="w-6 h-6 text-slate-300" />
                        <p className="text-sm">
                            Disclaimers: Loan approval is subject to bank policies and final verification. The information provided above is indicative and may vary based on specific lender requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to secure your education loan?</h2>
                    <Link href="/eligibility" className="bg-white text-blue-600 font-bold py-4 px-12 rounded-full hover:bg-slate-100 transition-all shadow-xl">
                        Check Your Final Eligibility
                    </Link>
                </div>
            </section>
        </main>
    );
}
