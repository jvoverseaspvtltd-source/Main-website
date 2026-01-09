import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl;
    const { pathname, search } = url;
    const host = request.headers.get('host') || '';
    // Check x-forwarded-proto (standard for proxies) or fallback to nextUrl.protocol
    const protocol = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');

    const isProductionDomain = host === 'jvoverseas.com' || host === 'www.jvoverseas.com';

    if (isProductionDomain) {
        if (host === 'jvoverseas.com') {
            const newUrl = new URL(`https://www.jvoverseas.com${pathname}${search}`);
            return NextResponse.redirect(newUrl, 301);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
};
