export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/admin',
                '/crm',
                '/lms',
                '/api/',
                '/_next/',
                '/static/',
            ],
        },
        sitemap: 'https://www.jvoverseas.com/sitemap.xml',
    }
}
