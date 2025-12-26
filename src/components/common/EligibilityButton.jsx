"use client";

import Link from "next/link";

const EligibilityButton = () => {
    const text = "CHECK YOUR ELIGIBILITY "; // Added space for better looping
    const characters = text.split("");

    return (
        <Link href="/eligibility" className="fixed bottom-8 left-8 z-50 group">
            <button className="relative w-[100px] h-[100px] rounded-full bg-[#251351] text-[#E57A44] border-none cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#E57A44] hover:text-[#251351] shadow-lg flex items-center justify-center">

                {/* Rotating Text */}
                <p
                    className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_8s_linear_infinite]"
                >
                    {characters.map((char, index) => (
                        <span
                            key={index}
                            className="absolute left-1/2 top-0 text-xs font-bold uppercase tracking-widest origin-[0_50px]"
                            style={{
                                transform: `translateX(-50%) rotate(${index * (360 / characters.length)}deg)`,
                                height: '50px',
                                transformOrigin: 'bottom center'
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </p>

                {/* Inner Circle with Icons */}
                <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#251351] transition-colors duration-300 overflow-hidden">
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute transition-transform duration-300 ease-in-out delay-100 translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </button>
        </Link>
    );
};

export default EligibilityButton;
