"use client";
import React from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageSquare,
    HeadphonesIcon,
    ChevronRight
} from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import Link from 'next/link';

export default function ContactClient() {
    return (
        <main className="min-h-screen pt-1 bg-white">
            {/* Contact Hero Section */}
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
                            <span className="text-white font-semibold">Contact Us</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Contact Us
                        </h1>

                        {/* Sub text */}
                        <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                            Ready to start your global journey? We&apos;re here to guide you every step
                            of the way. Reach out to our experts today.
                        </p>

                    </div>
                </div>
            </section>


            {/* Contact Details & Form Invitation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contact Details Column */}
                        <div className="w-full lg:w-1/2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Whether you have questions about university admissions, education loans, or visa processes, our team is ready to help.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Office Address</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {CONTACT_INFO.address || "123 Professional Hub, Knowledge Park, New Delhi, India"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                                        <p className="text-slate-600 text-sm">{CONTACT_INFO.phone || "+91-9876543210"}</p>
                                        <p className="text-slate-400 text-xs mt-1">Available 10 AM - 7 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Email ID</h4>
                                        <p className="text-slate-600 text-sm">{CONTACT_INFO.email || "info@jvoverseas.com"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                                        <p className="text-slate-600 text-sm">Mon - Sat: 10:00 AM - 07:00 PM</p>
                                        <p className="text-slate-600 text-sm">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <MessageSquare className="w-8 h-8 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-slate-900">Direct Enquiry</h3>
                                </div>
                                <p className="text-slate-600 mb-8">
                                    Filling out our enquiry form is the fastest way to get a personalized response from our counselors.
                                </p>
                                <Link href="/enquiry" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100">
                                    Fill Out Enquiry Form <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Map Placeholder Column */}
                        <div className="w-full lg:w-1/2">
                            <a
                                href={CONTACT_INFO.googleMapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full min-h-[400px]"
                            >
                                <div className="h-full bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200 shadow-inner group cursor-pointer">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 text-center p-12">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                            <MapPin className="w-10 h-10 text-blue-600" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-600 mb-2">Find Us on Google Maps</h4>
                                        <p className="text-sm">Click to open location in Google Maps</p>
                                    </div>
                                    {/* Background Pattern */}
                                    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 100 100">
                                        <defs>
                                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Elements */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl text-center space-y-4 shadow-sm">
                            <Send className="w-10 h-10 text-blue-600 mx-auto" />
                            <h4 className="font-bold text-slate-900">Quick Response</h4>
                            <p className="text-sm text-slate-600">Our team ensures responses to all enquiries within 24 working hours.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center space-y-4 shadow-sm">
                            <HeadphonesIcon className="w-10 h-10 text-emerald-600 mx-auto" />
                            <h4 className="font-bold text-slate-900">Student Support</h4>
                            <p className="text-sm text-slate-600">Dedicated support helpline available for students across India during office hours.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center space-y-4 shadow-sm col-span-1 md:col-span-2 lg:col-span-1">
                            <Clock className="w-10 h-10 text-purple-600 mx-auto" />
                            <h4 className="font-bold text-slate-900">Flexible Consultations</h4>
                            <p className="text-sm text-slate-600">Option to choose between in-person or virtual consultation for your convenience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section summary */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">We're Nationally Recognized <br />Because We <span className="text-blue-600">Care</span></h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            With JV Overseas, you're not just a student; you're a future global leader. Let's make your aspirations come true.
                        </p>
                        <div className="pt-8">
                            <a href={`tel:${CONTACT_INFO.phone}`}>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all shadow-xl hover:shadow-blue-200">
                                    Speak with an Expert Counselor
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
