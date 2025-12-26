"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Send } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative bg-blue-600 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl shadow-blue-200">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="w-full lg:w-2/3 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-md border border-white/20">
                                <Sparkles className="w-4 h-4 text-yellow-300" />
                                <span>Start Your Journey Today</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                                Your Study Abroad Dream <br className="hidden md:block" />
                                <span className="text-blue-200">Starts with One Step.</span>
                            </h2>
                            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                                From expert counseling and university selection to education loans and visa approvals, JV Overseas provides end-to-end support for your global academic goals.
                            </p>
                        </div>

                        <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4">
                            <Link
                                href="/loan"
                                className="group bg-white text-blue-600 font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-lg active:scale-95"
                            >
                                Check Your Eligibility <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="group bg-blue-700 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-800 transition-all border border-blue-500 shadow-lg active:scale-95"
                            >
                                Apply Now <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Secondary Trust Text */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 font-medium">
                        Join 10,000+ students who have successfully reached their global campuses with <span className="text-blue-600">JV Overseas</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
