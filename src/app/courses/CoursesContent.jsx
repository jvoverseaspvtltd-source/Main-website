// app/courses/page.jsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import {
    BookOpen, Calendar, DollarSign, Users,
    Globe, Award, Clock, GraduationCap,
    TrendingUp, Briefcase, Heart, CreditCard,
    Shield, CheckCircle, Zap, Target, ChevronRight,
    Home, FileText, Percent, Star, Building,
    Phone, MessageSquare
} from "lucide-react";

const CoursesPage = () => {
    const searchParams = useSearchParams();

    // Use URL parameters with proper fallback handling
    const program = searchParams.get('program') || "Computer Science";
    const university = searchParams.get('university') || "";
    const country = searchParams.get('country') || "USA";

    // Set default university if not provided
    const displayUniversity = university || (program.includes("Harvard") ? "Harvard University" : "Top Global University");

    const [progress, setProgress] = useState(0);
    const [loanPercentage, setLoanPercentage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Program categories with Lucide icons
    const programCategories = [
        { id: "ug", name: "Undergraduate (UG)", Icon: GraduationCap },
        { id: "pg", name: "Postgraduate (PG)", Icon: BookOpen },
        { id: "msc", name: "MS/MSc", Icon: Award },
        { id: "phd", name: "PhD", Icon: GraduationCap },
        { id: "engineering", name: "Engineering", Icon: Zap },
        { id: "mba", name: "MBA", Icon: Briefcase },
        { id: "hr", name: "Human Resources", Icon: Users },
        { id: "pharmacy", name: "Pharmacy", Icon: Heart },
        { id: "doctor", name: "Medical/Doctor", Icon: Heart },
        { id: "law", name: "Law", Icon: Shield },
        { id: "arts", name: "Arts & Humanities", Icon: Star },
        { id: "science", name: "Science", Icon: Target }
    ];

    // Sample courses data for each category
    const sampleCourses = {
        ug: ["Bachelor of Computer Science", "BSc Mathematics", "BA Economics"],
        pg: ["Master of Data Science", "MA International Relations", "MCom Finance"],
        msc: ["MSc Artificial Intelligence", "MSc Biotechnology", "MSc Physics"],
        phd: ["PhD Computer Science", "PhD Chemistry", "PhD Psychology"],
        engineering: ["BE Mechanical", "BTech Computer", "BArch Architecture"],
        mba: ["MBA Finance", "MBA Marketing", "MBA International Business"],
        hr: ["MA Human Resources", "PG Diploma HRM", "MHRM"],
        pharmacy: ["BPharm", "MPharm", "PharmD"],
        doctor: ["MBBS", "MD", "BDS"],
        law: ["LLB", "LLM", "JD"],
        arts: ["BA English", "MA History", "BFA"],
        science: ["BSc Physics", "MSc Chemistry", "PhD Biology"]
    };

    // Enhanced course data with more details
    const courseDetails = {
        title: program,
        university: displayUniversity,
        country: country,
        programType: program.includes("MBA") || program.includes("Master") || program.includes("MSc") ? "Postgraduate" : "Undergraduate",
        duration: "12-24 months",
        tuition: "$25,000 - $45,000",
        intake: "Fall, Spring, Summer",
        applicationDeadline: "December 15, 2026",
        loanEligibility: "60-80% of tuition",
        scholarshipAvailable: "Yes (Merit & Need-based)",
        acceptanceRate: "15-25%",

        // Updated with 60% requirement as first item
        requirements: [
            "Minimum 60% aggregate in previous qualifying degree (Non-negotiable)",
            "Bachelor's degree in related field (3.0+ GPA for PG programs)",
            "IELTS: 6.5+ / TOEFL: 90+ / PTE: 65+",
            "GRE: 310+ or GMAT: 650+ (if applicable)",
            "Statement of Purpose (SOP)",
            "2-3 Letters of Recommendation (LOR)",
            "Updated Resume/CV",
            "Portfolio (for Design/Architecture programs)",
            "Interview (for selected programs)"
        ],

        careerOpportunities: [
            { role: "Data Scientist", salary: "$120k - $180k", growth: "35%" },
            { role: "Software Engineer", salary: "$100k - $160k", growth: "25%" },
            { role: "AI/ML Engineer", salary: "$130k - $200k", growth: "40%" },
            { role: "Business Analyst", salary: "$80k - $130k", growth: "20%" },
            { role: "Research Scientist", salary: "$90k - $150k", growth: "30%" }
        ],

        programStructure: [
            { semester: "Semester 1", courses: 4, credits: 12 },
            { semester: "Semester 2", courses: 4, credits: 12 },
            { semester: "Semester 3", courses: 3, credits: 9 },
            { semester: "Semester 4", courses: "Thesis/Project", credits: 9 }
        ],

        loanProviders: [
            "Prodigy Finance",
            "MPOWER Financing",
            "Credila",
            "Avanse",
            "Global Student Loan Corp",
            "HDFC Credila",
            "Axis Bank",
            "ICICI Bank"
        ],

        benefits: [
            "Post-Study Work Visa (2-3 years)",
            "Optional Practical Training (OPT)",
            "On-campus Employment (20 hrs/week)",
            "Curricular Practical Training (CPT)",
            "STEM OPT Extension (24 months)",
            "PR Pathways Available",
            "Industry Placement Support",
            "Alumni Network Access"
        ]
    };

    // Animated progress bars
    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(85); // Success rate
            setLoanPercentage(60); // Loan coverage percentage
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    // Get courses for selected category
    const getCoursesForCategory = () => {
        if (selectedCategory === "all") {
            return Object.values(sampleCourses).flat();
        }
        return sampleCourses[selectedCategory] || [];
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#0F2A44] via-blue-900 to-indigo-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                Home
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/universities" className="hover:text-white transition-colors">Universities</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white font-semibold">{program}</span>
                        </div>

                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                                {program} Program
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-lg text-blue-100/90 mb-8 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <Building className="w-5 h-5" />
                                    <span>{displayUniversity}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5" />
                                    <span>{country}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5" />
                                    <span>{courseDetails.programType}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Percent className="w-5 h-5" />
                                    <span>60% Min. Required</span>
                                </div>
                            </div>

                            <p className="text-lg text-blue-100/90 mb-10 leading-relaxed">
                                Complete program details, admission requirements, tuition fees, loan options,
                                and career opportunities for the {program} program.
                            </p>

                            {/* PROGRAM CATEGORIES SECTION */}
                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Browse Programs by Category
                                </h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    <button
                                        onClick={() => setSelectedCategory("all")}
                                        className={`px-4 py-3 rounded-xl transition-all ${selectedCategory === "all" ? 'bg-white text-blue-900' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                    >
                                        All Programs
                                    </button>
                                    {programCategories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 ${selectedCategory === category.id ? 'bg-white text-blue-900 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                        >
                                            <category.Icon className={`w-4 h-4 ${selectedCategory === category.id ? 'text-blue-600' : 'text-blue-200'}`} />
                                            <span>{category.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl font-black text-white">{courseDetails.duration}</div>
                                    <div className="text-xs text-blue-200">Duration</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl font-black text-white">{courseDetails.tuition}</div>
                                    <div className="text-xs text-blue-200">Tuition Fees</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl font-black text-white">{courseDetails.acceptanceRate}</div>
                                    <div className="text-xs text-blue-200">Acceptance Rate</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl font-black text-white">60-80%</div>
                                    <div className="text-xs text-blue-200">Loan Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Info */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Program Overview */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Target className="w-6 h-6 text-blue-600" />
                                    Program Overview
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    The {program} program at {displayUniversity} is designed to provide students with cutting-edge knowledge
                                    and practical skills in their chosen field. The curriculum combines theoretical foundations with
                                    hands-on experience through projects, internships, and research opportunities.
                                </p>

                                {/* 60% REQUIREMENT HIGHLIGHT */}
                                <div className="mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                            <Percent className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">Important Academic Requirement</h4>
                                            <p className="text-gray-700">
                                                Minimum <span className="font-bold text-amber-600">60% aggregate score</span> in previous
                                                qualifying degree is mandatory for all programs. This is a non-negotiable requirement
                                                for admission consideration.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Structure & Career Opportunities */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-blue-600" />
                                            Program Structure
                                        </h3>
                                        <ul className="space-y-3">
                                            {courseDetails.programStructure.map((item, index) => (
                                                <li key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                                                    <span className="font-medium text-gray-700">{item.semester}</span>
                                                    <span className="text-sm text-gray-600">{item.courses} • {item.credits} credits</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 text-green-600" />
                                            Career Growth
                                        </h3>
                                        <ul className="space-y-3">
                                            {courseDetails.careerOpportunities.map((career, index) => (
                                                <li key={index} className="p-3 bg-white/50 rounded-lg">
                                                    <div className="font-medium text-gray-700">{career.role}</div>
                                                    <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                                                        <span>{career.salary}</span>
                                                        <span className="text-green-600 font-bold">{career.growth} growth</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Selected Category Courses */}
                                {selectedCategory !== "all" && (
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
                                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                            <BookOpen className="w-5 h-5 text-blue-600" />
                                            {programCategories.find(c => c.id === selectedCategory)?.name} Programs
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {getCoursesForCategory().slice(0, 6).map((course, index) => (
                                                <div key={index} className="flex items-center gap-2 p-3 bg-white/70 rounded-lg">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span className="text-gray-700">{course}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Program Benefits */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                                    <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-purple-600" />
                                        Program Benefits
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {courseDetails.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                                                <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    ✓
                                                </div>
                                                <span className="text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* REDESIGNED LOAN SECTION */}
                            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-6 md:p-8 text-white overflow-hidden relative">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row items-center gap-8">
                                        {/* Left: Loan Information */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                                    <CreditCard className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-black">Education Loan Assistance</h3>
                                                    <p className="text-blue-200">Get up to 80% financing for your education</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                    <div className="text-2xl font-black text-green-400">60-80%</div>
                                                    <div className="text-sm text-gray-300">Tuition Coverage</div>
                                                </div>
                                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                    <div className="text-2xl font-black text-blue-400">8.5%</div>
                                                    <div className="text-sm text-gray-300">Interest Rate (Min.)</div>
                                                </div>
                                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                    <div className="text-2xl font-black text-purple-400">6 Months</div>
                                                    <div className="text-sm text-gray-300">Moratorium Period</div>
                                                </div>
                                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                    <div className="text-2xl font-black text-amber-400">5-7 Years</div>
                                                    <div className="text-sm text-gray-300">Repayment Tenure</div>
                                                </div>
                                            </div>

                                            <p className="text-gray-300 mb-6">
                                                We partner with leading financial institutions to provide education loans covering
                                                tuition fees, living expenses, and other study-related costs with flexible repayment options.
                                            </p>
                                        </div>

                                        {/* Right: Loan Providers */}
                                        <div className="w-full lg:w-1/3">
                                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                <Shield className="w-5 h-5" />
                                                Partner Loan Providers
                                            </h4>
                                            <div className="space-y-3">
                                                {courseDetails.loanProviders.map((provider, index) => (
                                                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                                            {index + 1}
                                                        </div>
                                                        <span className="text-sm">{provider}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="mt-8 pt-6 border-t border-white/20">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <button className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3 group">
                                                <Zap className="w-5 h-5 group-hover:animate-bounce" />
                                                Apply for Education Loan
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                            <button className="flex-1 px-6 py-4 bg-white/10 border border-white/30 font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                                                <DollarSign className="w-5 h-5" />
                                                Calculate EMI
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Admission Requirements with 60% Highlight */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        Admission Requirements
                                    </h3>
                                    <div className="px-4 py-2 bg-red-50 text-red-600 font-bold rounded-full flex items-center gap-2">
                                        <Star className="w-4 h-4" />
                                        60% Minimum Required
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {courseDetails.requirements.map((req, index) => (
                                        <div key={index} className={`flex items-start gap-3 p-4 rounded-xl hover:shadow-md transition-all ${index === 0 ? 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200' : 'bg-gray-50 hover:bg-blue-50'}`}>
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${index === 0 ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                                                {index === 0 ? '!' : index + 1}
                                            </div>
                                            <span className={`${index === 0 ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                                                {req}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Quick Info & CTA */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Success Rate Card */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 md:p-8 border border-green-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-green-600" />
                                    Admission Success Rate
                                </h3>

                                {/* Animated Progress Circle */}
                                <div className="relative w-40 h-40 mx-auto mb-6">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#D1FAE5" strokeWidth="8" />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="#10B981"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray="251.2"
                                            strokeDashoffset={251.2 - (progress / 100 * 251.2)}
                                            className="transition-all duration-1000 ease-out"
                                            transform="rotate(-90 50 50)"
                                        />
                                        <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-3xl font-black fill-green-600">
                                            {progress}%
                                        </text>
                                    </svg>
                                </div>

                                <div className="text-center">
                                    <div className="text-2xl font-black text-gray-900 mb-2">85% Success Rate</div>
                                    <p className="text-gray-600 text-sm">
                                        Our expert guidance ensures high admission success with comprehensive application support.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Information Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Information</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-blue-600" />
                                            <span className="text-gray-600">Duration</span>
                                        </div>
                                        <span className="font-bold text-gray-900">{courseDetails.duration}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <DollarSign className="w-5 h-5 text-green-600" />
                                            <span className="text-gray-600">Tuition Fees</span>
                                        </div>
                                        <span className="font-bold text-gray-900">{courseDetails.tuition}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="w-5 h-5 text-purple-600" />
                                            <span className="text-gray-600">Program Type</span>
                                        </div>
                                        <span className="font-bold text-gray-900">{courseDetails.programType}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Percent className="w-5 h-5 text-amber-600" />
                                            <span className="text-gray-600">Min. Academic Score</span>
                                        </div>
                                        <span className="font-bold text-amber-600">60% Required</span>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-orange-600" />
                                            <span className="text-gray-600">Application Deadline</span>
                                        </div>
                                        <span className="font-bold text-gray-900">{courseDetails.applicationDeadline}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="w-5 h-5 text-red-600" />
                                            <span className="text-gray-600">Loan Coverage</span>
                                        </div>
                                        <span className="font-bold text-red-600">60-80%</span>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3 mb-6">
                                    <Link
                                        href={`/contact?program=${encodeURIComponent(program)}&university=${encodeURIComponent(displayUniversity)}`}
                                        className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-center group"
                                    >
                                        Apply for Admission
                                        <span className="block text-xs font-normal mt-1">Free Application Assistance</span>
                                    </Link>
                                    <Link
                                        href="/contact?service=loan"
                                        className="block w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-center group"
                                    >
                                        Get Education Loan
                                        <span className="block text-xs font-normal mt-1">60-80% Coverage Available</span>
                                    </Link>
                                </div>

                                {/* Contact Info */}
                                <div className="pt-6 border-t border-gray-200">
                                    <p className="text-sm text-gray-600 mb-4">Need assistance with admission or loan?</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">Admission Counselor</p>
                                                <p className="text-sm text-gray-600">+1-234-567-890</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                                <MessageSquare className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">Loan Advisor</p>
                                                <p className="text-sm text-gray-600">+1-987-654-321</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scholarship Card */}
                            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl shadow-lg p-6 md:p-8 border border-yellow-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-yellow-600" />
                                    Scholarships Available
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Merit-based and need-based scholarships up to 50% of tuition fees available for eligible students.
                                </p>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span>Merit Scholarship (Up to 50%)</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span>Need-based Financial Aid</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span>Early Bird Discount (10-15%)</span>
                                    </li>
                                </ul>
                                <button className="w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition-all">
                                    Check Scholarship Eligibility
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-r from-[#0F2A44] to-blue-900 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Start Your Admission Journey Today!
                        </h2>
                        <p className="text-lg text-blue-100/90 mb-10 max-w-2xl mx-auto">
                            Get end-to-end support for admission, visa, and education loan processing.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105"
                            >
                                <CreditCard className="w-5 h-5" />
                                Apply for Admission & Loan
                            </Link>
                            <Link
                                href="/universities"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                <BookOpen className="w-5 h-5" />
                                Browse More Programs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Wrap the component in Suspense to handle useSearchParams
export default function CoursesPageWrapper() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading course details...</p>
                </div>
            </div>
        }>
            <CoursesPage />
        </Suspense>
    );
}