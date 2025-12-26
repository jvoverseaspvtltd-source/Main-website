const getApiBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;

    // In development, detect hostname automatically for cross-device support (e.g. mobile access)
    if (process.env.NODE_ENV === 'development') {
        if (typeof window !== 'undefined') {
            return `http://${window.location.hostname}:5001/api`;
        }
    }

    return ""; // Always rely on environment variables or dynamic detection
};

const siteConfig = {
    name: "JV Overseas",
    description: "Your trusted partner for overseas education and immigration.",
    url: "https://jvoverseas.com",
    apiBaseUrl: getApiBaseUrl(),
    lmsUrl: process.env.NEXT_PUBLIC_LMS_URL || "#",
    crmUrl: process.env.NEXT_PUBLIC_CRM_URL || "#",
    social: {
        instagram: "https://www.instagram.com/jvoadm016/",
        twitter: "https://x.com/JvOverseas/communities/explore",
        linkedin: "https://www.linkedin.com/in/jv-overseas-ba756b3a2/",
    },
    logo: {
        image: "/icon.webp",
        alt: "JV Overseas Logo",
    },
};

export default siteConfig;
