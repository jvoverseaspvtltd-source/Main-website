"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/utils/constants";

const WhatsAppButton = () => {
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in JV Overseas services.`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-28 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="group-hover:rotate-12 transition-transform" />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                Chat with us
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>

            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20 -z-10"></div>
        </a>
    );
};

export default WhatsAppButton;
