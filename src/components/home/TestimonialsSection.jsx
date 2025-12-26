"use client";
import React from 'react';
import ReviewsSlider from '../common/ReviewsSlider';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-12 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Success Stories from <span className="text-blue-900">Our Students</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Join thousands of students across India who trusted JV Overseas for their global education journey.
                    </p>
                </div>

                <ReviewsSlider />
            </div>
        </section>
    );
};

export default TestimonialsSection;
