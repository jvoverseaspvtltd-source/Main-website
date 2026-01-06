"use client";
import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Globe
} from 'lucide-react';
import siteConfig from "../../config/siteConfig";
import { CONTACT_INFO } from "../../utils/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-blue-500 underline decoration-4 underline-offset-4">JV</span> Overseas
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            JV Overseas Pvt. Ltd. is India's trusted consultancy for overseas education and financial assistance. We empower students to achieve their global academic dreams with professional guidance and ethical practices.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook className="w-5 h-5" />, href: siteConfig.social.facebook },
                                { icon: <Twitter className="w-5 h-5" />, href: siteConfig.social.twitter },
                                { icon: <Instagram className="w-5 h-5" />, href: siteConfig.social.instagram },
                                { icon: <Linkedin className="w-5 h-5" />, href: siteConfig.social.linkedin }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-8 border-b border-slate-800 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Services", href: "/services" },
                                { name: "Education Loans", href: "/loan" },
                                { name: "FAQs", href: "/faq" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                        <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-blue-500 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories Link */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-8 border-b border-slate-800 pb-2 inline-block">Global Destinations</h4>
                        <ul className="space-y-4">
                            {[
                                "Study in Australia",
                                "Study in Canada",
                                "Study in UK",
                                "Study in USA",
                                "Germany Admissions",
                                "European Universities"
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link href="/countries" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                        <Globe className="w-3 h-3 text-slate-700 group-hover:text-blue-500 transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Reach Us */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold text-white mb-8 border-b border-slate-800 pb-2 inline-block">Contact Details</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-400">{CONTACT_INFO.address || "123 Professional Hub, Knowledge Park, New Delhi"}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="text-sm text-slate-400">{CONTACT_INFO.phone || "+91-9876543210"}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="text-sm text-slate-400">{CONTACT_INFO.email || "info@jvoverseas.com"}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Link href="/student-login" className="text-xs font-bold uppercase tracking-wider px-4 py-2 border border-slate-800 rounded-lg hover:bg-slate-900 transition-all">
                                Student Login
                            </Link>
                            <Link href="/employee-login" className="text-xs font-bold uppercase tracking-wider px-4 py-2 border border-slate-800 rounded-lg hover:bg-slate-900 transition-all">
                                Employee Login
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500">
                        &copy; {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-slate-600">
                        <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
