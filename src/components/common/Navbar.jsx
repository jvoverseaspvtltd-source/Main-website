"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../../utils/constants";
import Button from "../ui/Button";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();

    const handleMouseEnter = (label) => setActiveDropdown(label);
    const handleMouseLeave = () => setActiveDropdown(null);

    const isActive = (href) => {
        if (href === '/') return pathname === href;
        return pathname.startsWith(href);
    }

    return (
        <nav className="hidden xl:flex items-center gap-6 bg-[#0F2A44] px-2 py-2 rounded-full shadow-lg mx-auto">
            {NAV_LINKS.map((link) => {
                if (link.isButton) {
                    return (
                        <Button key={link.href} href={link.href} variant="primary">
                            {link.label}
                        </Button>
                    );
                }

                if (link.children) {
                    const isParentActive = link.children.some(child => isActive(child.href));
                    return (
                        <div
                            key={link.label}
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => handleMouseEnter(link.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={`font-medium transition-colors flex items-center gap-1 py-2 ${isParentActive ? "text-[#1E9E6A] font-bold" : "text-gray-200 hover:text-white group-hover:text-[#1E9E6A]"
                                    }`}
                            >
                                {link.label}
                                <svg className={`w-4 h-4 transition-transform group-hover:rotate-180 ${isParentActive ? "text-[#1E9E6A]" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {activeDropdown === link.label && (
                                <div className="absolute top-full left-0 w-56 pt-2 z-50 animate-in fade-in slide-in-from-top-2">
                                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-3 overflow-hidden">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className={`block px-5 py-3 transition-colors font-medium text-sm ${isActive(child.href)
                                                    ? "bg-blue-50 text-[#0F2A44] font-bold border-l-4 border-[#1E9E6A]"
                                                    : "text-gray-700 hover:bg-blue-50 hover:text-[#0F2A44]"
                                                    }`}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                }

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`font-medium transition-all px-3 py-2 rounded-md ${isActive(link.href)
                            ? "text-[#1E9E6A] font-bold bg-[#0F2A44]/50 shadow-inner border-b-2 border-[#1E9E6A]"
                            : "text-gray-200 hover:text-[#1E9E6A] hover:bg-[#163A5C]"
                            }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
