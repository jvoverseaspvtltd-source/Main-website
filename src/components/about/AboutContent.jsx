"use client";
import React from 'react';
import {
    Target,
    Eye,
    Users,
    ShieldCheck,
    MapPin,
    Award,
    CheckCircle2,
    GraduationCap,
    Banknote,
    Search,
    FileText,
    BookOpen
} from 'lucide-react';
import Link from "next/link";


export default function AboutContent() {
    return (
        <main className="min-h-screen pt-1 bg-white">
            {/* About Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#0F2A44] via-blue-900 to-indigo-900 overflow-hidden">
                {/* Background Blur Effects (SAME AS COURSE PAGE) */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Breadcrumb (optional – same styling) */}
                        <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-6">
                            <span className="opacity-80">Home</span>
                            <span>/</span>
                            <span className="text-white font-semibold">About Us</span>
                        </div>

                        {/* ONLY TEXT */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            About JV Overseas
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed">
                            Trusted overseas education & education loan consultancy,
                            helping Indian students achieve global academic success.
                        </p>

                    </div>
                </div>
            </section>


            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                A Legacy of Trust and <span className="text-blue-600">Professional Excellence</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                JV Overseas Pvt. Ltd. is a premier overseas education and education loan consultancy dedicated to helping Indian students unlock global opportunities. We bridge the gap between dreams and reality by providing expert guidance for university admissions and financial support.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                With a deep understanding of the international education landscape, we serve students nationwide, ensuring they make informed decisions for their academic and professional future.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
                                    <div className="text-slate-700 font-semibold">Students Assisted</div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="text-4xl font-bold text-slate-800 mb-2">60+</div>
                                    <div className="text-slate-700 font-semibold">Bank Branches</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10"></div>
                                <div className="bg-slate-100 rounded-3xl aspect-video flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                                    <Users className="w-32 h-32 text-blue-600 opacity-20" />
                                    <p className="absolute text-xl font-bold text-blue-900 text-center px-12">Empowering Indian Students for Global Success</p>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-200 rounded-2xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all h-full">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To simplify the complex process of overseas education and financial planning, making it accessible and ethical for every aspiring student in India.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all h-full">
                            <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To be India's most trusted partner for global education, recognized for our student-centric approach, transparency, and nationwide reach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
                        <p className="text-lg text-slate-600">Everything you need under one roof for your study abroad journey.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Study Abroad Counseling", icon: <GraduationCap />, color: "text-blue-600" },
                            { title: "University & Course Selection", icon: <Search />, color: "text-purple-600" },
                            { title: "Education Loan Assistance", icon: <Banknote />, color: "text-emerald-600" },
                            { title: "Visa & Documentation Support", icon: <FileText />, color: "text-orange-600" },
                            { title: "Test Preparation", icon: <BookOpen />, color: "text-indigo-600" },
                            { title: "Pan-India Support", icon: <MapPin />, color: "text-rose-600" }
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 transition-all">
                                <div className={`${s.color} mb-6`}>
                                    {React.cloneElement(s.icon, { className: "w-12 h-12" })}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">{s.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform origin-bottom translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Why Students Trust <br /><span className="text-blue-400">JV Overseas</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Student-focused, personalized guidance",
                                    "100% transparent admission & loan process",
                                    "Direct tie-ups with leading banks and NBFCs",
                                    "Experienced and certified counselors",
                                    "Nationwide support across 60+ locations"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-lg text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 text-center">
                                <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                                <h4 className="font-bold mb-2">Ethical Practices</h4>
                                <p className="text-sm text-slate-400">Uncompromising honesty in all processes.</p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 text-center">
                                <Users className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                                <h4 className="font-bold mb-2">Data Privacy</h4>
                                <p className="text-sm text-slate-400">Your information is safe & secure with us.</p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 text-center col-span-2">
                                <Award className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                                <h4 className="font-bold mb-2">Our Commitment</h4>
                                <p className="text-sm text-slate-400">End-to-end support until you settle abroad comfortably.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nationwide Presence */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Nationwide Presence</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        With over 60 partner branches and dedicated counselors across India, we are never too far from you. Our nationwide network ensures consistent quality of service wherever you are.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-blue-200">
                        Contact Your Nearest Branch
                    </button>
                </div>
            </section>
        </main>
    );
}
