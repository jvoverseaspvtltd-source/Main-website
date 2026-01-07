export default function manifest() {
    return {
        name: 'JV Overseas Pvt Ltd',
        short_name: 'JV Overseas',
        description: 'Premier Overseas Education & Loan Consultancy',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
            {
                src: '/icon.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/icon.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
        ],
    }
}
