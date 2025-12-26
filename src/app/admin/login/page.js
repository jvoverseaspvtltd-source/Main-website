'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../../services/api';

export default function AdminLogin() {
    const [step, setStep] = useState(1); // 1: Login, 2: OTP
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await api.post('/admin/login', { email, password });
            setStep(2);
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed');
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await api.post('/admin/verify-otp', { email, otp });
            localStorage.setItem('token', res.data.token);
            router.push('/admin/dashboard');
        } catch (err) {
            setError(err.response?.data?.msg || 'OTP Verification failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Portal</h1>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}

                {step === 1 ? (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 text-black"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 text-black"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerify} className="space-y-4">
                        <p className="text-sm text-gray-600 mb-4">Enter the OTP sent to your email.</p>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">OTP</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 text-black"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                        >
                            Verify OTP
                        </button>
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-sm text-gray-500 underline"
                        >
                            Back to Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
