import axios from 'axios';
import siteConfig from '../config/siteConfig';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || siteConfig.apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to attach the token (primarily for the internal Admin portal)
api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const isPublicRoute = config.url && config.url.includes('/public/');

            // Only attach token if it exists AND the request is NOT to a public route
            if (token && !isPublicRoute) {
                config.headers['x-auth-token'] = token;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Optional: Add response interceptor for 401 handling (logout)

export default api;
