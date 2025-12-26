"use client";
import Loader from "@/components/common/Loader";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="text-center">
                <Loader size="lg" />
                <p className="mt-4 text-blue-600 font-bold animate-pulse">
                    JV Overseas...
                </p>
            </div>
        </div>
    );
}
