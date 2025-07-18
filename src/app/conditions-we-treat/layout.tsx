import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions We Treat – Physiocuro Physiotherapy Dombivli ",
  description:
    "From back pain to stroke recovery, explore the range of conditions we treat at Physiocuro Dombivli. Effective therapy starts with personalized care. ",
  keywords: [
    "Conditions treated physiotherapy",
    "back pain",
    " neck pain",
    "sports injury",
    "frozen shoulder",
    "stroke rehab",
    "women’s health physiotherapy",
    "Physiocuro Dombivli",
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
    title: "Conditions We Treat – Physiocuro Physiotherapy Dombivli",
    description: "From back pain to stroke recovery, explore the range of conditions we treat at Physiocuro Dombivli. Effective therapy starts with personalized care.",
    url: "https://physiocuro.com/conditions-we-treat",
    siteName: "Physiocuro",
    type: "website",
    images: [
      {
        url: "/Logo-with-bg.png",
        width: 1200,
        height: 630,
        alt: "Physiocuro - Conditions We Treat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions We Treat – Physiocuro Physiotherapy Dombivli",
    description: "From back pain to stroke recovery, explore the range of conditions we treat at Physiocuro Dombivli. Effective therapy starts with personalized care.",
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

export default function ConditionsWeTreatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
