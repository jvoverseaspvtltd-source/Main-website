export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin',
                    '/crm',
                    '/lms',
                    '/api/',
                    '/_next/',
                    '/private/',
                ],
            },
        ],
        sitemap: 'https://www.jvoverseas.com/sitemap.xml',
    }
}
