"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Coordinates calculated based on Equirectangular Projection 
const countries = [
    // North America
    { name: "United States (USA)", top: 29.4, left: 23.6 },
    { name: "Canada", top: 18.8, left: 20.5 },

    // Europe
    { name: "United Kingdom (UK)", top: 9.4, left: 37.1 },
    { name: "Ireland", top: 12.5, left: 80.7 },
    { name: "Germany", top: 18.6, left: 69.7 },
    { name: "France", top: 21.4, left: 65.5 },
    { name: "Spain", top: 27.7, left: 68.8 },
    { name: "Italy", top: 48.1, left: 86.3 },
    { name: "Netherlands", top: 21.1, left: 80.4 },
    { name: "Sweden", top: 22.5, left: 87.0 },
    { name: "Finland", top: 14.4, left: 92.2 },
    { name: "Norway", top: 14.5, left: 54.2 },
    { name: "Denmark", top: 20.8, left: 58.5 },
    { name: "Switzerland", top: 22.9, left: 50.2 },
    { name: "Poland", top: 15.1, left: 86.3 },
    { name: "Hungary", top: 17.9, left: 75.3 },
    { name: "Czech Republic", top: 12.3, left: 18.7 },
    { name: "Austria", top: 29.6, left: 75.9 },
    { name: "Lithuania", top: 45.4, left: 33.4 },
    { name: "Latvia", top: 75.3, left: 20.7 },
    { name: "Malta", top: 79.5, left: 53.9 },

    // Asia / Eurasia
    { name: "Russia", top: 32.6, left: 55.1 },
    { name: "China", top: 30.5, left: 60.9 },
    { name: "Japan", top: 36, left: 50 },
    { name: "South Korea", top: 39.0, left: 60 },
    { name: "Singapore", top: 34, left: 45 },
    { name: "Malaysia", top: 30, left: 47 },
    { name: "United Arab Emirates (UAE)", top: 48.6, left: 55.0 },

    // Oceania
    { name: "Australia", top: 68.8, left: 80.9 },
    { name: "New Zealand", top: 78.7, left: 88.3 },
];

const CountriesSection = () => {
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [autoAnimateIndex, setAutoAnimateIndex] = useState(0);

    // Automatic sequential animation
    useEffect(() => {
        const interval = setInterval(() => {
            setAutoAnimateIndex((prevIndex) => (prevIndex + 1) % countries.length);
        }, 2000); // Change country every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-1 md:py-2 bg-white overflow-hidden">
            <div className="container mx-auto px-1 md:px-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-1 md:mb-3 bg-gradient-to-r from-[#0F2A44] via-[#1a4d7a] to-[#0F2A44] bg-clip-text text-transparent uppercase tracking-wide md:tracking-wider leading-tight animate-fadeInUp">
                    Countries Where We Provide Admissions
                </h2>

                <div className="relative w-full max-w-[650px] mx-auto">
                    {/* Map Container - Aspect Ratio 2:1 for Equirectangular */}
                    <div className="relative w-full aspect-[2/1] bg-transparent rounded-2xl border border-gray-200 shadow-lg overflow-hidden">

                        {/* Map Image Background with fallback */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
                            <img
                                src="/assets/images/world-map.png"
                                alt="World Map"
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    console.warn("World map image not found. Using fallback gradient.");
                                }}
                            />
                            {/* Fallback grid if image doesn't load */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <div className="w-full h-full relative">
                                    {/* Vertical lines */}
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div
                                            key={`v-${i}`}
                                            className="absolute top-0 bottom-0 w-px bg-gray-400"
                                            style={{ left: `${(i + 1) * (100 / 13)}%` }}
                                        ></div>
                                    ))}
                                    {/* Horizontal lines */}
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div
                                            key={`h-${i}`}
                                            className="absolute left-0 right-0 h-px bg-gray-400"
                                            style={{ top: `${(i + 1) * (100 / 7)}%` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Country Markers */}
                        {countries.map((country, index) => {
                            const isAutoAnimated = countries[autoAnimateIndex].name === country.name;
                            const isHovered = hoveredCountry === country.name;

                            return (
                                <Link
                                    key={country.name}
                                    href="/countries"
                                    className="absolute group transform -translate-x-1/2 -translate-y-1/2 z-10"
                                    style={{ top: `${country.top}%`, left: `${country.left}%` }}
                                    onMouseEnter={() => setHoveredCountry(country.name)}
                                    onMouseLeave={() => setHoveredCountry(null)}
                                >
                                    {/* Marker Container */}
                                    <div className="relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
                                        {/* Auto-animate highlight - Subtle Rings */}
                                        {(isAutoAnimated || isHovered) && (
                                            <div className={`absolute -inset-1 rounded-full animate-ping-subtle ${isHovered ? 'bg-blue-400' : 'bg-orange-400'}`}></div>
                                        )}


                                        {/* Main Marker - Map Pin SVG */}
                                        <div className={`relative transition-all duration-300 ${isHovered || isAutoAnimated ? "scale-110 drop-shadow-md" : ""}`}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                className={`w-5 h-5 md:w-6 md:h-6 fill-current transition-colors duration-300 ${isHovered
                                                    ? "text-blue-600"
                                                    : isAutoAnimated
                                                        ? "text-orange-500"
                                                        : "text-gray-400"
                                                    }`}
                                            >
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                        </div>

                                        {/* Tooltip Name - BELOW the marker */}
                                        <div
                                            className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0F2A44] text-white text-[10px] md:text-xs font-semibold py-1 px-2 rounded shadow-md transition-all duration-300 pointer-events-none z-20 ${isHovered || isAutoAnimated
                                                ? "opacity-100 translate-y-0 visible"
                                                : "opacity-0 -translate-y-1 invisible"
                                                }`}
                                        >
                                            {country.name}
                                            {/* Tooltip Arrow - Top pointer */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-[#0F2A44]"></div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default CountriesSection;