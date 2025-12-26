"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// University/Country data with better organization
const universities = [
    { name: "Harvard University", country: "USA", code: "us", color: "from-red-500 to-red-600" },
    { name: "Oxford University", country: "UK", code: "gb", color: "from-blue-500 to-blue-600" },
    { name: "University of Toronto", country: "Canada", code: "ca", color: "from-red-600 to-red-700" },
    { name: "Melbourne University", country: "Australia", code: "au", color: "from-teal-500 to-teal-600" },
    { name: "TU Munich", country: "Germany", code: "de", color: "from-yellow-400 to-yellow-600" },
    { name: "Trinity College", country: "Ireland", code: "ie", color: "from-green-500 to-green-600" },
    { name: "Auckland University", country: "New Zealand", code: "nz", color: "from-blue-700 to-blue-900" },
    { name: "NUS Singapore", country: "Singapore", code: "sg", color: "from-rose-500 to-rose-600" },
    { name: "INSEAD", country: "France", code: "fr", color: "from-blue-400 to-blue-600" },
    { name: "Lund University", country: "Sweden", code: "se", color: "from-yellow-300 to-blue-500" },
    { name: "Barcelona School", country: "Spain", code: "es", color: "from-orange-500 to-red-600" },
    { name: "Dubai University", country: "UAE", code: "ae", color: "from-emerald-500 to-emerald-700" },
];

const stats = [
    {
        icon: "🏫",
        number: "500+",
        label: "Partner Universities",
        sublabel: "Worldwide",
        gradient: "from-blue-500 via-blue-600 to-indigo-600"
    },
    {
        icon: "🎓",
        number: "5,000+",
        label: "Students Placed",
        sublabel: "Successfully Abroad",
        gradient: "from-purple-500 via-purple-600 to-pink-600"
    },
    {
        icon: "✅",
        number: "95-100%",
        label: "Success Rate",
        sublabel: "Visa & Admission",
        gradient: "from-green-500 via-emerald-600 to-teal-600"
    }
];

const UniversitiesNetwork = () => {
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="relative py-4 md:py-2 bg-white overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-blue-200 rounded-full"></div>
                <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-dashed border-blue-300 rounded-full animate-spin-slow"></div>
                <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-blue-400 rounded-full opacity-50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-6 animate-fadeInUp">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Global Reach</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                        A Network of Elite <br /> <span className="text-blue-600">Universities</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        Connecting you with over 500+ world-class institutions across popular study destinations including USA, UK, Canada, and Australia.
                    </p>
                </div>

                {/* Main Interaction Area */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[600px]">

                    {/* Stats Section */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 order-2 lg:order-1">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="group bg-white p-6 rounded-[2rem] shadow-lg shadow-slate-100 border border-slate-50 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-slate-900 leading-none mb-1">{stat.number}</div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Link
                            href="/universities"
                            className="mt-4 text-center py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors shadow-lg"
                        >
                            View All Partners
                        </Link>
                    </div>

                    {/* Orbiting Universities Display */}
                    <div className="w-full lg:w-2/3 h-[400px] md:h-[600px] relative flex items-center justify-center order-1 lg:order-2">
                        {/* Central Hub */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-2xl border-8 border-blue-50 flex items-center justify-center z-20">
                            <span className="text-4xl md:text-6xl">🌍</span>
                            <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                        </div>

                        {/* Orbiting Container */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${isPaused ? 'pause-animation' : ''}`}
                            style={{
                                animation: 'orbit 60s linear infinite',
                                animationPlayState: isPaused ? 'paused' : 'running'
                            }}
                        >
                            {universities.map((uni, index) => {
                                const angle = (index * 360) / universities.length;
                                // Adjusted radius for better fit
                                return (
                                    <div
                                        key={index}
                                        className="absolute w-16 h-16 md:w-24 md:h-24"
                                        style={{
                                            transform: `rotate(${angle}deg) translate(min(35vw, 250px)) rotate(${-angle}deg)`
                                        }}
                                        onMouseEnter={() => {
                                            setHoveredLogo(uni.name);
                                            setIsPaused(true);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredLogo(null);
                                            setIsPaused(false);
                                        }}
                                    >
                                        <div
                                            className="w-full h-full bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center justify-center relative group cursor-pointer transition-all duration-300 overflow-hidden"
                                            style={{
                                                animation: 'counter-orbit 60s linear infinite',
                                                animationPlayState: isPaused ? 'paused' : 'running'
                                            }}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${uni.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                                            <div className="w-12 h-10 mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                                <img
                                                    src={`https://flagcdn.com/w80/${uni.code}.png`}
                                                    alt={uni.country}
                                                    className="max-w-full max-h-full rounded shadow-sm object-contain"
                                                />
                                            </div>
                                            <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tighter relative z-10">{uni.country}</span>

                                            {/* Tooltip */}
                                            {hoveredLogo === uni.name && (
                                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl z-50 animate-fadeInUp">
                                                    {uni.name}
                                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-20 lg:hidden overflow-hidden py-10 bg-slate-50 rounded-[2rem]">
                    <div className="flex gap-4 animate-marquee whitespace-nowrap px-6">
                        {[...universities, ...universities].map((uni, idx) => (
                            <div key={idx} className="inline-flex w-36 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm items-center gap-3">
                                <img
                                    src={`https://flagcdn.com/w80/${uni.code}.png`}
                                    alt={uni.country}
                                    className="w-8 h-6 rounded shadow-sm"
                                />
                                <span className="text-[10px] font-bold text-slate-700 overflow-hidden text-ellipsis">{uni.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default UniversitiesNetwork;
