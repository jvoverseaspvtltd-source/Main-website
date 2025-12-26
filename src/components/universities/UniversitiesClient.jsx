"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Globe, Building, BookOpen, MapPin, ChevronRight, Filter, Users, Phone, MessageSquare, Calendar, User, Mail } from "lucide-react";
import siteConfig from "../../config/siteConfig";

// Comprehensive university data organized by country
const universitiesData = {
    "USA": [
        {
            name: "Harvard University",
            programs: ["Data Science", "Computer Science", "Finance", "Biotechnology", "Public Health", "Economics"],
            type: "Ivy League"
        },
        {
            name: "Stanford University",
            programs: ["AI/ML", "Data Science", "Computer Science", "Engineering", "Business Analytics", "Bioengineering"],
            type: "Private Research"
        },
        {
            name: "MIT",
            programs: ["Computer Science", "Data Science", "Robotics", "Mechanical Engineering", "Electrical Engineering", "AI"],
            type: "Private Research"
        },
        {
            name: "UC Berkeley",
            programs: ["Data Science", "Computer Science", "Environmental Science", "Business Analytics", "Electrical Engineering"],
            type: "Public Research"
        },
        {
            name: "UCLA",
            programs: ["Computer Science", "Data Science", "Mechanical Engineering", "Psychology", "Public Health"],
            type: "Public Research"
        },
        {
            name: "NYU",
            programs: ["Finance", "Data Science", "Cybersecurity", "Marketing", "Economics"],
            type: "Private Research"
        },
        {
            name: "University of Texas at Austin",
            programs: ["Computer Science", "Data Science", "Electrical Engineering", "Business Analytics"],
            type: "Public Research"
        },
        {
            name: "Arizona State University",
            programs: ["Computer Science", "Engineering", "Business", "Sustainability"],
            type: "Public Research"
        },
        {
            name: "Northeastern University",
            programs: ["Data Analytics", "Computer Science", "AI", "Business Analytics"],
            type: "Private Research"
        },
        {
            name: "Purdue University",
            programs: ["Mechanical/Electrical Engineering", "Computer Science", "Data Science", "AI"],
            type: "Public Research"
        },
    ],
    "UK": [
        {
            name: "University of Oxford",
            programs: ["Computer Science", "AI", "Finance", "Data Science", "Biotechnology", "Economics"],
            type: "Russell Group"
        },
        {
            name: "University of Cambridge",
            programs: ["Computer Science", "Engineering", "Biotechnology", "AI", "Economics", "Physics"],
            type: "Russell Group"
        },
        {
            name: "Imperial College London",
            programs: ["Data Science", "AI", "Engineering", "Mechanical & Electrical Engineering", "Finance"],
            type: "Russell Group"
        },
        {
            name: "UCL",
            programs: ["Computer Science", "Data Science", "Biomedical Science", "Environmental Science", "Psychology"],
            type: "Russell Group"
        },
        {
            name: "University of Manchester",
            programs: ["Data Analytics", "Biotechnology", "Mechanical Engineering", "Finance"],
            type: "Russell Group"
        },
        {
            name: "University of Birmingham",
            programs: ["Engineering", "Computer Science", "Finance", "Data Science"],
            type: "Russell Group"
        },
        {
            name: "University of Leeds",
            programs: ["Computer Science", "Data Science", "Engineering", "Environmental Science"],
            type: "Russell Group"
        },
        {
            name: "University of Nottingham",
            programs: ["Business Analytics", "Computer Science", "Engineering", "Biotechnology"],
            type: "Russell Group"
        },
        {
            name: "Coventry University",
            programs: ["Data Science", "Engineering", "Business Analytics"],
            type: "Modern University"
        },
        {
            name: "University of Liverpool",
            programs: ["Computer Science", "Data Science", "Engineering", "Business Analytics"],
            type: "Russell Group"
        },
        {
            name: "London South Bank University",
            programs: ["Engineering", "Computer Science", "Environmental Science"],
            type: "Modern University"
        },
        {
            name: "University of Greenwich",
            programs: ["Business Analytics", "Engineering", "Computer Science"],
            type: "Modern University"
        },
        {
            name: "University of East London",
            programs: ["Computer Science", "Data Science", "Engineering"],
            type: "Modern University"
        },
        {
            name: "University of Bedfordshire",
            programs: ["Data Science", "Computer Science", "Business Management"],
            type: "Modern University"
        },
        {
            name: "University of West London",
            programs: ["Business", "Data Science", "Finance"],
            type: "Modern University"
        },
        {
            name: "University of Leicester",
            programs: ["Data Science", "Computer Science", "Engineering"],
            type: "Russell Group"
        },
        {
            name: "University of Sheffield",
            programs: ["Engineering", "Computer Science", "Data Science"],
            type: "Russell Group"
        },
        {
            name: "University of Edinburgh",
            programs: ["AI", "Data Science", "Computer Science", "Biotechnology"],
            type: "Russell Group",
            region: "Scotland"
        },
        {
            name: "University of Glasgow",
            programs: ["Engineering", "Data Science", "AI", "Business Analytics"],
            type: "Russell Group",
            region: "Scotland"
        },
        {
            name: "University of Aberdeen",
            programs: ["Petroleum Engineering", "Data Science", "Environmental Science"],
            type: "Ancient University",
            region: "Scotland"
        },
        {
            name: "University of Dundee",
            programs: ["Life Sciences", "Biotechnology", "Data Science"],
            type: "Modern University",
            region: "Scotland"
        },
        {
            name: "Heriot-Watt University",
            programs: ["Engineering", "Data Science", "Finance"],
            type: "Modern University",
            region: "Scotland"
        },
        {
            name: "Edinburgh Napier University",
            programs: ["Data Science", "Engineering", "Business"],
            type: "Modern University",
            region: "Scotland"
        },
        {
            name: "University of the West of Scotland",
            programs: ["Engineering", "Computer Science", "Business"],
            type: "Modern University",
            region: "Scotland"
        },
        {
            name: "Cardiff University",
            programs: ["Data Science", "Engineering", "Computer Science", "Business"],
            type: "Russell Group",
            region: "Wales"
        },
        {
            name: "Swansea University",
            programs: ["Engineering", "Computer Science", "Data Science", "Environmental Science"],
            type: "Russell Group",
            region: "Wales"
        },
        {
            name: "Bangor University",
            programs: ["Environmental Science", "Data Science", "Life Sciences"],
            type: "Research University",
            region: "Wales"
        },
        {
            name: "University of South Wales",
            programs: ["Business Analytics", "Computer Science", "Engineering"],
            type: "Modern University",
            region: "Wales"
        },
        {
            name: "Queen's University Belfast",
            programs: ["Computer Science", "Data Science", "Engineering", "Business Analytics"],
            type: "Russell Group",
            region: "Northern Ireland"
        },
        {
            name: "Ulster University",
            programs: ["Data Science", "Engineering", "Business Analytics"],
            type: "Modern University",
            region: "Northern Ireland"
        },
        {
            name: "University of East Anglia (UEA)",
            programs: ["Data Science", "Business Analytics", "International Business", "Finance & Economics", "Environmental Sciences", "Computer Science"],
            type: "Russell Group"
        },
        {
            name: "Sheffield Hallam University",
            programs: ["Data Analytics", "Computer Science", "Cyber Security", "International Business Management", "Project Management", "Engineering Management"],
            type: "Modern University"
        },
        {
            name: "University of Law",
            programs: ["LLM International Business Law", "LLM Corporate Governance", "MSc Legal Technology", "MSc Business Analytics", "MSc Management", "MBA"],
            type: "Specialist Institution"
        },
        {
            name: "Northumbria University",
            programs: ["Data Science", "Computer Science", "Business Analytics", "International Business Management", "Cyber Security", "Engineering Management"],
            type: "Modern University"
        },
        {
            name: "University of Surrey",
            programs: ["Artificial Intelligence", "Data Science", "Computer Science", "Management", "Finance", "Engineering"],
            type: "Russell Group"
        },
        {
            name: "University of Portsmouth",
            programs: ["Data Analytics", "Computer Science", "Cyber Security", "International Business", "Project Management", "Engineering"],
            type: "Modern University"
        },
        {
            name: "Brunel University London",
            programs: ["Data Science & Analytics", "Computer Science", "Artificial Intelligence", "Management", "International Business", "Engineering Management"],
            type: "Modern University"
        },
        {
            name: "University of Bristol",
            programs: ["Computer Science", "Data Science", "Artificial Intelligence", "Management", "Finance", "Engineering"],
            type: "Russell Group"
        },
        {
            name: "University of Southampton",
            programs: ["Data Science", "Computer Science", "Artificial Intelligence", "Cyber Security", "Management", "Engineering"],
            type: "Russell Group"
        },
        {
            name: "University of Plymouth",
            programs: ["Data Science", "Computer Science", "Cyber Security", "International Business Management", "Project Management", "Engineering"],
            type: "Modern University"
        },
        {
            name: "Newcastle University",
            programs: ["Data Science", "Computer Science", "Artificial Intelligence", "Business Analytics", "Management", "Engineering"],
            type: "Russell Group"
        },
        {
            name: "Kingston University London",
            programs: ["Data Science", "Business Analytics", "International Business Management", "Project Management", "Computer Science", "Engineering Management"],
            type: "Modern University"
        },
        {
            name: "Keele University",
            programs: ["Data Science", "Computer Science", "Management", "International Business", "Public Health", "Finance"],
            type: "Research University"
        },
        {
            name: "Teesside University",
            programs: ["Data Science", "Artificial Intelligence", "Cyber Security", "Computer Science", "International Management", "Project Management"],
            type: "Modern University"
        },
        {
            name: "University of Gloucestershire",
            programs: ["Data Science", "Business Analytics", "International Business Management", "Finance", "Computer Science"],
            type: "Modern University"
        },
        {
            name: "Glasgow Caledonian University",
            programs: ["Business Analytics", "International Business Management", "Project Management", "Public Health", "Construction Project Management"],
            type: "Modern University"
        },
        {
            name: "Ravensbourne University London",
            programs: ["Data Analytics", "Digital Marketing", "UX / Interaction Design", "Computer Science", "Creative Computing"],
            type: "Specialist Institution"
        },
    ],
    "Canada": [
        {
            name: "University of Toronto",
            programs: ["Computer Science", "Data Science", "AI", "Finance", "Biomedical Science"],
            type: "Public Research"
        },
        {
            name: "University of British Columbia (UBC)",
            programs: ["Data Science", "Computer Science", "Environmental Science", "Engineering"],
            type: "Public Research"
        },
        {
            name: "McGill University",
            programs: ["Data Science", "Engineering", "AI", "Biotechnology"],
            type: "Public Research"
        },
        {
            name: "University of Waterloo",
            programs: ["Computer Science", "AI", "Data Science", "Engineering"],
            type: "Public Research"
        },
        {
            name: "York University",
            programs: ["Business Analytics", "Finance", "Computer Science"],
            type: "Public Research"
        },
        {
            name: "University of Alberta",
            programs: ["Engineering", "Computer Science", "Data Science"],
            type: "Public Research"
        },
        {
            name: "University of Calgary",
            programs: ["Engineering", "Computer Science", "Data Science"],
            type: "Public Research"
        },
        {
            name: "Seneca College",
            programs: ["Data Analytics", "IT", "Business"],
            type: "College"
        },
        {
            name: "Humber College",
            programs: ["Data Science", "Business Analytics", "IT"],
            type: "College"
        },
        {
            name: "Conestoga College",
            programs: ["Engineering", "IT", "Data Science"],
            type: "College"
        },
    ],
    "Australia": [
        {
            name: "University of Melbourne",
            programs: ["Data Science", "Engineering", "Computer Science", "Biotechnology"],
            type: "Group of Eight"
        },
        {
            name: "Australian National University (ANU)",
            programs: ["Computer Science", "AI", "Data Science", "Economics"],
            type: "Group of Eight"
        },
        {
            name: "University of Sydney",
            programs: ["Data Science", "Computer Science", "Engineering", "Life Sciences"],
            type: "Group of Eight"
        },
        {
            name: "Monash University",
            programs: ["Data Science", "AI", "Biotechnology", "Engineering"],
            type: "Group of Eight"
        },
        {
            name: "University of Queensland",
            programs: ["Computer Science", "Data Science", "Engineering"],
            type: "Group of Eight"
        },
        {
            name: "Deakin University",
            programs: ["Data Analytics", "Computer Science", "Business"],
            type: "Modern University"
        },
        {
            name: "La Trobe University",
            programs: ["Data Science", "Biotechnology", "Engineering"],
            type: "Modern University"
        },
        {
            name: "RMIT University",
            programs: ["Engineering", "Data Science", "Computer Science"],
            type: "Modern University"
        },
        {
            name: "Swinburne University",
            programs: ["Computer Science", "AI", "Data Science"],
            type: "Modern University"
        },
        {
            name: "Victoria University",
            programs: ["Business Analytics", "Data Science", "Engineering"],
            type: "Modern University"
        },
    ],
    "Germany": [
        {
            name: "Technical University of Munich (TUM)",
            programs: ["Mechanical/Electrical Engineering", "Computer Science", "AI", "Data Science"],
            type: "TU9"
        },
        {
            name: "RWTH Aachen University",
            programs: ["Engineering", "Computer Science", "Data Science"],
            type: "TU9"
        },
        {
            name: "Heidelberg University",
            programs: ["Biotechnology", "Life Sciences", "Data Science"],
            type: "Excellence University"
        },
        {
            name: "University of Stuttgart",
            programs: ["Mechanical/Electrical Engineering", "Data Science", "AI"],
            type: "TU9"
        },
        {
            name: "TU Berlin",
            programs: ["Computer Science", "Data Science", "Engineering"],
            type: "TU9"
        },
        {
            name: "University of Mannheim",
            programs: ["Economics", "Data Science", "Business Analytics"],
            type: "Excellence University"
        },
        {
            name: "Frankfurt University",
            programs: ["Finance", "Economics", "Data Science"],
            type: "Public University"
        },
        {
            name: "Hamburg University of Technology",
            programs: ["Engineering", "Computer Science", "Data Science"],
            type: "Technical University"
        },
    ],
    "Ireland": [
        {
            name: "Trinity College Dublin",
            programs: ["Computer Science", "Data Science", "AI", "Finance"],
            type: "Ancient University"
        },
        {
            name: "University College Dublin (UCD)",
            programs: ["Data Science", "Engineering", "AI", "Business Analytics"],
            type: "Research University"
        },
        {
            name: "National University of Ireland Galway",
            programs: ["Data Science", "Biotechnology", "Engineering"],
            type: "Research University"
        },
        {
            name: "University of Limerick",
            programs: ["Engineering", "Computer Science", "Data Science"],
            type: "Research University"
        },
        {
            name: "Dublin City University",
            programs: ["Data Science", "Computer Science", "AI"],
            type: "Modern University"
        },
        {
            name: "Maynooth University",
            programs: ["Data Science", "Business Analytics", "IT"],
            type: "Modern University"
        },
    ],
    "New Zealand": [
        {
            name: "University of Auckland",
            programs: ["Data Science", "Computer Science", "Engineering", "Business Analytics"],
            type: "Research University"
        },
        {
            name: "University of Otago",
            programs: ["Biotechnology", "Life Sciences", "Data Science"],
            type: "Research University"
        },
        {
            name: "Victoria University of Wellington",
            programs: ["Data Science", "Computer Science", "Environmental Science"],
            type: "Research University"
        },
        {
            name: "University of Waikato",
            programs: ["Computer Science", "Data Science", "AI"],
            type: "Modern University"
        },
        {
            name: "Massey University",
            programs: ["Data Science", "Engineering", "Business"],
            type: "Modern University"
        },
        {
            name: "Auckland University of Technology (AUT)",
            programs: ["Data Science", "Computer Science", "Engineering"],
            type: "Modern University"
        },
    ],
    "France": [
        {
            name: "Sorbonne University",
            programs: ["Data Science", "Computer Science", "Biotechnology", "AI"],
            type: "Public University"
        },
        {
            name: "HEC Paris",
            programs: ["Business Analytics", "Finance", "Management"],
            type: "Grande École"
        },
        {
            name: "ESSEC Business School",
            programs: ["Finance", "Business Analytics", "Management"],
            type: "Grande École"
        },
        {
            name: "ESCP Business School",
            programs: ["Business Analytics", "Finance", "Management"],
            type: "Grande École"
        },
        {
            name: "University of Paris-Saclay",
            programs: ["Computer Science", "Data Science", "AI", "Engineering"],
            type: "Research University"
        },
        {
            name: "INSEEC",
            programs: ["Business Analytics", "Finance", "Management", "Marketing", "International Business"],
            type: "Business School"
        },
        {
            name: "ISC Paris",
            programs: ["Business Analytics", "Finance", "Digital Marketing", "Entrepreneurship", "Management"],
            type: "Business School"
        },
        {
            name: "ICN",
            programs: ["Business Analytics", "Finance", "International Management", "Marketing", "Luxury Management"],
            type: "Business School"
        },
        {
            name: "EM Normandie",
            programs: ["Business Analytics", "Finance", "Supply Chain Management", "Digital Marketing", "International Business"],
            type: "Business School"
        },
        {
            name: "ESG Group",
            programs: ["Business Analytics", "Finance", "Marketing", "Human Resources", "International Business"],
            type: "Business School"
        },
        {
            name: "PSB",
            programs: ["Business Analytics", "Finance", "Marketing", "Entrepreneurship", "Luxury & Fashion Management"],
            type: "Business School"
        },
    ],
    "Netherlands": [
        {
            name: "University of Amsterdam",
            programs: ["Data Science", "Computer Science", "AI", "Economics"],
            type: "Research University"
        },
        {
            name: "Delft University of Technology",
            programs: ["Engineering", "Computer Science", "AI"],
            type: "Technical University"
        },
        {
            name: "Erasmus University Rotterdam",
            programs: ["Business Analytics", "Finance", "Economics"],
            type: "Research University"
        },
        {
            name: "Utrecht University",
            programs: ["Data Science", "Computer Science", "AI"],
            type: "Research University"
        },
        {
            name: "Eindhoven University of Technology",
            programs: ["Engineering", "AI", "Data Science"],
            type: "Technical University"
        },
    ],
    "Singapore": [
        {
            name: "National University of Singapore (NUS)",
            programs: ["Data Science", "AI", "Computer Science", "Engineering", "Finance"],
            type: "Research University"
        },
        {
            name: "Nanyang Technological University (NTU)",
            programs: ["Data Science", "AI", "Engineering", "Computer Science"],
            type: "Research University"
        },
        {
            name: "Singapore Management University (SMU)",
            programs: ["Business Analytics", "Finance", "Data Science"],
            type: "Business School"
        },
    ],
};

