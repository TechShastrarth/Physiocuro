import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Physiocuro – Trusted Physiotherapy Clinic in Dombivli",
  description:
    "Meet the team behind Physiocuro. We combine clinical expertise and compassion to provide holistic physiotherapy solutions in Dombivli East. ",
  keywords: [
    "About Physiocuro",
    "best physio team Dombivli",
    "physiotherapy clinic",
    "physical therapy care",
    "orthopedic physio Mumbai",
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
    title: "About Physiocuro – Trusted Physiotherapy Clinic in Dombivli",
    description: "Meet the team behind Physiocuro. We combine clinical expertise and compassion to provide holistic physiotherapy solutions in Dombivli East.",
    url: "https://physiocuro.com/about-us",
    siteName: "Physiocuro",
    type: "website",
    images: [
      {
        url: "/Logo-with-bg.png",
        width: 1200,
        height: 630,
        alt: "Physiocuro - About Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Physiocuro – Trusted Physiotherapy Clinic in Dombivli",
    description: "Meet the team behind Physiocuro. We combine clinical expertise and compassion to provide holistic physiotherapy solutions in Dombivli East.",
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

export default function AboutUsLayout({
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
