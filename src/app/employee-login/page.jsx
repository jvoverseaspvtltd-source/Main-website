import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, ExternalLink } from 'lucide-react';
import siteConfig from '../../config/siteConfig';

export const metadata = {
    title: "Employee Login | JV Overseas",
    description: "Log in to the JV Overseas Employee/CRM Portal.",
};

const EmployeeLoginPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full max-w-md text-center">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Employee Portal</h1>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Access the JV Overseas CRM and internal management tools. Use your official credentials to sign in.
                </p>

                <div className="space-y-4">
                    <a
                        href={siteConfig.crmUrl}
                        className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-slate-800 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to CRM Portal
                        <ExternalLink size={18} />
                    </a>
                    <Link
                        href="/login"
                        className="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-800 transition-colors py-2"
                    >
                        <ArrowLeft size={16} />
                        Back to Portal Selection
                    </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400">
                    <p>Internal Access Only</p>
                    <p className="mt-1">JV Overseas Pvt. Ltd. &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeLoginPage;
