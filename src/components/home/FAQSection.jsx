"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const homeFaqs = [
    {
        question: "How do I choose the right country and university?",
        answer: "Our expert counselors evaluate your academic profile, budget, and career goals to provide data-driven recommendations for the best-fit countries and universities worldwide."
    },
    {
        question: "Does JV Overseas provide assistance with education loans?",
        answer: "Yes, we have tie-ups with leading banks and NBFCs. We guide you through the entire loan process, from eligibility checks to documentation and final disbursement."
    },
    {
        question: "What is the success rate for student visa processing?",
        answer: "JV Overseas maintains a very high visa success rate. Our thorough documentation process and professional mock interview sessions ensure your application is solid."
    },
    {
        question: "Can you help me prepare for tests like IELTS, PTE, or GRE?",
        answer: "Absolutely! We provide expert coaching support and resources to help students achieve their target scores in all major English proficiency and entrance exams."
    },
    {
        question: "What support do you provide after I reach the destination?",
        answer: "We offer pre-departure briefings and post-arrival assistance including help with accommodation search, airport pickup coordination, and local bank account setup."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-2 bg-white overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Got questions? We've got answers. Find clarity on common student concerns about overseas education.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {homeFaqs.map((faq, index) => (
                        <div
                            key={index}
                            itemProp="mainEntity"
                            itemScope
                            itemType="https://schema.org/Question"
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-blue-100'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <div className="flex items-center gap-4">
                                    <HelpCircle className={`w-6 h-6 shrink-0 transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-400'
                                        }`} />
                                    <span itemProp="name" className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-900'
                                        }`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-blue-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                                    )}
                                </div>
                            </button>

                            <div
                                itemProp="acceptedAnswer"
                                itemScope
                                itemType="https://schema.org/Answer"
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div itemProp="text" className="px-16 pb-8 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
