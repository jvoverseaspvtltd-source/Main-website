import React from 'react';
import Link from 'next/link';
import { User, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: "Login | JV Overseas",
    description: "Select your portal to log in to JV Overseas.",
};

const LoginPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-6">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Student Login Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <User size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Student Portal</h2>
                    <p className="text-slate-600 mb-8">
                        Access your application status, upload documents, and track your overseas education journey.
                    </p>
                    <Link
                        href="/student-login"
                        className="inline-flex items-center justify-center w-full py-3 px-6 bg-[#0F2A44] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                    >
                        Login as Student
                    </Link>
                </div>

                {/* Employee Login Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <ShieldCheck size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Employee Portal</h2>
                    <p className="text-slate-600 mb-8">
                        Internal portal for JV Overseas staff to manage student applications and partner relationships.
                    </p>
                    <Link
                        href="/employee-login"
                        className="inline-flex items-center justify-center w-full py-3 px-6 bg-slate-800 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                    >
                        Login as Employee
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