const countryMetadata = {
    "USA": { code: "us", flag: "🇺🇸" },
    "UK": { code: "gb", flag: "🇬🇧" },
    "Canada": { code: "ca", flag: "🇨🇦" },
    "Australia": { code: "au", flag: "🇦🇺" },
    "Germany": { code: "de", flag: "🇩🇪" },
    "Ireland": { code: "ie", flag: "🇮🇪" },
    "New Zealand": { code: "nz", flag: "🇳🇿" },
    "France": { code: "fr", flag: "🇫🇷" },
    "Netherlands": { code: "nl", flag: "🇳🇱" },
    "Singapore": { code: "sg", flag: "🇸🇬" },
};

const allPrograms = [
    "Data Science", "Computer Science", "AI/ML", "Finance", "Engineering",
    "Business Analytics", "Biotechnology", "Cyber Security", "Marketing",
    "Environmental Science", "Economics", "Public Health", "Management",
    "Mechanical Engineering", "Electrical Engineering", "Data Analytics",
    "International Business", "Project Management", "Artificial Intelligence",
    "Robotics", "Life Sciences", "Psychology", "Sustainability"
];

const stats = [
    { number: "500+", label: "Partner Universities", icon: "🏫" },
    { number: "32+", label: "Countries Covered", icon: "🌍" },
    { number: "200+", label: "Program Categories", icon: "📚" },
    { number: "95-100%", label: "Admission Success", icon: "✅" },
];

