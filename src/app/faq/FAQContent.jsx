"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ShieldCheck, Globe, Star } from 'lucide-react';
import ReviewsSlider from '../../components/common/ReviewsSlider';
import Link from "next/link";

const faqCategories = [
    {
        title: "Study Abroad Process",
        questions: [
            {
                question: "What is the first step in the study abroad process?",
                answer: "The first step is a personalized counseling session. We evaluate your profile, interests, and career goals to help you choose the right direction."
            },
            {
                question: "How long does the entire application process take?",
                answer: "The timeline varies by country, but generally, it's best to start 8-12 months before your intended intake to ensure ample time for applications, tests, and visas."
            }
        ]
    },
    {
        title: "Country & University Selection",
        questions: [
            {
                question: "Which country is best for my field of study?",
                answer: "This depends on many factors like job market, PR opportunities, and budget. Our data-driven approach helps us suggest the best-fit country for your specific course."
            },
            {
                question: "Do you help with university rankings and reputation check?",
                answer: "Yes, we provide detailed comparisons of universities based on global rankings, faculty, research output, and post-graduation outcomes."
            }
        ]
    },
    {
        title: "Education Loans & Eligibility",
        questions: [
            {
                question: "How can I check my eligibility for an education loan?",
                answer: "We provide a free eligibility check. We analyze your academic record, your co-applicant's financial profile, and the value of any collateral to match you with the best lenders."
            },
            {
                question: "What documents are required for an education loan?",
                answer: "Typically, you'll need identity proof, address proof, academic records, university admission letter, and financial documents of the co-applicant. We help you prepare the complete set."
            }
        ]
    },
    {
        title: "Visa Process & Interviews",
        questions: [
            {
                question: "What happens if my visa gets rejected?",
                answer: "We analyze the rejection reasons and help you re-apply with corrected documentation and better preparation. However, our thorough process aims for success in the first attempt."
            },
            {
                question: "Do you provide mock visa interviews?",
                answer: "Yes! Mock interviews are a core part of our services. We train you on common questions and help you present your case confidently to the visa officer."
            }
        ]
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState("0-0"); // Format: categoryIndex-questionIndex

    return (
        <main className="min-h-screen pt-1 bg-white">
            {/* FAQ Hero Section */}
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
                            <span className="text-white font-semibold">FAQs</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Frequently Asked Questions
                        </h1>

                        {/* Sub text */}
                        <p className="text-lg md:text-xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
                            JV Overseas serves students nationwide with trust and professional excellence.
                            Find answers to everything you need for your global education journey.
                        </p>

                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {faqCategories.map((category, catIdx) => (
                            <div key={catIdx} className="mb-12">
                                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-1 text-blue-600 bg-blue-600 rounded-full"></span>
                                    {category.title}
                                </h2>
                                <div className="space-y-4">
                                    {category.questions.map((faq, qIdx) => {
                                        const indexStr = `${catIdx}-${qIdx}`;
                                        const isOpen = openIndex === indexStr;
                                        return (
                                            <div
                                                key={indexStr}
                                                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-blue-200 bg-white shadow-md' : 'border-slate-200 bg-white hover:border-blue-100'
                                                    }`}
                                            >
                                                <button
                                                    onClick={() => setOpenIndex(isOpen ? "" : indexStr)}
                                                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                                >
                                                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-500'
                                                        }`}>
                                                        {faq.question}
                                                    </span>
                                                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                        {isOpen ? (
                                                            <Minus className="w-5 h-5 text-blue-600" />
                                                        ) : (
                                                            <Plus className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                                                        )}
                                                    </div>
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                        }`}
                                                >
                                                    <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Testimonials Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-4">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Nationwide Trust</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Hear from Our Students <br /><span className="text-blue-600">Across India</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Reliable, experienced, and pan-India recognized consultancy for a reason.
                        </p>
                    </div>

                    <ReviewsSlider />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8">Still have questions?</h3>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Our experts are here to provide you with all the clarity you need for your future.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all">
                            Talk to an Expert
                        </button>
                        <button className="border border-slate-700 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FAQPage;
