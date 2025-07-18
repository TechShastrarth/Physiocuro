import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - Physiocuro | Book Appointment | Dombivli East Clinic",
  description:
    "Contact Physiocuro for expert physiotherapy services in Dombivli East. Book your appointment today. Call +91 996 767 3260 or visit our clinic for personalized treatment.",
  keywords: [
    "contact Physiocuro",
    "book physiotherapy appointment",
    "Dombivli East clinic contact",
    "physiotherapy appointment booking",
    "Physiocuro phone number",
    "physiotherapy clinic address",
    "contact physiotherapist",
    "schedule physiotherapy session",
  ],
  authors: [{ name: "Physiocuro Team" }],
  creator: "Physiocuro",
  publisher: "Physiocuro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Contact Us - Physiocuro | Book Appointment | Dombivli East Clinic",
    description: "Contact Physiocuro for expert physiotherapy services in Dombivli East. Book your appointment today. Call +91 996 767 3260 or visit our clinic for personalized treatment.",
    url: "https://physiocuro.com/contact-us",
    siteName: "Physiocuro",
    type: "website",
    images: [
      {
        url: "/Logo-with-bg.png",
        width: 1200,
        height: 630,
        alt: "Physiocuro - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Physiocuro | Book Appointment | Dombivli East Clinic",
    description: "Contact Physiocuro for expert physiotherapy services in Dombivli East. Book your appointment today. Call +91 996 767 3260 or visit our clinic for personalized treatment.",
    images: ["/Logo-with-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-rajdhani">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main Content with top padding for fixed navbar */}
      <main className="min-h-screen pt-20">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
