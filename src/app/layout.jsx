import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import EligibilityButton from "../components/common/EligibilityButton";
import FloatingButtons from "../components/home/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import WhatsAppButton from "../components/common/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://www.jvoverseas.com"),
  title: {
    default: "JV Overseas Pvt Ltd | Premier Overseas Education & Loan Consultancy",
    template: "%s | JV Overseas"
  },
  description: "Your trusted partner for global education. Expert guidance for admissions and education loans across USA, UK, Canada, Australia and more.",
  keywords: ["study abroad", "overseas education", "education loan", "visa assistance", "university admission", "JV Overseas"],
  authors: [{ name: "JV Overseas team" }],
  creator: "JV Overseas",
  publisher: "JV Overseas Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.webp",
    apple: "/icon.webp",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JV Overseas Pvt Ltd | Premier Overseas Education & Loan Consultancy",
    description: "Your trusted partner for global education. Expert guidance for admissions and education loans across USA, UK, Canada, Australia and more.",
    url: "https://www.jvoverseas.com",
    siteName: "JV Overseas",
    images: [
      {
        url: "/icon.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JV Overseas Pvt Ltd | Premier Overseas Education & Loan Consultancy",
    description: "Expert guidance for admissions and education loans across USA, UK, Canada, Australia and more.",
    images: ["/icon.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "provide-your-google-verification-code-here", // User can replace this later
  },
};

import ChatWidget from "../components/ChatWidget";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JV Overseas Pvt Ltd",
              "url": "https://www.jvoverseas.com",
              "logo": "https://www.jvoverseas.com/icon.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX", // Should be replaced with actual number
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/jvoverseas",
                "https://www.instagram.com/jvoverseas",
                "https://www.linkedin.com/company/jvoverseas"
              ]
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingButtons />
        <EligibilityButton />
        <ChatWidget />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