export default function UniversitiesClient() {
    const searchParams = useSearchParams();
    const countryFromURL = searchParams?.get('country') || '';

    const countryKeys = Object.keys(universitiesData);
    const initialCountry = countryKeys.find(country =>
        country.toLowerCase() === countryFromURL.toLowerCase()
    ) || countryKeys[0];

    const [selectedCountry, setSelectedCountry] = useState(initialCountry);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProgram, setSelectedProgram] = useState("");
    const [expandedCards, setExpandedCards] = useState({});
    const [showContactModal, setShowContactModal] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        preferredCountry: ""
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const re = /^[0-9\b]+$/;
            if (value === '' || (re.test(value) && value.length <= 10)) {
                setFormData(prev => ({ ...prev, [name]: value }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus({ type: "", message: "" });

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                serviceType: "University Application",
                details: {
                    university: selectedUniversity || "General Inquiry",
                    preferredCountry: selectedUniversity ? selectedCountry : formData.preferredCountry,
                    page: "Universities Page"
                }
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || siteConfig.apiBaseUrl}/public/intake`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "Thank you! Our admission counselor will contact you shortly."
                });
                setFormData({ name: "", email: "", phone: "", preferredCountry: "" });
                setTimeout(() => {
                    setShowContactModal(false);
                    setSubmitStatus({ type: "", message: "" });
                }, 3000);
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.message || data.errors?.[0]?.msg || "Something went wrong. Please try again."
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to connect to the server. Please try again later."
            });
        } finally {
            setLoading(false);
        }
    };

    const getFilteredUniversities = () => {
        const universities = universitiesData[selectedCountry] || [];
        return universities.filter(uni => {
            const matchesSearch = searchQuery === "" ||
                uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                uni.programs.some(prog => prog.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesProgram = selectedProgram === "" ||
                uni.programs.some(prog => prog.toLowerCase().includes(selectedProgram.toLowerCase()));
            return matchesSearch && matchesProgram;
        });
    };

    const toggleExpand = (index) => {
        setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedProgram("");
        setExpandedCards({});
    };

    const filteredUniversities = getFilteredUniversities();

    const openAdmissionAssistance = (universityName) => {
        setSelectedUniversity(universityName);
        if (universityName) {
            const country = Object.keys(universitiesData).find(c =>
                universitiesData[c].some(u => u.name === universityName)
            );
            if (country) setSelectedCountry(country);
        }
        setShowContactModal(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#0F2A44] via-blue-900 to-indigo-900 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/countries" className="hover:text-white transition-colors">Countries</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white font-semibold">Universities</span>
                        </div>

                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                                Global Universities Directory
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100/90 mb-10 leading-relaxed">
                                Explore our network of 600+ partner universities across 32+ countries.
                                Get admission assistance for your dream university.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <div className="text-2xl mb-1">{stat.icon}</div>
                                        <div className="text-2xl font-black text-white">{stat.number}</div>
                                        <div className="text-xs text-blue-200">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search universities or programs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Sidebar - Filters */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                        <Filter className="w-5 h-5" />
                                        Filters
                                    </h3>
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                {/* Country Filter */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                        <Globe className="w-4 h-4" />
                                        Country
                                    </h4>
                                    <div className="space-y-2">
                                        {Object.keys(universitiesData).map((country) => (
                                            <button
                                                key={country}
                                                onClick={() => setSelectedCountry(country)}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${selectedCountry === country
                                                    ? "bg-blue-50 text-blue-700 font-semibold border border-blue-200"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                    }`}
                                            >
                                                <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-200 flex-shrink-0">
                                                    <img
                                                        src={`https://flagcdn.com/w40/${countryMetadata[country]?.code}.png`}
                                                        alt={country}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <span>{country}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Program Filter */}
                                <div>
                                    <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" />
                                        Popular Programs
                                    </h4>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setSelectedProgram("")}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-all ${selectedProgram === ""
                                                ? "bg-blue-50 text-blue-700 font-semibold border border-blue-200"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                }`}
                                        >
                                            All Programs
                                        </button>
                                        {allPrograms.slice(0, 10).map((program) => (
                                            <button
                                                key={program}
                                                onClick={() => setSelectedProgram(program)}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${selectedProgram === program
                                                    ? "bg-blue-50 text-blue-700 font-semibold border border-blue-200"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                    }`}
                                            >
                                                {program}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Contact */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-sm font-bold text-gray-700 mb-3">Need Help?</h4>
                                    <button
                                        onClick={() => setShowContactModal(true)}
                                        className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Talk to Counselor
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - University Cards */}
                        <div className="lg:w-3/4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                        {selectedCountry} Universities
                                    </h2>
                                    <p className="text-gray-600">
                                        Showing {filteredUniversities.length} of {universitiesData[selectedCountry]?.length || 0} universities
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                                    <MapPin className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm text-gray-600">
                                        Click programs for course details
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredUniversities.length > 0 ? (
                                    filteredUniversities.map((uni, index) => (
                                        <div
                                            key={`${uni.name}-${index}`}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group"
                                        >
                                            <div className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                                                            <Building className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                                                                {uni.name}
                                                            </h3>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded">
                                                                    {uni.type}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                                        <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
                                                        Popular Programs
                                                    </h4>
                                                    <div className="space-y-2">
                                                        {uni.programs.slice(0, expandedCards[index] ? uni.programs.length : 4).map((program, pIndex) => (
                                                            <Link
                                                                key={pIndex}
                                                                href={`/courses?program=${encodeURIComponent(program)}&university=${encodeURIComponent(uni.name)}&country=${encodeURIComponent(selectedCountry)}`}
                                                                className="block"
                                                            >
                                                                <div className="flex items-center justify-between gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all group-hover:shadow-sm">
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                                        <span>{program}</span>
                                                                    </div>
                                                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    {uni.programs.length > 4 && (
                                                        <button
                                                            onClick={() => toggleExpand(index)}
                                                            className="mt-3 w-full py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            {expandedCards[index] ? (
                                                                <>
                                                                    Show Less
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                                    </svg>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    Show {uni.programs.length - 4} More Programs
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                    </svg>
                                                                </>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>

                                                <button
                                                    onClick={() => openAdmissionAssistance(uni.name)}
                                                    className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
                                                >
                                                    <Users className="w-5 h-5" />
                                                    Get Admission Assistance
                                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-16 bg-white rounded-2xl shadow-lg">
                                        <div className="text-6xl mb-4">🔍</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No universities found</h3>
                                        <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
                                        <button
                                            onClick={clearFilters}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Clear All Filters
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="md:w-2/3">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Get Expert Admission Guidance</h3>
                                        <p className="text-gray-600 mb-4">
                                            Our admission counselors provide personalized assistance for:
                                        </p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 text-gray-600">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span>Application Strategy</span></li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span>Document Preparation</span></li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span>SOP & LOR Writing</span></li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span>Visa Processing</span></li>
                                        </ul>
                                        <button
                                            onClick={() => setShowContactModal(true)}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Book Free Consultation
                                        </button>
                                    </div>
                                    <div className="md:w-1/3 text-center">
                                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-4xl mb-4">🎯</div>
                                        <p className="text-sm font-bold text-gray-700">95-100% Admission Success Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            {showContactModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all duration-300">
                    <div className="bg-white rounded-[2rem] shadow-2xl max-w-lg w-full overflow-hidden border border-white/20 animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-gradient-to-r from-[#0F2A44] to-blue-900 px-8 py-6 relative">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Get Expert Guidance</h3>
                                    <p className="text-blue-100/80 text-sm">Fill in your details for admission help</p>
                                </div>
                                <button
                                    onClick={() => { setShowContactModal(false); setSelectedUniversity(""); }}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
                                >
                                    <span className="text-xl">✕</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl mb-8 border border-blue-100 ring-4 ring-blue-50/20">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <Building className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">Assistance For</p>
                                    <p className="font-extrabold text-gray-900 text-lg leading-tight">{selectedUniversity || "General Inquiry"}</p>
                                    <p className="text-sm font-medium text-gray-500 mt-1 flex items-center gap-1"><Globe className="w-3.5 h-3.5" />{selectedCountry}</p>
                                </div>
                            </div>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="relative group">
                                    <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors"><User className="w-5 h-5" /></div>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all shadow-sm text-slate-900 font-medium" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="relative group">
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors"><Mail className="w-5 h-5" /></div>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all shadow-sm text-slate-900 font-medium" />
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors"><Phone className="w-5 h-5" /></div>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" required className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all shadow-sm text-slate-900 font-medium" />
                                        </div>
                                    </div>
                                </div>

                                {!selectedUniversity && (
                                    <div className="relative group">
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Preferred Country</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors"><Globe className="w-5 h-5" /></div>
                                            <select
                                                name="preferredCountry"
                                                value={selectedCountry}
                                                onChange={(e) => {
                                                    setSelectedCountry(e.target.value);
                                                    setFormData(prev => ({ ...prev, preferredCountry: e.target.value }));
                                                }}
                                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all shadow-sm appearance-none text-slate-900 font-medium"
                                            >
                                                <option value="" className="text-slate-900">Select Preferred Country</option>
                                                {Object.keys(universitiesData).map(country => (
                                                    <option key={country} value={country} className="text-slate-900">{country}</option>
                                                ))}
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400"><ChevronRight className="w-5 h-5 rotate-90" /></div>
                                        </div>
                                    </div>
                                )}

                                {submitStatus.message && (
                                    <div className={`p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>{submitStatus.message}</div>
                                )}

                                <button type="submit" disabled={loading} className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-lg rounded-2xl hover:shadow-xl transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                                    {loading ? <>Processing...</> : <>{'Submit My Request'}<ChevronRight className="w-6 h-6" /></>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-r from-[#0F2A44] to-blue-900 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your University Application Today</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => setShowContactModal(true)} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105"><Users className="w-5 h-5" />Get Admission Assistance</button>
                            <Link href="/countries" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-full hover:bg-white/10 transition-all"><Globe className="w-5 h-5" />Explore More Countries</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
