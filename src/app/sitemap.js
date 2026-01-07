export default function sitemap() {
    const baseUrl = 'https://www.jvoverseas.com';
    const lastModified = new Date();

    const routes = [
        '',
        '/about',
        '/services',
        '/universities',
        '/countries',
        '/courses',
        '/loan',
        '/eligibility',
        '/apply',
        '/enquiry',
        '/contact',
        '/faq',
        '/login',
        '/student-login',
        '/employee-login',
        '/privacy-policy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
