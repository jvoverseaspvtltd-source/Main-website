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
  title: "JV Overseas Pvt Ltd | Premier Overseas Education & Loan Consultancy",
  description: "Your trusted partner for global education. Expert guidance for admissions and education loans across USA, UK, Canada, Australia and more.",
  icons: {
    icon: "/icon.webp",
    apple: "/icon.webp",
  },
  robots: "index, follow",
};

import ChatWidget from "../components/ChatWidget";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
