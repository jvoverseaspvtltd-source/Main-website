"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FloatingButtons = () => {
    // Show buttons after a small delay to not block initial load
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col items-end gap-1 font-sans pointer-events-none">
            {/* Enquiry Form Button */}
            <Link
                href="/enquiry"
                className="pointer-events-auto bg-[#B0DB43] text-[#414288] font-bold py-6 px-1.5 md:px-2 rounded-l-lg shadow-lg hover:bg-[#414288] hover:text-[#B0DB43] transition-all duration-300 transform hover:translate-x-[-4px] flex flex-col items-center justify-center gap-2 w-10 md:w-12 h-auto"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                <span className="text-sm md:text-base uppercase tracking-wide rotate-180 whitespace-nowrap">Enquiry Form</span>
            </Link>


        </div>
    );
};

export default FloatingButtons;
