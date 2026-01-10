"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Globe, Users, Award, TrendingUp, Star, CheckCircle, MapPin } from "lucide-react";

const countriesList = [
    { name: "United States (USA)", code: "us", description: "Top universities, high salaries, global exposure", category: "top" },
    { name: "Canada", code: "ca", description: "Easy PR options, student-friendly, good job market", category: "top" },
    { name: "United Kingdom (UK)", code: "gb", description: "Shorter courses, world-ranked universities, PSW visa", category: "top" },
    { name: "Australia", code: "au", description: "High quality education, work opportunities, PR pathways", category: "top" },
    { name: "Germany", code: "de", description: "Low or no tuition fees, strong engineering & tech jobs", category: "top" },
    { name: "Ireland", code: "ie", description: "Tech hub (Google, Meta, Apple), English-speaking EU country", category: "top" },
    { name: "New Zealand", code: "nz", description: "Safe country, good lifestyle, post-study work options", category: "top" },
    { name: "France", code: "fr", description: "Affordable education, strong business & management programs", category: "top" },
    { name: "Netherlands", code: "nl", description: "English-taught programs, innovation & research focus", category: "top" },
    { name: "Singapore", code: "sg", description: "Global business hub, high employability, quality education", category: "top" },
    { name: "Italy", code: "it", description: "Rich cultural heritage, affordable living costs, art & design programs" },
    { name: "Spain", code: "es", description: "Vibrant lifestyle, Spanish language programs, growing tech scene" },
    { name: "Sweden", code: "se", description: "Innovation hub, free education for EU students, strong research focus" },
    { name: "Finland", code: "fi", description: "World-class education system, tech innovation, high quality of life" },
    { name: "Denmark", code: "dk", description: "English-taught programs, work-life balance, sustainable development focus" },
    { name: "Norway", code: "no", description: "Free tuition at public universities, stunning natural beauty, high salaries" },
    { name: "Switzerland", code: "ch", description: "Premium education, international organizations HQ, multilingual environment" },
    { name: "Poland", code: "pl", description: "Affordable education, growing economy, central European location" },
    { name: "Hungary", code: "hu", description: "Low tuition fees, rich history, medical programs in English" },
    { name: "Czech Republic", code: "cz", description: "Central European location, affordable living, technical education" },
    { name: "Austria", code: "at", description: "High quality of life, affordable tuition, beautiful cities" },
    { name: "Malta", code: "mt", description: "English-speaking EU country, Mediterranean climate, growing tech sector" },
    { name: "Lithuania", code: "lt", description: "Baltic innovation hub, affordable education, English-taught programs" },
    { name: "Latvia", code: "lv", description: "Quality education at lower costs, EU member, English-medium courses" },
    { name: "Japan", code: "jp", description: "Advanced technology, unique culture, world-class research facilities" },
    { name: "South Korea", code: "kr", description: "Tech innovation, K-culture, generous scholarships" },
    { name: "China", code: "cn", description: "Rapidly growing education sector, business opportunities, language immersion" },
    { name: "Russia", code: "ru", description: "Affordable medical programs, strong technical education, unique culture" },
    { name: "United Arab Emirates (UAE)", code: "ae", description: "Tax-free salaries, modern infrastructure, business hub" },
    { name: "Malaysia", code: "my", description: "Affordable education, multicultural society, English widely spoken" },
];

const stats = [
    { icon: <Globe size={24} />, value: "32+", label: "Countries Covered", color: "text-blue-600" },
    { icon: <Users size={24} />, value: "600+", label: "Partner Universities", color: "text-purple-600" },
    { icon: <Award size={24} />, value: "95-100%", label: "Success Rate", color: "text-green-600" },
    { icon: <TrendingUp size={24} />, value: "30,000+", label: "Students Placed", color: "text-orange-600" },
];

const topBenefits = [
    "Post-Study Work Rights",
    "Permanent Residency Pathways",
    "World-Class Education",
    "Multicultural Environment",
    "Global Career Opportunities",
    "Affordable Tuition Options"
];

