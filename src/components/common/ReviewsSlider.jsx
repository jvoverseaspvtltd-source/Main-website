"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Aditya Sharma",
        region: "Mumbai",
        university: "University of Manchester",
        country: "UK",
        flag: "🇬🇧",
        content: "Honestly, I was super stressed about my gap year. 2 years gap after B.Tech and I thought no good uni will take me. The counselors here were actually realistic. They told me to focus on SOP and it worked. Got into Manchester! Visa process was smooth too.",
        rating: 4.8,
        date: "2 weeks ago",
        imageColor: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        name: "Sanya Verma",
        region: "Delhi",
        university: "University of Toronto",
        country: "Canada",

        content: "My profile average tha somewhat (7.5 CGPA). Many agents said aim for colleges, not universities. But JV team pushed me to apply for UofT. It took time, almost 2 months for offer letter, but worth the wait. Very happy with the service.",
        rating: 4.5,
        date: "1 month ago",
        imageColor: "from-red-500 to-red-700"
    },
    {
        id: 3,
        name: "Karthik R.",
        region: "Hyderabad",
        university: "Monash University",
        country: "Australia",

        content: "Education loan was my biggest headache. Bank kept rejecting docs. The backend team here really helped coordinate with the manager. Got loan sanctioned in 10 days. Only thing is, sometimes they reply a bit late on weekends, otherwise all good.",
        rating: 4.5,
        date: "3 weeks ago",
        imageColor: "from-green-500 to-emerald-600"
    },
    {
        id: 4,
        name: "Meera Nair",
        region: "Kochi",
        university: "TU Munich",
        country: "Germany",

        content: "Wanted public university in Germany to save fees. Blocked account process is so confusing usually. They guided me properly through Expatrio. Finding accommodation was tough though, wish they had more support for that. But for admission, 10/10.",
        rating: 4.2,
        date: "5 days ago",
        imageColor: "from-orange-500 to-amber-600"
    },
    {
        id: 5,
        name: "Rahul Singh",
        region: "Chandigarh",
        university: "Northeastern University",
        country: "USA",

        content: "My GRE score was 305, I was losing hope for good US unis. Counselor suggested aim for universities that look at overall profile. SOP editing team is really good, they framed my projects very well. Got 25% scholarship also.",
        rating: 5,
        date: "1 week ago",
        imageColor: "from-purple-500 to-pink-600"
    },
    {
        id: 6,
        name: "Fatima Z.",
        region: "Lucknow",
        university: "University of Melbourne",
        country: "Australia",

        content: "First time going abroad, parents were very worried. The pre-departure session helped a lot to calm them down. They covered everything from sim cards to bank accounts. Feels good to have support even after getting visa.",
        rating: 5,
        date: "3 days ago",
        imageColor: "from-blue-700 to-cyan-600"
    },
    {
        id: 7,
        name: "Ankit Patel",
        region: "Ahmedabad",
        university: "University of British Columbia",
        country: "Canada",

        content: "Genuine consultants. No fake promises. They told me clearly that Canada PR rules are changing so choose course carefully. I liked that honesty. Application process was bit slow but everything was correct. No rejection risk.",
        rating: 4.6,
        date: "2 months ago",
        imageColor: "from-teal-500 to-emerald-600"
    }
];

const ReviewsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const touchStart = useRef(0);
    const touchEnd = useRef(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) return;
        setCurrentIndex((prev) => prev + 1);
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        // Restricted per production requirement (Forward only)
        return;
    }, []);

    // Handle seamless reset
    useEffect(() => {
        if (currentIndex >= reviews.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 700); // Wait for transition to finish (700ms in CSS)
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

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

    useEffect(() => {
        if (!isPaused && isMounted) {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }
    }, [nextSlide, isPaused, isMounted]);

    // Use clones for infinite effect
    const displayReviews = [...reviews, ...reviews.slice(0, 2)]; // 2 is items per view (desktop)

    const getItemsPerView = () => {
        if (typeof window === 'undefined') return 2;
        return window.innerWidth >= 1024 ? 2 : 1;
    };

    if (!isMounted) {
        return <div className="min-h-[400px]" />; // Placeholder during SSR
    }

    return (
        <div className="relative" ref={sliderRef}>
            {/* Navigation Controls - Restricted to Forward Only */}
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 hidden lg:flex items-center justify-center bg-white rounded-full shadow-xl text-[#002147] hover:text-blue-600 hover:scale-110 active:scale-95 transition-all border border-slate-100"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div
                className="overflow-hidden py-4 px-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={(e) => (touchStart.current = e.targetTouches[0].clientX)}
                onTouchMove={(e) => (touchEnd.current = e.targetTouches[0].clientX)}
                onTouchEnd={() => {
                    if (touchStart.current - touchEnd.current > 50) nextSlide();
                    // Backward swipe disabled per production requirement
                }}
            >
                <div
                    className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]' : ''}`}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / displayReviews.length)}%)`,
                        width: `${(displayReviews.length / getItemsPerView()) * 100}%`
                    }}
                >
                    {displayReviews.map((review, index) => (
                        <div
                            key={index}
                            className="w-full lg:w-1/2 shrink-0 px-4"
                            style={{
                                width: `${100 / displayReviews.length}%`,
                                flex: `0 0 ${100 / displayReviews.length}%`
                            }}
                        >
                            <div className="relative bg-[#002147] border-[7px] border-white text-center rounded-[45px] z-10 mx-2 mt-4 mb-4 group shadow-xl hover:scale-[1.02] transition-transform duration-300">
                                {/* Decorative Elements */}
                                <div className="absolute inset-0 rounded-[38px] overflow-hidden pointer-events-none">
                                    {/* Round 1 */}
                                    <div className="absolute w-full h-full z-[1]">
                                        <div className="absolute left-[88px] -top-[7px] w-[50px] h-[7px] bg-white rounded-[30px]" />
                                        <div className="absolute -left-[7px] top-[62px] w-[7px] h-[50px] bg-white rounded-[30px]" />
                                    </div>
                                    {/* Round 2 */}
                                    <div className="absolute w-full h-full z-[1]">
                                        <div className="absolute right-[87px] -bottom-[7px] w-[50px] h-[7px] bg-white rounded-[30px]" />
                                        <div className="absolute -right-[7px] bottom-[62px] w-[7px] h-[50px] bg-white rounded-[30px]" />
                                    </div>
                                </div>

                                {/* Quote Decorations */}
                                <div className="absolute -left-[10px] -top-[10px] w-[126px] h-[100px] flex items-center justify-center pointer-events-none">
                                    <Quote className="w-16 h-16 text-white rotate-180 opacity-10" />
                                </div>
                                <div className="absolute -right-[10px] -bottom-[10px] w-[126px] h-[100px] flex items-center justify-center pointer-events-none">
                                    <Quote className="w-16 h-16 text-white opacity-10" />
                                </div>

                                <p className="text-white text-[15px] leading-[24px] p-8 md:p-12 pb-8 relative z-20">
                                    "{review.content}"
                                </p>

                                <div className="flex items-center justify-center pb-8 relative z-20 pl-4 pr-12">
                                    <div className="mr-4">
                                        <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-lg text-[#002147] font-bold text-xl overflow-hidden border-2 border-white">
                                            {/* Avatar or Icon */}
                                            <img
                                                src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}&backgroundColor=002147&textColor=ffffff`}
                                                alt={review.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-left text-white">
                                        <h6 className="font-bold text-lg leading-tight">{review.name}</h6>
                                        <span className="text-xs opacity-90 uppercase tracking-wide">{review.university}</span>
                                        <div className="flex gap-1 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3 h-3 fill-current ${i < review.rating ? "text-yellow-400" : "text-white/30"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center flex-wrap gap-2 mt-4">
                {reviews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrentIndex(idx);
                        }}
                        className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex % reviews.length === idx ? 'w-[30px] bg-[#002147]' : 'w-[10px] bg-[#002147]/30 hover:bg-[#002147]/60'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
export default ReviewsSlider;
