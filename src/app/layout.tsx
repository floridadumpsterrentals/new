import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getOrganizationSchema, getWebsiteSchema, SITE_URL } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Florida Dumpster Rentals | 10, 20 & 30 Yard Roll-Off Dumpsters",
    template: "%s | Florida Dumpster Rentals",
  },
  description:
    "Affordable dumpster rental across Florida. 10, 20 & 30 yard roll-off containers for construction, junk removal, home cleanouts & more. Same-day delivery available. Call 954-710-2332.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Florida Dumpster Rentals",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Dumpster Rentals | Roll-Off Dumpster Rental",
    description:
      "10, 20 & 30 yard roll-off dumpsters across Florida. Contractors, junk removal, home cleanouts, corporate accounts & more. Same-day delivery available.",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
