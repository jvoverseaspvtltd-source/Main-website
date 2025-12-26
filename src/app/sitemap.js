export default function sitemap() {
    const baseUrl = 'https://jvoverseas.com';
    const lastModified = new Date();

    const routes = [
        '',
        '/services',
        '/universities',
        '/loan',
        '/contact',
        '/eligibility',
        '/enquiry',
        '/countries',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