const CountriesClient = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Function to handle country click - redirects to universities page with country filter
    const handleCountryClick = (countryName) => {
        // Remove parentheses and extra spaces for clean URL
        const cleanCountryName = countryName.split('(')[0].trim();
        router.push(`/universities?country=${encodeURIComponent(cleanCountryName)}`);
    };

    const filteredCountries = countriesList.filter(country => {
        const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || country.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const topCountries = countriesList.filter(country => country.category === "top");

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44] via-blue-900 to-[#0F2A44]"></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-blue-100 text-sm font-semibold mb-6 border border-white/20">
                            <Globe className="w-4 h-4" />
                            <span>Your Global Education Journey Starts Here</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                            Discover <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">32+ Countries</span>
                            <br />
                            For Your Study Abroad Dreams
                        </h1>

                        <p className="text-xl text-blue-100/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Click on any country to explore universities and programs available in that destination.
                            From the bustling cities of North America to the historic campuses of Europe, find your perfect destination.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-12">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search countries or programs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-white/10 ${stat.color}`}>
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-white">{stat.value}</div>
                                            <div className="text-xs text-blue-100/80">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Countries Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm mb-4">
                            <Star className="w-4 h-4" />
                            <span>MOST POPULAR CHOICES</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                            Top <span className="text-[#0F2A44]">Study Destinations</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Click on any country card to view all universities and programs available in that destination.
                        </p>
                    </div>

                    {/* Top Countries Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                        {topCountries.map((country, index) => (
                            <button
                                key={country.name}
                                onClick={() => handleCountryClick(country.name)}
                                className="group text-left bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                {/* Ranking Badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm">
                                    {index + 1}
                                </div>

                                {/* Flag */}
                                <div className="w-16 h-10 mb-4 rounded shadow-sm overflow-hidden border border-gray-100">
                                    <img
                                        src={`https://flagcdn.com/w160/${country.code}.png`}
                                        alt={country.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Country Name */}
                                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {country.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mb-4">
                                    {country.description}
                                </p>

                                {/* View Button */}
                                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                                    <span>View Universities</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:to-blue-500/5 transition-all duration-300"></div>
                            </button>
                        ))}
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                                    Why Study Abroad With Us?
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {topBenefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-gray-700 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                                <h4 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    Quick Facts
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                        <span className="text-gray-600 font-medium">Countries Available</span>
                                        <span className="font-black text-blue-700">32+</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                                        <span className="text-gray-600 font-medium">Partner Universities</span>
                                        <span className="font-black text-purple-700">600+</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                        <span className="text-gray-600 font-medium">Success Rate</span>
                                        <span className="font-black text-green-700">95-100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Countries Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                            🌍 Study Abroad Country List <span className="text-blue-600">(32 Countries)</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Click on any country to explore universities and programs available in that destination.
                            More countries being added regularly to expand your options.
                        </p>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === "all"
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400"}`}
                            >
                                All Countries
                            </button>
                            <button
                                onClick={() => setSelectedCategory("top")}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === "top"
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400"}`}
                            >
                                Top Destinations
                            </button>
                        </div>
                    </div>

                    {/* Countries Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredCountries.map((country, index) => (
                            <button
                                key={country.name}
                                onClick={() => handleCountryClick(country.name)}
                                className="group text-left bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                {/* Top Destination Badge */}
                                {country.category === "top" && (
                                    <div className="absolute top-4 right-4">
                                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            Top
                                        </div>
                                    </div>
                                )}

                                {/* Country Flag and Name */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-8 rounded shadow-sm overflow-hidden border border-gray-100 flex-shrink-0">
                                        <img
                                            src={`https://flagcdn.com/w80/${country.code}.png`}
                                            alt={country.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {country.name}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-6">
                                    {country.description}
                                </p>

                                {/* Explore Button */}
                                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                    <span>View Universities & Programs</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Number Badge */}
                                <div className="absolute bottom-4 right-4 text-gray-300 font-black text-3xl opacity-20 group-hover:opacity-30 transition-opacity">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Coming Soon Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-black text-gray-900 mb-4">More Countries Coming Soon!</h3>
                            <p className="text-gray-600 mb-6">
                                We are constantly expanding our network. New countries and universities will be added to provide you with even more opportunities.
                            </p>
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                                Get Notified of New Additions
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-[#0F2A44] to-blue-900 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                            Ready to Find Your Perfect Study Destination?
                        </h2>
                        <p className="text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto">
                            Click on any country above to explore universities, or book a consultation with our expert counselors for personalized guidance.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0F2A44] font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105"
                            >
                                <Users className="w-5 h-5" />
                                Book Free Consultation
                            </Link>
                            <button
                                onClick={() => router.push("/universities")}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                Browse All Universities
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-black text-white mb-2">32+</div>
                                <div className="text-sm text-blue-200">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-white mb-2">600+</div>
                                <div className="text-sm text-blue-200">Universities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-white mb-2">95-100%</div>
                                <div className="text-sm text-blue-200">Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-white mb-2">30K+</div>
                                <div className="text-sm text-blue-200">Students</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CountriesClient;
