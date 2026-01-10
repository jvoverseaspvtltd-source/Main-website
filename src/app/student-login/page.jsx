import React from 'react';
import Link from 'next/link';
import { User, ArrowLeft } from 'lucide-react';

export const metadata = {
    title: "Student Login | JV Overseas",
    description: "Log in to the JV Overseas Student Portal.",
    alternates: {
        canonical: '/student-login',
    },
};

const StudentLoginPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full max-w-md text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <User size={40} />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Student Portal</h1>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Our new Student Portal is currently under maintenance or being migrated. Please contact your counselor or our support team for any immediate assistance.
                </p>

                <div className="space-y-4">
                    <a
                        href="mailto:admin@jvoverseas.com"
                        className="block w-full py-3 px-6 bg-[#0F2A44] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                    >
                        Contact Support
                    </a>
                    <Link
                        href="/login"
                        className="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-800 transition-colors py-2"
                    >
                        <ArrowLeft size={16} />
                        Back to Portal Selection
                    </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-sm text-slate-400">
                        JV Overseas Pvt. Ltd. &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StudentLoginPage;
