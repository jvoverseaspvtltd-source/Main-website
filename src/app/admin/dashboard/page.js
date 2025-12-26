'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../../services/api';

export default function AdminDashboard() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const res = await api.get('/admin/leads');
                setLeads(res.data);
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    router.push('/admin/login');
                }
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/admin/login');
    };

    if (loading) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <div className="space-x-4">
                    {/* Placeholders for future CRM/LMS */}
                    <button className="text-gray-400 cursor-not-allowed" disabled>CRM (Coming Soon)</button>
                    <button className="text-gray-400 cursor-not-allowed" disabled>LMS (Coming Soon)</button>
                    <button onClick={handleLogout} className="text-red-600 font-medium">Logout</button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">New Leads</h2>

                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University / Details</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {leads.map((lead) => (
                                <tr key={lead._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-black font-medium">{lead.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-black">
                                        <div className="text-sm">{lead.email}</div>
                                        <div className="text-sm text-gray-500">{lead.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-black">{lead.serviceType}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-black">
                                        {(lead.university || lead.details?.university) && (
                                            <div className="font-semibold text-blue-600">{lead.university || lead.details?.university}</div>
                                        )}
                                        {(lead.preferredCountry || lead.details?.preferredCountry) && (
                                            <div className="text-xs text-gray-500">{lead.preferredCountry || lead.details?.preferredCountry}</div>
                                        )}
                                        {!lead.university && !lead.details?.university && !lead.preferredCountry && !lead.details?.preferredCountry && (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${lead.source === 'chat' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                                            {lead.source}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-indigo-600 hover:text-indigo-900 mr-4 disabled:opacity-50" disabled>Push to CRM</button>
                                    </td>
                                </tr>
                            ))}
                            {leads.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-10 text-center text-gray-500">No leads found yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
