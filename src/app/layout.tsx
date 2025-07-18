import type { Metadata } from "next";
import { Rajdhani, Gemunu_Libre, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import FontAwesome from "@/components/FontAwesome";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const gemunuLibre = Gemunu_Libre({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-gemunu",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://physiocuro.com"),
  title: "Physiocuro – Advanced Physiotherapy Clinic in Dombivli East",
  description:
    "Discover personalized physiotherapy care at Physiocuro, Dombivli East. We specialize in orthopedic rehab, post-surgical recovery, and chronic pain relief.",
  keywords: [
    "Physiotherapy Dombivli East",
    "back pain therapy",
    "orthopedic physiotherapy",
    "sports injury rehab",
    "manual therapy clinic",
    "Physiocuro",
  ],
  authors: [{ name: "Physiocuro" }],
  creator: "Physiocuro",
  publisher: "Physiocuro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: [
      { url: "/physiocuro.svg", type: "image/svg+xml" },
      { url: "/Logo-with-bg.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/physiocuro.svg",
    apple: "/Logo-with-bg.png",
  },
  openGraph: {
    title: "Physiocuro – Advanced Physiotherapy Clinic in Dombivli East",
    description:
      "Discover personalized physiotherapy care at Physiocuro, Dombivli East. We specialize in orthopedic rehab, post-surgical recovery, and chronic pain relief.",
    url: "https://physiocuro.com",
    siteName: "Physiocuro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Logo-with-bg.png",
        width: 1200,
        height: 630,
        alt: "Physiocuro - Advanced Physiotherapy Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiocuro – Advanced Physiotherapy Clinic in Dombivli East",
    description:
      "Discover personalized physiotherapy care at Physiocuro, Dombivli East. We specialize in orthopedic rehab, post-surgical recovery, and chronic pain relief.",
    images: ["/Logo-with-bg.png"],
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
    <html
      lang="en"
      className={`${rajdhani.variable} ${gemunuLibre.variable} ${sourceSans.variable}`}
    >
      <body
        className={`${rajdhani.className} ${gemunuLibre.variable} ${sourceSans.variable} antialiased font-rajdhani`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SV53V30DBY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SV53V30DBY');
          `}
        </Script>

        <FontAwesome />
        {children}
      </body>
    </html>
  );
}
