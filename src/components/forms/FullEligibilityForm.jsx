'use client';

import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, ChevronLeft, Send, ShieldCheck, Landmark, GraduationCap, MapPin, User, FileText, IndianRupee } from 'lucide-react';
import api from '@/services/api';

const FullEligibilityForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        studentDetails: {
            fullName: '',
            dob: '',
            mobileNumber: '',
            emailId: '',
            currentAddress: '',
            aadhaarNumber: '',
            panNumber: '',
            passportNumber: '',
        },
        academics: {
            tenth: { board: '', passingYear: '', percentage: '' },
            twelfth: { board: '', passingYear: '', percentage: '' },
            graduation: { university: '', passingYear: '', percentage: '' },
            backlogs: 'No',
            gapYears: '',
        },
        courseDetails: {
            country: '',
            universityName: '',
            courseName: '',
            duration: '',
            intakeMonth: 'Jan',
            intakeYear: '',
            offerLetter: 'No',
        },
        testScores: {
            englishTest: 'IELTS',
            englishScore: '',
            entranceTest: 'N/A',
            entranceScore: '',
            testWaiver: 'No',
        },
        loanRequirement: {
            totalCost: '',
            requiredAmount: '',
            selfContribution: '',
            preferredType: 'Unsecured',
        },
        coApplicant: {
            fullName: '',
            relationship: '',
            occupation: 'Salaried',
            monthlyIncome: '',
            mobileNumber: '',
            panAadhaarAvailable: 'Yes',
            bankAccountAvailable: 'Yes',
            existingLoans: '',
        },
        collateral: {
            type: 'House',
            location: '',
            marketValue: '',
            ownership: '',
        },
        additionalInfo: {
            visaApplied: 'No',
            previousRejection: 'No',
            preferredBank: '',
        }
    });

    const steps = [
        { id: 1, title: 'Student Info', icon: <User size={18} /> },
        { id: 2, title: 'Academics', icon: <GraduationCap size={18} /> },
        { id: 3, title: 'Course', icon: <Landmark size={18} /> },
        { id: 4, title: 'Tests', icon: <FileText size={18} /> },
        { id: 5, title: 'Loan', icon: <IndianRupee size={18} /> },
        { id: 6, title: 'Co-Applicant', icon: <User size={18} /> },
        { id: 7, title: 'Financials', icon: <FileText size={18} /> },
        { id: 8, title: 'Collateral', icon: <MapPin size={18} /> },
        { id: 9, title: 'Final Info', icon: <CheckCircle size={18} /> }
    ];

    const nextStep = () => {
        // Validation for Step 1
        if (step === 1) {
            const { fullName, mobileNumber, emailId } = formData.studentDetails;
            if (!fullName || !mobileNumber || !emailId) {
                setError("Please fill in all mandatory student details (Name, Mobile, Email) to proceed.");
                return;
            }
            setError(null); // Clear error if VALID
        }
        setStep(prev => Math.min(prev + 1, 9));
    };
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleNestedChange = (section, field, value, subField) => {
        // Strict Validation for Real-World Scenarios
        let cleanValue = value;

        // Aadhaar: 12 digits only
        if (field === 'aadhaarNumber') {
            cleanValue = value.replace(/\D/g, '').slice(0, 12);
        }
        // PAN: 10 chars, Uppercase
        if (field === 'panNumber') {
            cleanValue = value.toUpperCase().slice(0, 10);
        }
        // Mobile: 10 digits
        if (field === 'mobileNumber') {
            cleanValue = value.replace(/\D/g, '').slice(0, 10);
        }

        setFormData(prev => {
            if (subField) {
                return {
                    ...prev,
                    [section]: {
                        ...prev[section],
                        [field]: {
                            ...prev[section][field],
                            [subField]: cleanValue
                        }
                    }
                };
            }
            return {
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: cleanValue
                }
            };
        });
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('/public/comprehensive-eligibility', formData);
            setResult(response.data);
            setStep(10); // Result page
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please check your data.');
        } finally {
            setLoading(false);
        }
    };

    const renderInput = (label, section, field, type = 'text', placeholder = '', subField = null, hasNA = false, maxLength = null) => {
        const val = subField ? formData[section][field][subField] : formData[section][field];
        const isNA = val === 'N/A' || val === 'Applied For';

        return (
            <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-base font-semibold text-[#001F3F]">{label}</label>
                    {hasNA && (
                        <button
                            type="button"
                            onClick={() => handleNestedChange(section, field, isNA ? '' : 'Applied For', subField)}
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all border ${isNA ? 'bg-[#1E9E6A] text-white border-[#1E9E6A]' : 'bg-white text-gray-400 border-gray-200 hover:border-[#1E9E6A] hover:text-[#1E9E6A]'
                                }`}
                        >
                            {isNA ? '✓ APPLIED' : 'NOT YET?'}
                        </button>
                    )}
                </div>
                <input
                    type={isNA ? 'text' : type}
                    value={val}
                    disabled={isNA}
                    maxLength={maxLength}
                    onChange={(e) => handleNestedChange(section, field, e.target.value, subField)}
                    placeholder={isNA ? 'Marked as Applied/NA' : placeholder}
                    // Specialized handling for mobile-friendly date inputs
                    className={`w-full px-4 py-3 text-lg border-2 rounded-xl focus:ring-4 outline-none transition-all font-medium appearance-none ${isNA
                        ? 'bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed'
                        : 'border-gray-200 focus:ring-[#1E9E6A]/10 focus:border-[#1E9E6A] text-[#001F3F] placeholder:text-gray-300'
                        } ${type === 'date' ? 'flex-row-reverse justify-end min-h-[54px]' : ''}`}
                    style={type === 'date' ? { WebkitAppearance: 'none', display: 'flex' } : {}}
                />
            </div>
        );
    };

    const renderSelect = (label, section, field, options, subField = null) => {
        const val = subField ? formData[section][field][subField] : formData[section][field];
        return (
            <div className="mb-4">
                <label className="block text-base font-semibold text-[#001F3F] mb-1.5">{label}</label>
                <select
                    value={val}
                    onChange={(e) => handleNestedChange(section, field, e.target.value, subField)}
                    className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1E9E6A]/10 focus:border-[#1E9E6A] outline-none transition-all bg-white text-[#001F3F] font-medium cursor-pointer"
                >
                    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>
        );
    };

    if (step === 10) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-100 animate-in fade-in zoom-in duration-300">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-[#1E9E6A] rounded-full mb-4">
                        <ShieldCheck size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Eligibility Analysis Result</h2>
                    <p className="text-gray-600">Based on your comprehensive profile evaluation</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className={`p-6 rounded-xl border-2 ${result?.isEligible ? 'border-[#1E9E6A] bg-green-50' : 'border-red-200 bg-red-50'}`}>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            Status: {result?.isEligible ? '✅ QUALIFIED' : '❌ REVIEW NEEDED'}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{result?.message}</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#001F3F]">
                            <Landmark size={20} className="text-[#1E9E6A]" /> Loan Recommendations
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Recommended Type:</span>
                                <span className="font-bold text-[#001F3F]">{result?.recommendedLoanType}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Suggested Banks:</span>
                                <span className="font-bold text-[#001F3F]">{result?.suggestedBanks?.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#001F3F] text-white p-6 rounded-xl text-center">
                    <h4 className="font-bold text-xl mb-2">What's Next?</h4>
                    <p className="mb-4 opacity-90 text-sm">Our expert loan counselor will review your profile and contact you within 24 hours to begin the application process.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-[#1E9E6A] hover:bg-[#188055] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:transform hover:-translate-y-1"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto mb-20 px-4">
            {/* Progress Bar */}
            <div className="hidden md:flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
                {steps.map((s) => (
                    <div key={s.id} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${step >= s.id ? 'bg-[#1E9E6A] text-white scale-110 shadow-lg' : 'bg-white border-2 border-gray-200 text-gray-400'
                            }`}>
                            {step > s.id ? <CheckCircle size={20} /> : s.icon}
                        </div>
                        <span className={`text-[10px] mt-2 font-bold uppercase tracking-wider ${step >= s.id ? 'text-[#001F3F]' : 'text-gray-400'
                            }`}>{s.title}</span>
                    </div>
                ))}
            </div>

            {/* Mobile Step Counter */}
            <div className="md:hidden flex items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-[#001F3F]">Step {step} of 9</span>
                <span className="text-[#1E9E6A] font-bold">{steps[step - 1].title}</span>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-[#001F3F] p-6 text-white flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-3">
                            <Landmark className="text-[#1E9E6A]" /> Comprehensive Loan Eligibility
                        </h2>
                        <p className="text-xs text-gray-400 mt-1">Provide accurate details for a guaranteed evaluation</p>
                    </div>
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                        {Math.round((step / 9) * 100)}% Complete
                    </div>
                </div>

                <div className="p-8">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-100 text-sm flex items-center gap-2">
                            {error}
                        </div>
                    )}

                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* 1. Student Basic Details */}
                        {step === 1 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">1️⃣ Student Basic Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {renderInput("Full Name (as per Passport)", "studentDetails", "fullName", "text", "Enter full name")}
                                    {renderInput("Date of Birth", "studentDetails", "dob", "date")}
                                    {renderInput("Mobile Number", "studentDetails", "mobileNumber", "tel", "9999999999", null, false, 10)}
                                    {renderInput("Email ID", "studentDetails", "emailId", "email", "example@mail.com")}
                                    <div className="md:col-span-2">
                                        {renderInput("Current Residential Address", "studentDetails", "currentAddress", "text", "Full current address")}
                                    </div>
                                    {renderInput("Aadhaar Number (Mandatory)", "studentDetails", "aadhaarNumber", "text", "12 digit Aadhaar", null, false, 12)}
                                    {renderInput("PAN Number (Mandatory)", "studentDetails", "panNumber", "text", "ABCDE1234F", null, false, 10)}
                                    {renderInput("Passport Number", "studentDetails", "passportNumber", "text", "Travel document number", null, true)}
                                </div>
                            </div>
                        )}

                        {/* 2. Academic Details */}
                        {step === 2 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">2️⃣ Academic Details</h3>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <h4 className="font-bold text-sm text-[#1E9E6A] mb-3">10th Standard</h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {renderInput("Board", "academics", "tenth", "text", "e.g. CBSE", "board")}
                                            {renderInput("Year", "academics", "tenth", "text", "2018", "passingYear")}
                                            {renderInput("Percentage/CGPA", "academics", "tenth", "text", "85%", "percentage")}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <h4 className="font-bold text-sm text-[#1E9E6A] mb-3">12th Standard</h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {renderInput("Board", "academics", "twelfth", "text", "e.g. CBSE", "board")}
                                            {renderInput("Year", "academics", "twelfth", "text", "2020", "passingYear")}
                                            {renderInput("Percentage/CGPA", "academics", "twelfth", "text", "90%", "percentage")}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <h4 className="font-bold text-sm text-[#1E9E6A] mb-3">Graduation (if applicable)</h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {renderInput("University", "academics", "graduation", "text", "University Name", "university")}
                                            {renderInput("Year", "academics", "graduation", "text", "2024", "passingYear", true)}
                                            {renderInput("Percentage/CGPA", "academics", "graduation", "text", "8.5 CGPA", "percentage", true)}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {renderSelect("Academic Backlogs", "academics", "backlogs", ["No", "Yes"])}
                                        {renderInput("Gap Years (if any)", "academics", "gapYears", "text", "Duration & Reason")}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3. Course Details */}
                        {step === 3 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">3️⃣ Course & University Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {renderInput("Country of Study", "courseDetails", "country", "text", "USA, UK, etc.")}
                                    {renderInput("University Name", "courseDetails", "universityName", "text", "Institution Name")}
                                    {renderInput("Course Name", "courseDetails", "courseName", "text", "MS / MSc / MBA")}
                                    {renderInput("Course Duration", "courseDetails", "duration", "text", "2 Years / 1 Year")}
                                    {renderSelect("Intake Month", "courseDetails", "intakeMonth", ["Jan", "May", "Sep"])}
                                    {renderInput("Intake Year", "courseDetails", "intakeYear", "number", "e.g. 2026")}
                                    {renderSelect("Offer Letter Available?", "courseDetails", "offerLetter", ["No", "Yes"])}
                                </div>
                            </div>
                        )}

                        {/* 4. Test Scores */}
                        {step === 4 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">4️⃣ English Language / Entrance Test Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {renderSelect("English Test Taken?", "testScores", "englishTest", ["IELTS", "TOEFL", "PTE", "Duolingo", "Not Taken"])}
                                    {renderInput("English Score", "testScores", "englishScore", "text", "Overall Score", null, true)}
                                    {renderSelect("Entrance Test Taken?", "testScores", "entranceTest", ["GRE", "GMAT", "N/A"])}
                                    {renderInput("Entrance Score", "testScores", "entranceScore", "text", "Sectional/Overall", null, true)}
                                    {renderSelect("Test Waiver Available?", "testScores", "testWaiver", ["No", "Yes"])}
                                </div>
                            </div>
                        )}

                        {/* 5. Loan Requirements */}
                        {step === 5 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">5️⃣ Loan Requirement Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {renderInput("Total Course Cost", "loanRequirement", "totalCost", "number", "Tuition + Living")}
                                    {renderInput("Required Loan Amount", "loanRequirement", "requiredAmount", "number", "Amount in ₹")}
                                    {renderInput("Self Contribution", "loanRequirement", "selfContribution", "number", "Amount from savings")}
                                    {renderSelect("Preferred Loan Type", "loanRequirement", "preferredType", ["Unsecured", "Secured"])}
                                </div>
                                <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 text-xs rounded-lg border border-yellow-100 italic">
                                    Note: Unsecured loans are faster to process, while Secured loans offer lower interest rates.
                                </div>
                            </div>
                        )}

                        {/* 6. Co-Applicant Details */}
                        {step === 6 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">6️⃣ Co-Applicant Details (Mandatory)</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {renderInput("Full Name", "coApplicant", "fullName", "text", "Parent/Guardian Name")}
                                    {renderInput("Relationship to Student", "coApplicant", "relationship", "text", "e.g. Father, Mother, Brother")}
                                    {renderSelect("Occupation / Employment Status", "coApplicant", "occupation", ["Salaried", "Business", "Self-Employed"])}
                                    {renderInput("Mobile Number", "coApplicant", "mobileNumber", "tel", "9999999999")}
                                    {renderSelect("PAN & Aadhaar Available?", "coApplicant", "panAadhaarAvailable", ["Yes", "No"])}
                                </div>
                            </div>
                        )}

                        {/* 7. Financial Details */}
                        {step === 7 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">7️⃣ Co-Applicant Income & Financials</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {renderInput("Monthly Take-home Salary/Income", "coApplicant", "monthlyIncome", "number", "₹ per month")}
                                    {renderSelect("Bank Account Available?", "coApplicant", "bankAccountAvailable", ["Yes", "No"])}
                                    <div className="md:col-span-2">
                                        {renderInput("Existing Loans (EMI Details)", "coApplicant", "existingLoans", "text", "Home/Personal Loans/Credit Card EMIs")}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 8. Collateral Details */}
                        {step === 8 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">8️⃣ Collateral Details (Only for Secured Loan)</h3>
                                {formData.loanRequirement.preferredType === 'Unsecured' ? (
                                    <div className="p-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                        <p className="text-gray-500 mb-4 font-medium">You have selected 'Unsecured' loan as preference. Collateral details are optional.</p>
                                        <button
                                            onClick={() => nextStep()}
                                            className="text-[#1E9E6A] font-bold hover:underline"
                                        >
                                            Skip this step →
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {renderSelect("Type of Collateral", "collateral", "type", ["House", "Flat", "Plot", "Fixed Deposit"])}
                                        {renderInput("Property Location", "collateral", "location", "text", "City/Area")}
                                        {renderInput("Approximate Market Value", "collateral", "marketValue", "number", "Amount in ₹")}
                                        {renderInput("Ownership", "collateral", "ownership", "text", "Father/Mother/Joint")}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* 9. Additional Info */}
                        {step === 9 && (
                            <div className="animate-in slide-in-from-right duration-300">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-6 border-b pb-2">9️⃣ Additional Information</h3>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    {renderSelect("Visa Applied?", "additionalInfo", "visaApplied", ["No", "Yes"])}
                                    {renderSelect("Previous Education Loan Rejection?", "additionalInfo", "previousRejection", ["No", "Yes"])}
                                    {renderSelect("Preferred Bank (optional)", "additionalInfo", "preferredBank", ["Punjab National Bank (PNB)", "Avanse", "Credila", "Auxilo", "InCred", "Tata Capital", "Prodigy Finance", "Axis Bank", "ICICI Bank"])}
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                                    <h4 className="font-bold text-sm text-blue-900 mb-2">📄 Required Documents Check</h4>
                                    <p className="text-xs text-blue-800 leading-relaxed">
                                        Ensure you have soft copies of: Student Aadhaar/PAN, Passport, Academic Certificates, Offer Letter, Co-applicant income proof.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <input type="checkbox" required className="mt-1 w-4 h-4 rounded text-[#1E9E6A] outline-none" id="declare" />
                                    <label htmlFor="declare" className="text-xs text-gray-600 leading-normal">
                                        I hereby declare that all information provided is true and accurate. I understand that educational loan approval depends on bank criteria and document verification.
                                    </label>
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                <div className="p-6 bg-gray-50 border-t flex justify-between items-center">
                    <button
                        type="button"
                        onClick={prevStep}
                        disabled={step === 1 || loading}
                        className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition-all ${step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#001F3F] hover:bg-white hover:shadow-sm'
                            }`}
                    >
                        <ChevronLeft size={18} /> Back
                    </button>

                    {step < 9 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-[#001F3F] hover:bg-[#002b59] text-white px-8 py-3 rounded-lg font-bold shadow-lg flex items-center gap-2 transition-all hover:transform hover:translate-x-1"
                        >
                            Continue <ChevronRight size={18} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-[#1E9E6A] hover:bg-[#188055] text-white px-10 py-3 rounded-lg font-bold shadow-lg flex items-center gap-2 transition-all hover:scale-105 disabled:opacity-50"
                        >
                            {loading ? 'Processing...' : 'Get Eligibility Report'} <Send size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FullEligibilityForm;
