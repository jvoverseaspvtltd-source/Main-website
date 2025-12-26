"use client";

import { CONTACT_INFO } from "../../utils/constants";
import siteConfig from "../../config/siteConfig";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const NotificationTicker = () => {
    return (
        <div className="bg-[#1E9E6A] text-white py-2 overflow-hidden relative shadow-md">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
                {/* Contact Info Section */}
                <span className="flex items-center gap-2 text-xs md:text-sm font-medium">
                    <span>📞 {CONTACT_INFO.phone}</span>
                    <span className="mx-2">|</span>
                    <span>✉️ {CONTACT_INFO.email}</span>
                </span>

                {/* Social Media Section */}
                <span className="flex items-center gap-4 text-xs md:text-sm font-medium">
                    <span className="font-bold text-yellow-100 hidden md:inline">Follow Us:</span>
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                        <Instagram size={14} /> <span className="hidden md:inline">Instagram</span>
                    </a>
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors flex items-center gap-1">
                        <Linkedin size={14} /> <span className="hidden md:inline">LinkedIn</span>
                    </a>
                    <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors flex items-center gap-1">
                        <Twitter size={14} /> <span className="hidden md:inline">X (Twitter)</span>
                    </a>
                </span>

                {/* Announcements Section */}
                <span className="flex items-center gap-2 text-xs md:text-sm font-bold text-yellow-100">
                    📢 Admissions Open for 2026 Intake!
                    <span className="bg-white text-[#1E9E6A] text-[10px] md:text-xs px-2 py-0.5 rounded-full animate-pulse ml-2 shadow-sm font-extrabold uppercase">HURRY UP</span>
                </span>

                <span className="flex items-center gap-2 text-xs md:text-sm font-bold">
                    🚀 Get Free Visa Counseling Today
                    <span className="bg-yellow-400 text-black text-[10px] md:text-xs px-2 py-0.5 rounded-full animate-pulse ml-2 font-extrabold">NEW</span>
                </span>

                <span className="flex items-center gap-2 text-xs md:text-sm font-bold">
                    🎓 Study in UK, USA, Canada & Australia , 28+ Countries
                </span>

                {/* Duplicate for seamless loop */}
                <span className="flex items-center gap-2 text-xs md:text-sm font-medium">
                    <span>📞 {CONTACT_INFO.phone}</span>
                    <span className="mx-2">|</span>
                    <span>✉️ {CONTACT_INFO.email}</span>
                </span>

                {/* Social Media Section Duplicate */}
                <span className="flex items-center gap-4 text-xs md:text-sm font-medium">
                    <span className="font-bold text-yellow-100 hidden md:inline">Follow Us:</span>
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                        <Instagram size={14} /> <span className="hidden md:inline">Instagram</span>
                    </a>
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors flex items-center gap-1">
                        <Linkedin size={14} /> <span className="hidden md:inline">LinkedIn</span>
                    </a>
                    <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors flex items-center gap-1">
                        <Twitter size={14} /> <span className="hidden md:inline">X (Twitter)</span>
                    </a>
                </span>

                <span className="flex items-center gap-2 text-xs md:text-sm font-bold text-yellow-100">
                    📢 Admissions Open for 2026 Intake!
                    <span className="bg-white text-[#1E9E6A] text-[10px] md:text-xs px-2 py-0.5 rounded-full animate-pulse ml-2 shadow-sm font-extrabold uppercase">HURRY UP</span>
                </span>

                <span className="flex items-center gap-2 text-xs md:text-sm font-bold">
                    🚀 Get Free Visa Counseling Today
                    <span className="bg-yellow-400 text-black text-[10px] md:text-xs px-2 py-0.5 rounded-full animate-pulse ml-2 font-extrabold">NEW</span>
                </span>
            </div>
        </div>
    );
};

export default NotificationTicker;
