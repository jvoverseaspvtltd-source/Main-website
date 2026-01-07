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
            ],
        },
        sitemap: 'https://www.jvoverseas.com/sitemap.xml',
    }
}
