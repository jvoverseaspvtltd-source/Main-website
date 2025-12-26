"use client";
import React from 'react';
import {
    GraduationCap,
    Search,
    Banknote,
    FileText,
    ShieldCheck,
    BookOpen,
    Trophy,
    PlaneTakeoff,
    CheckCircle2
} from 'lucide-react';
import Link from "next/link";


const detailedServices = [
    {
        id: "counseling",
        title: "Study Abroad Counseling",
        icon: <GraduationCap className="w-12 h-12" />,
        color: "bg-blue-600",
        description: "Our personalized counseling sessions are designed to map your career aspirations to the best global education opportunities.",
        points: [
            "Profile evaluation and career goal mapping",
            "Country and university compatibility analysis",
            "Budget planning and financial advisory",
            "One-on-one sessions with expert counselors"
        ]
    },
    {
        id: "selection",
        title: "University & Course Selection",
        icon: <Search className="w-12 h-12" />,
        color: "bg-purple-600",
        description: "We provide data-driven recommendations to help you choose the right course and university that fits your academic profile.",
        points: [
            "Access to a vast network of global universities",
            "Detailed comparison of course curriculum and outcomes",
            "Ranking and reputation analysis",
            "Strategic university shortlisting based on admission chances"
        ]
    },
    {
        id: "loan",
        title: "Education Loan Assistance",
        icon: <Banknote className="w-12 h-12" />,
        color: "bg-emerald-600",
        description: "Navigating the financial maze can be tough; we make it simple by coordinating with leading banks and NBFCs.",
        points: [
            "Loan eligibility check and comparison of interest rates",
            "Assistance with collateral and non-collateral loans",
            "Document preparation for speedy loan approval",
            "Direct coordination with financial institutions"
        ]
    },
    {
        id: "admission",
        title: "Admission & Application Process",
        icon: <FileText className="w-12 h-12" />,
        color: "bg-orange-600",
        description: "Our team ensures your application stands out with professionally crafted SOPs, LORs, and timely submissions.",
        points: [
            "Guidance on Statement of Purpose (SOP) and Letters of Recommendation (LOR)",
            "Meticulous review of application documents",
            "Tracking application status and university correspondence",
            "Interview preparation for university admissions"
        ]
    },
    {
        id: "visa",
        title: "Visa Guidance",
        icon: <ShieldCheck className="w-12 h-12" />,
        color: "bg-cyan-600",
        description: "We have a high success rate in visa approvals thanks to our thorough documentation and interview prep.",
        points: [
            "Country-specific visa requirements and documentation",
            "Mock visa interview sessions",
            "Financial documentation and proof of funds guidance",
            "Visa filing and follow-up support"
        ]
    },
    {
        id: "test-prep",
        title: "Test Preparation",
        icon: <BookOpen className="w-12 h-12" />,
        color: "bg-indigo-600",
        description: "Achieve your target scores in IELTS, PTE, TOEFL, GRE, or GMAT with our expert coaching and resources.",
        points: [
            "Structured coaching programs tailored to student needs",
            "Regular mock tests and performance analysis",
            "Tips and strategies for each exam section",
            "Updated study materials and practice modules"
        ]
    },
    {
        id: "scholarships",
        title: "Scholarships & Financial Planning",
        icon: <Trophy className="w-12 h-12" />,
        color: "bg-yellow-600",
        description: "We help you identify and apply for merit-based and need-based scholarships to lower your education costs.",
        points: [
            "Information on university-specific and external scholarships",
            "Assistance with scholarship essays and applications",
            "Strategic financial planning for the entire study period",
            "Updates on government-funded scholarship programs"
        ]
    },
    {
        id: "support",
        title: "Pre-Departure & Post-Arrival Support",
        icon: <PlaneTakeoff className="w-12 h-12" />,
        color: "bg-rose-600",
        description: "Our relationship with students doesn't end at the airport; we ensure a smooth transition to your new life abroad.",
        points: [
            "Pre-departure briefing on culture, climate, and laws",
            "Accommodation search and airport pickup coordination",
            "Assistance with local SIM cards and bank accounts",
            "Part-time job search tips and networking support"
        ]
    }
];

export default function ServicesClient() {
    return (
        <main className="min-h-screen pt-1 bg-white">
            {/* Services Hero Section */}
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
                            <span className="text-white font-semibold">Services</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Our Services
                        </h1>

                        {/* Sub text */}
                        <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                            Empowering students with end-to-end guidance and professional support
                            for a successful global education journey.
                        </p>

                    </div>
                </div>
            </section>


            {/* Services Detail Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {detailedServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                                id={service.id}
                            >
                                {/* Visual/Icon part */}
                                <div className="w-full lg:w-1/2">
                                    <div className={`aspect-square max-w-md mx-auto rounded-3xl ${service.color} flex items-center justify-center text-white shadow-2xl relative group overflow-hidden`}>
                                        <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                        <div className="scale-150 group-hover:scale-125 transition-transform duration-500">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content part */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{service.title}</h2>
                                    <p className="text-lg text-slate-600 mb-2 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {service.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-1">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                                <span className="text-slate-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Quote / CTA */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-2 text-center">
                    <div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 italic">
                            "Your global education journey starts with the right guidance."
                        </h3>
                        <p className="text-lg text-slate-600 mb-8">
                            At JV Overseas, we don't just process applications; we build futures. Our expertise is your bridge to excellence.
                        </p>
                        <Link href="/enquiry" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1">
                            Book a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
