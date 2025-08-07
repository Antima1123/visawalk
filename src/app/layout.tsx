import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PopupFormWrapper } from "@/components/common/popup-form-wrapper";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VisaWalk - Your Trusted Visa Application Partner",
  description: "Professional visa services for Canada, Australia, UK, and Germany. Fast, reliable, and expert guidance for all your visa needs.",
  keywords: ["visa", "immigration", "canada", "australia", "uk", "germany", "visa application"],
  authors: [{ name: "VisaWalk" }],
  creator: "VisaWalk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visawalk.com",
    title: "VisaWalk - Your Trusted Visa Application Partner",
    description: "Professional visa services for Canada, Australia, UK, and Germany. Fast, reliable, and expert guidance for all your visa needs.",
    siteName: "VisaWalk",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisaWalk - Your Trusted Visa Application Partner",
    description: "Professional visa services for Canada, Australia, UK, and Germany. Fast, reliable, and expert guidance for all your visa needs.",
    creator: "@visawalk",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <PopupFormWrapper />
        <Toaster />
      </body>
    </html>
  );
}
