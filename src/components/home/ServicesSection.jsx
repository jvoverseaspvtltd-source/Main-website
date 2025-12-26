"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    Search,
    Banknote,
    FileText,
    ShieldCheck,
    BookOpen,
    Trophy,
    PlaneTakeoff,
    ChevronLeft,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import './ServicesStyle.css';

const services = [
    {
        title: "Study Abroad Counseling",
        description: "Personalized guidance to choose the right destination and university for your future.",
        icon: <GraduationCap />,
        hexColor: "#4f46e5" // Indigo
    },
    {
        title: "University & Selection",
        description: "Expert assistance in picking courses that align with your career goals and profile.",
        icon: <Search />,
        hexColor: "#9333ea" // Purple
    },
    {
        title: "Education Loan Help",
        description: "Financial guidance and support to secure education loans with ease.",
        icon: <Banknote />,
        hexColor: "#059669" // Emerald
    },
    {
        title: "Application Support",
        description: "End-to-end support for error-free applications and compelling SOPs.",
        icon: <FileText />,
        hexColor: "#ea580c" // Orange
    },
    {
        title: "Visa Documentation",
        description: "Complete assistance with visa filing, documentation, and interview prep.",
        icon: <ShieldCheck />,
        hexColor: "#0891b2" // Cyan
    },
    {
        title: "Test Preparation",
        description: "Expert coaching for IELTS, PTE, TOEFL, GRE, and GMAT to ace your exams.",
        icon: <BookOpen />,
        hexColor: "#7c3aed" // Violet
    },
    {
        title: "Scholarship Guidance",
        description: "Help in identifying and applying for merit-based and need-based scholarships.",
        icon: <Trophy />,
        hexColor: "#ca8a04" // Yellow
    },
    {
        title: "Post-Arrival Support",
        description: "Briefing on life abroad and assistance with accommodation and settlement.",
        icon: <PlaneTakeoff />,
        hexColor: "#e11d48" // Rose
    }
];

const ServicesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Update items per view based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Desktop
                setItemsPerView(3);
            } else if (window.innerWidth >= 768) { // Tablet
                setItemsPerView(2);
            } else { // Mobile
                setItemsPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate maximum index based on items per view
    const maxIndex = services.length;
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) return;
        setCurrentIndex((prev) => prev + 1);
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (!isTransitioning) return;
        setCurrentIndex((prev) => {
            if (prev <= 0) return services.length - 1;
            return prev - 1;
        });
    }, [isTransitioning, services.length]);

    // Handle seamless reset
    useEffect(() => {
        if (currentIndex >= services.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 500); // Wait for transition to finish
            return () => clearTimeout(timer);
        }
    }, [currentIndex, services.length]);

    // Re-enable transition
    useEffect(() => {
        if (!isTransitioning && currentIndex === 0) {
            // Must wait a frame to restore transition
            const timer = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning, currentIndex]);

    // Auto-slide effect
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    // Touch handlers
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        setIsPaused(true);
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        const swipeThreshold = 50;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        setTimeout(() => setIsPaused(false), 1000);
    };

    // Use clones for infinite effect
    const displayServices = [...services, ...services.slice(0, 3)];

    const getTransformPercentage = () => {
        const itemWidthPercentage = 100 / displayServices.length;
        return currentIndex * itemWidthPercentage;
    };

    return (
        <section id="services" className="py-12 bg-white overflow-hidden relative services-card-wrapper">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Our Professional <span className="text-blue-600">Services</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Comprehensive end-to-end solutions for students aspiring to build a global career through international education.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative px-4 lg:px-12 pb-10">
                    {/* Navigation Buttons - Restricted to Forward Only */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white rounded-full shadow-xl text-slate-600 hover:text-blue-600 transition-all border border-slate-200 hover:border-blue-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        aria-label="Next slide"
                        disabled={maxIndex <= 0}
                    >
                        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>

                    <div
                        className="overflow-hidden py-10"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        ref={sliderRef}
                    >
                        <div
                            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
                            style={{
                                transform: `translateX(-${getTransformPercentage()}%)`,
                                width: `${(displayServices.length / itemsPerView) * 100}%`
                            }}
                        >
                            {displayServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="px-4 flex-shrink-0 flex justify-center"
                                    style={{
                                        width: `${100 / displayServices.length}%`,
                                        flex: `0 0 ${100 / displayServices.length}%`
                                    }}
                                >
                                    {/* NEW CARD STRUCTURE */}
                                    <div className="card__bx" style={{ "--clr": service.hexColor }}>
                                        <div className="card__data">
                                            <div className="card__icon">
                                                {service.icon}
                                            </div>
                                            <div className="card__content">
                                                <h3 className="uppercase tracking-wider">{service.title}</h3>
                                                <p className="line-clamp-3">{service.description}</p>
                                                <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots - Only show if there are multiple slides */}
                    {services.length > itemsPerView && (
                        <div className="flex justify-center gap-2 mt-4">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsTransitioning(true);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex % services.length === index
                                        ? 'w-8 bg-blue-600'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    <div className="text-center p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                            500+
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-xl">Universities Partnered</h4>
                        <p className="text-slate-600">Direct partnerships with top global institutions</p>
                    </div>

                    <div className="text-center p-6 bg-green-50 rounded-2xl hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                            95%
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-xl">Visa Success Rate</h4>
                        <p className="text-slate-600">Expert guidance for visa approval</p>
                    </div>

                    <div className="text-center p-6 bg-purple-50 rounded-2xl hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                            24/7
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-xl">Support Available</h4>
                        <p className="text-slate-600">Round-the-clock assistance for students</p>
                    </div>
                    {/* Visually Hidden Content for SEO Indexing */}
                    <div className="sr-only">
                        <h3>Our Study Abroad Services</h3>
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;