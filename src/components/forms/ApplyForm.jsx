"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import api from "../../services/api";

// Styles
const labelStyle = "block text-sm font-medium text-gray-500 mb-1.5";
const inputStyle = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-gray-900 placeholder:text-gray-400 transition-all duration-200 outline-none";
const sectionStyle = "bg-white rounded-xl p-6 md:p-8 space-y-6 shadow-sm border border-gray-100";
const sectionHeaderStyle = "text-lg md:text-xl font-bold text-slate-900 border-b border-gray-100 pb-2 mb-4";

const Select = ({ label, id, options, value, onChange, placeholder = "Select an option", error }) => (
    <div className="flex flex-col">
        {label && <label htmlFor={id} className={labelStyle}>{label}</label>}
        <select
            id={id}
            value={value}
            onChange={onChange}
            className={inputStyle}
        >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
);

const RadioGroup = ({ label, name, options, value, onChange }) => (
    <div className="flex flex-col gap-3">
        {label && <p className={labelStyle}>{label}</p>}
        <div className="flex flex-wrap gap-4">
            {options.map((opt) => (
                <label
                    key={opt}
                    className={`flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg border transition-all ${value === opt
                        ? "bg-slate-50 border-slate-900 ring-1 ring-slate-900"
                        : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                >
                    <input
                        type="radio"
                        name={name}
                        value={opt}
                        checked={value === opt}
                        onChange={onChange}
                        className="w-4 h-4 text-slate-900 focus:ring-slate-900 border-gray-300"
                    />
                    <span className={`font-medium ${value === opt ? "text-slate-900" : "text-gray-600"}`}>{opt}</span>
                </label>
            ))}
        </div>
    </div>
);

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        city: "",
        country: "",
        intakeMonth: "",
        intakeYear: "",
        qualification: "",
        course: "",
        englishTest: "",
        testScore: "",
        loanRequired: "",
        loanAmount: "",
        loanType: "",
        coApplicantRelation: "",
        coApplicantOccupation: "",
        callTime: "",
        query: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, name, value } = e.target;
        const fieldName = id || name;

        if (fieldName === 'mobile') {
            // Only allow numbers and max 10 digits
            const re = /^[0-9\b]+$/;
            if (value === '' || (re.test(value) && value.length <= 10)) {
                setFormData(prev => ({ ...prev, [fieldName]: value }));
            }
        } else {
            setFormData(prev => ({ ...prev, [fieldName]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            name: formData.fullName,
            phone: formData.mobile,
            email: formData.email,
            serviceType: formData.loanRequired === 'Yes' ? 'Study Abroad + Loan' : 'Study Abroad',
            details: formData
        };

        try {
            await api.post('/public/intake', payload);
            alert("Thank you! Your enquiry has been submitted successfully based on the official intake process. We'll contact you soon!");
            setFormData({
                fullName: "",
                mobile: "",
                email: "",
                city: "",
                country: "",
                intakeMonth: "",
                intakeYear: "",
                qualification: "",
                course: "",
                englishTest: "",
                testScore: "",
                loanRequired: "",
                loanAmount: "",
                loanType: "",
                coApplicantRelation: "",
                coApplicantOccupation: "",
                callTime: "",
                query: ""
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit enquiry. Please try again or contact support.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl mx-auto space-y-8"
        >
            {/* Header */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Start Your Journey Today
                </h3>
                <p className="text-gray-500 mt-2 text-base">Fill in your details and our counsellor will contact you.</p>
            </div>

            {/* Student Details */}
            <div className={sectionStyle}>
                <h4 className={sectionHeaderStyle}>Student Basic Details</h4>
                <div className="space-y-6">
                    <div className="group">
                        <label className={labelStyle}>Full Name *</label>
                        <input id="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className={inputStyle} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelStyle}>Mobile Number *</label>
                            <input id="mobile" type="tel" value={formData.mobile} onChange={handleChange} required placeholder="e.g. 9876543210" className={inputStyle} />
                        </div>
                        <div>
                            <label className={labelStyle}>Email Address *</label>
                            <input id="email" type="email" value={formData.email} onChange={handleChange} required placeholder="e.g. john@example.com" className={inputStyle} />
                        </div>
                    </div>
                    <div>
                        <label className={labelStyle}>Current City / State *</label>
                        <input id="city" value={formData.city} onChange={handleChange} required placeholder="e.g. Hyderabad, Telangana" className={inputStyle} />
                    </div>
                </div>
            </div>

            {/* Study Abroad */}
            <div className={sectionStyle}>
                <h4 className={sectionHeaderStyle}>Study Abroad Preferences</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <Select
                        label="Preferred Country *"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        options={["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "New Zealand", "Others"]}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Select label="Intake Month" id="intakeMonth" value={formData.intakeMonth} onChange={handleChange} options={["Jan", "May", "Sep"]} />
                        <div>
                            <label className={labelStyle}>Year</label>
                            <input id="intakeYear" type="number" value={formData.intakeYear} onChange={handleChange} placeholder="2026" className={inputStyle} />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <Select label="Highest Qualification" id="qualification" value={formData.qualification} onChange={handleChange} options={["10+2", "Bachelor's", "B.Tech", "B.Sc", "Others"]} />
                    <Select label="Interested Course" id="course" value={formData.course} onChange={handleChange} options={["MS", "MSc", "MBA", "MEng", "PhD", "Others"]} />
                </div>
            </div>

            {/* English Test */}
            <div className={sectionStyle}>
                <h4 className={sectionHeaderStyle}>English Proficiency Test</h4>
                <div className="grid md:grid-cols-2 gap-6 items-end">
                    <Select
                        label="Test Taken?"
                        id="englishTest"
                        value={formData.englishTest}
                        onChange={handleChange}
                        options={["IELTS", "TOEFL", "PTE", "Duolingo", "GRE", "Not Taken"]}
                    />
                    {formData.englishTest && formData.englishTest !== "Not Taken" && (
                        <div className="animate-in fade-in slide-in-from-left duration-300">
                            <label className={labelStyle}>Your Score</label>
                            <input id="testScore" value={formData.testScore} onChange={handleChange} placeholder="e.g. 7.5" className={inputStyle} />
                        </div>
                    )}
                </div>
            </div>

            {/* Loan Section */}
            <div className={sectionStyle}>
                <h4 className={sectionHeaderStyle}>Education Loan Requirement</h4>
                <RadioGroup label="Do you need an Education Loan?" name="loanRequired" value={formData.loanRequired} onChange={handleChange} options={["Yes", "No"]} />
                {formData.loanRequired === "Yes" && (
                    <div className="mt-6 p-6 bg-slate-50/50 rounded-xl border border-slate-100 animate-in fade-in slide-in-from-bottom">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelStyle}>Loan Amount Required (₹ in Lakhs)</label>
                                <input id="loanAmount" type="number" value={formData.loanAmount} onChange={handleChange} placeholder="e.g. 25" className={inputStyle} />
                            </div>
                            <RadioGroup label="Preferred Loan Type" name="loanType" value={formData.loanType} onChange={handleChange} options={["Secured (With Collateral)", "Unsecured"]} />
                        </div>
                    </div>
                )}
            </div>

            {/* Co-Applicant */}
            <div className={sectionStyle}>
                <h4 className={sectionHeaderStyle}>Co-Applicant Details (For Loan)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <Select label="Relationship with Applicant" id="coApplicantRelation" value={formData.coApplicantRelation} onChange={handleChange} options={["Father", "Mother", "Spouse", "Guardian"]} />
                    <Select label="Occupation" id="coApplicantOccupation" value={formData.coApplicantOccupation} onChange={handleChange} options={["Salaried", "Business Owner", "Professional", "Retired"]} />
                </div>
            </div>

            {/* Follow Up */}
            <div className={sectionStyle}>
                <h4 className={sectionHeaderStyle}>Best Time to Contact</h4>
                <div>
                    <label className={labelStyle}>Preferred Call Time</label>
                    <input id="callTime" value={formData.callTime} onChange={handleChange} placeholder="e.g. 10 AM - 1 PM or After 6 PM" className={inputStyle} />
                </div>
                <div>
                    <label className={labelStyle}>Additional Message (Optional)</label>
                    <textarea
                        id="query"
                        value={formData.query}
                        onChange={handleChange}
                        rows={4}
                        className={inputStyle + " resize-none"}
                        placeholder="Any specific university, budget, or concerns?"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-lg font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-80 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                    </span>
                ) : (
                    "Submit Enquiry"
                )}
            </button>

            <p className="text-center text-xs text-gray-400 mt-6">
                By submitting, you agree to be contacted by our counselors via call/WhatsApp/email.
            </p>
        </form>
    );
};

export default ApplyForm;