"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import NotificationTicker from "./NotificationTicker";
import siteConfig from "../../config/siteConfig";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const headerWrapperClasses = isHomePage
        ? "sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100"
        : "sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100";

    return (
        <header className={headerWrapperClasses}>


            {/* Notification Ticker - Visible everywhere */}
            <div className="bg-white">
                <NotificationTicker />
            </div>



            {/* Main Navbar */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-2 h-12 flex items-center justify-between gap-14">

                    {/* LOGO + SITE NAME */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-blue-600 whitespace-nowrap"
                    >
                        <img
                            src={siteConfig.logo.image}
                            alt={siteConfig.logo.alt}
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                        />
                        <span className="text-xl md:text-2xl">
                            {siteConfig.name}
                        </span>
                    </Link>

                    {/* Desktop Navbar */}
                    <Navbar />

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden p-2 text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
