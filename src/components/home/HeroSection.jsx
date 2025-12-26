"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/video/jvoverseas.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Content */}
            <div className="relative z-10 h-full w-full flex items-start justify-center px-4">
                <div className="max-w-5xl text-center text-white pt-2 sm:pt-3 md:pt-4">

                    {/* Heading (slightly upper) */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                        Premier <span className="text-blue-400">Global Education</span> Consultancy
                    </h1>

                    {/* Buttons (always horizontal + lower) */}
                    <div className="flex flex-row gap-2 justify-center mt-30 sm:mt-95 lg:mt-95">
                        <Link
                            href="/enquiry"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-full font-semibold text-sm sm:text-base shadow-lg"
                        >
                            Free Consultation
                        </Link>

                        <Link
                            href="/countries"
                            className="px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition rounded-full font-semibold text-sm sm:text-base"
                        >
                            Explore Countries
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    );
}
