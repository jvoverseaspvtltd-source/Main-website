import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import EligibilityButton from "../components/common/EligibilityButton";
import FloatingButtons from "../components/home/FloatingButtons";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ChatWidget from "../components/ChatWidget";

// FORCE STATIC RENDERING for the entire layout subtree
export const dynamic = "force-static";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// SEO METADATA
export const metadata = {
  metadataBase: new URL("https://www.jvoverseas.com"),
  title: {
    default: "JV Overseas Pvt Ltd | Premier Overseas Education & Loan Consultancy",
    template: "%s | JV Overseas"
  },
  description: "Your trusted partner for global education. Expert guidance for admissions and education loans across USA, UK, Canada, Australia and more.",
  keywords: ["study abroad", "overseas education", "education loan", "visa assistance", "university admission", "JV Overseas"],
  authors: [{ name: "JV Overseas Team" }],
  creator: "JV Overseas",
  publisher: "JV Overseas Pvt Ltd",
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
  alternates: {
    canonical: './', // Resolves to absolute URL via metadataBase
  },
  icons: {
    icon: "/icon.webp",
    apple: "/icon.webp",
  },
  openGraph: {
    title: "JV Overseas Pvt Ltd | Premier Overseas Education & Loan Consultancy",
    description: "Your trusted partner for global education. Expert guidance for admissions and education loans across USA, UK, Canada, Australia and more.",
    url: "https://www.jvoverseas.com",
    siteName: "JV Overseas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.webp",
        width: 800,
        height: 600,
        alt: "JV Overseas Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JV Overseas Pvt Ltd",
    description: "Premier Overseas Education & Loan Consultancy",
    images: ["/icon.webp"],
  },
  verification: {
    // google: "verification_code", // Add if available
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JV Overseas Pvt Ltd",
    "url": "https://www.jvoverseas.com",
    "logo": "https://www.jvoverseas.com/icon.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210", // Update with actual number if possible
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/jvoverseas",
      "https://www.instagram.com/jvoverseas",
      "https://www.linkedin.com/company/jvoverseas"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
