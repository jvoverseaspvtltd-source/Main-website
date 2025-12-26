'use client';
import { useState } from 'react';
import api from '../services/api';

// Styles
const labelStyle = "block text-sm font-medium text-gray-500 mb-1.5";
const inputStyle = "w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-gray-900 placeholder:text-gray-400 transition-all duration-200 outline-none text-sm md:text-base";
const inputErrorStyle = "w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-red-50 text-gray-900 placeholder:text-gray-400 transition-all duration-200 outline-none text-sm md:text-base";

const EligibilityCheck = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        income: '',
        cibilScore: '',
        serviceType: 'Loan'
    });
    const [errors, setErrors] = useState({});
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.income) {
            newErrors.income = 'Annual income is required';
        } else if (formData.income < 100000) {
            newErrors.income = 'Income must be at least ₹1,00,000';
        }

        if (!formData.cibilScore) {
            newErrors.cibilScore = 'Credit score is required';
        } else if (formData.cibilScore < 300 || formData.cibilScore > 900) {
            newErrors.cibilScore = 'Credit score must be between 300 and 900';
        }

        if (!isChecked) {
            newErrors.declaration = 'You must agree to the transparency declaration';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const res = await api.post('/public/eligibility-check', formData);
            setResult(res.data);
        } catch (err) {
            console.error(err);
            alert('Error checking eligibility. Please ensure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl border border-gray-100 shadow-sm w-full max-w-2xl mx-auto my-4 md:my-8 font-sans">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-slate-900 text-center">Check Your Eligibility</h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 text-center px-2">Get an instant estimation based on current bank policies.</p>

            {!result ? (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className={labelStyle}>Name *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? inputErrorStyle : inputStyle}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className={labelStyle}>Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="10-digit Mobile"
                                value={formData.phone}
                                onChange={handleChange}
                                className={errors.phone ? inputErrorStyle : inputStyle}
                                maxLength="10"
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                    </div>

                    <div>
                        <label className={labelStyle}>Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? inputErrorStyle : inputStyle}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className={labelStyle}>Annual Income (₹) *</label>
                            <input
                                type="number"
                                name="income"
                                placeholder="e.g. 500000"
                                value={formData.income}
                                onChange={handleChange}
                                className={errors.income ? inputErrorStyle : inputStyle}
                                min="100000"
                            />
                            {errors.income && <p className="text-red-500 text-xs mt-1">{errors.income}</p>}
                        </div>
                        <div>
                            <label className={labelStyle}>Credit Score *</label>
                            <input
                                type="number"
                                name="cibilScore"
                                placeholder="e.g. 750"
                                value={formData.cibilScore}
                                onChange={handleChange}
                                className={errors.cibilScore ? inputErrorStyle : inputStyle}
                                min="300"
                                max="900"
                            />
                            {errors.cibilScore && <p className="text-red-500 text-xs mt-1">{errors.cibilScore}</p>}
                        </div>
                    </div>

                    <div>
                        <label className={labelStyle}>Service Type *</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className={inputStyle}
                        >
                            <option value="Loan">Education Loan</option>
                            <option value="Visa">Visa Services</option>
                        </select>
                    </div>

                    <div className={`p-3 md:p-4 rounded-lg border ${errors.declaration ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-100'} text-xs text-gray-600`}>
                        <label className="flex items-start space-x-2 md:space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => {
                                    setIsChecked(e.target.checked);
                                    if (errors.declaration) {
                                        setErrors({ ...errors, declaration: '' });
                                    }
                                }}
                                className="mt-0.5 md:mt-1 w-4 h-4 text-slate-900 rounded border-gray-300 focus:ring-slate-900 flex-shrink-0"
                            />
                            <span className="text-xs md:text-sm">
                                <strong>Transparency Declaration:</strong> I understand that the eligibility amount shown is an estimate only. Final loan approval depends on bank policies and document verification. Any false information may lead to rejection.
                            </span>
                        </label>
                        {errors.declaration && <p className="text-red-500 text-xs mt-2 ml-7">{errors.declaration}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-900 text-white py-3 md:py-4 rounded-lg font-bold hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-80 text-sm md:text-lg shadow-md touch-manipulation"
                    >
                        {loading ? 'Analyzing Profile...' : 'Check My Eligibility'}
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-2">
                        Data is securely stored for compliance and future reference.
                    </p>
                </form>
            ) : (
                <div className="space-y-4 md:space-y-6 py-2">
                    <div className={`p-4 md:p-6 rounded-xl border-l-4 ${result.eligible ? 'bg-emerald-50 border-emerald-500' : 'bg-amber-50 border-amber-500'}`}>
                        <h3 className={`text-lg md:text-2xl font-bold mb-2 md:mb-3 ${result.eligible ? 'text-emerald-800' : 'text-amber-800'}`}>
                            {result.eligible ? '✅ Eligibility Summary' : '⚠️ Profile Review Needed'}
                        </h3>
                        <div className="text-gray-800 text-sm md:text-lg leading-relaxed font-medium">
                            {result.message}
                        </div>
                    </div>

                    {result.eligible && (
                        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2">
                                <span className="bg-blue-100 text-blue-700 p-1 rounded text-sm md:text-base">📈</span>
                                <span className="text-sm md:text-base">How to Increase Your Loan Amount</span>
                            </h4>
                            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                                    <span><strong>Add a Co-applicant:</strong> Adding a financially strong co-applicant can significantly boost eligibility.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                                    <span><strong>Provide Collateral:</strong> Valid property documents increase trust and loan limits.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                                    <span><strong>Test Scores:</strong> High IELTS/TOEFL scores improve profile strength.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                                    <span><strong>University Ranking:</strong> Admission in a top-tier university increases approval chances.</span>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className="bg-slate-50 p-4 md:p-6 rounded-xl text-center border border-slate-100">
                        <h4 className="font-semibold text-slate-900 mb-2 text-sm md:text-base">Need help understanding your options?</h4>
                        <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Our executive will personally guide you through each step.</p>
                        <button
                            onClick={() => {
                                setResult(null);
                                setFormData({
                                    name: '',
                                    phone: '',
                                    email: '',
                                    income: '',
                                    cibilScore: '',
                                    serviceType: 'Loan'
                                });
                                setErrors({});
                                setIsChecked(false);
                            }}
                            className="text-slate-900 font-bold hover:underline text-xs md:text-sm touch-manipulation"
                        >
                            Check Another Profile
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EligibilityCheck;
