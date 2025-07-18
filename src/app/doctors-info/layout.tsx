import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Physiotherapists at Physiocuro Dombivli",
  description:
    "Our licensed physiotherapists bring years of experience in treating orthopedic, neurological, and post-operative conditions with a patient-first approach. ",
  keywords: [
    "Physiotherapists Dombivli East",
    "expert physio team",
    "orthopedic specialists",
    "manual therapy experts",
    "Physiocuro doctors",
  ],
  authors: [{ name: "Physiocuro Medical Team" }],
  creator: "Physiocuro",
  publisher: "Physiocuro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://physiocuro.com/doctors-info",
  },
  other: {
    "article:section": "Medical Team",
    "article:tag":
      "Physiotherapy, Healthcare, Medical Team, Doctors, Specialists",
    "medical:specialty": "Physical Medicine and Rehabilitation",
    "medical:condition":
      "Musculoskeletal Disorders, Pain Management, Neurological Rehabilitation",
  },
  openGraph: {
    title: "Physiotherapists at Physiocuro Dombivli",
    description: "Our licensed physiotherapists bring years of experience in treating orthopedic, neurological, and post-operative conditions with a patient-first approach.",
    url: "https://physiocuro.com/doctors-info",
    siteName: "Physiocuro",
    type: "website",
    images: [
      {
        url: "/Logo-with-bg.png",
        width: 1200,
        height: 630,
        alt: "Physiocuro - Our Expert Medical Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapists at Physiocuro Dombivli",
    description: "Our licensed physiotherapists bring years of experience in treating orthopedic, neurological, and post-operative conditions with a patient-first approach.",
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

// JSON-LD structured data for Doctors page
// const jsonLd = {
//   '@context': 'https://schema.org',
//   '@type': 'MedicalOrganization',
//   name: 'Physiocuro Medical Team',
//   description: 'Expert team of physiotherapists and healthcare professionals providing comprehensive rehabilitation services',
//   url: 'https://physiocuro.com/doctors-info',
//   logo: 'https://physiocuro.com/horizontal logo.png',
//   medicalSpecialty: [
//     'Physical Medicine and Rehabilitation',
//     'Orthopedic Physical Therapy',
//     'Neurological Rehabilitation',
//     'Sports Medicine',
//     'Pain Management',
//     'Pediatric Physical Therapy',
//     'Geriatric Physical Therapy',
//     'Manual Therapy',
//     'Therapeutic Exercise'
//   ],
//   hasCredential: [
//     {
//       '@type': 'EducationalOccupationalCredential',
//       credentialCategory: 'Professional License',
//       recognizedBy: {
//         '@type': 'Organization',
//         name: 'Indian Association of Physiotherapists'
//       }
//     }
//   ],
//   contactPoint: {
//     '@type': 'ContactPoint',
//     telephone: '+91-XXXXXXXXXX',
//     contactType: 'medical consultation',
//     availableLanguage: ['English', 'Hindi', 'Marathi'],
//     hoursAvailable: {
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//       opens: '09:00',
//       closes: '18:00'
//     }
//   },
//   address: [
//     {
//       '@type': 'PostalAddress',
//       streetAddress: 'PhysioCuro Physiotherapy & Rehabilitation Center',
//       addressLocality: 'Dombivli',
//       addressRegion: 'Maharashtra',
//       addressCountry: 'IN'
//     },
//     {
//       '@type': 'PostalAddress',
//       streetAddress: 'Pain Clinic Physiotherapy and Rehabilitation Center',
//       addressLocality: 'Karwar',
//       addressRegion: 'Karnataka',
//       addressCountry: 'IN'
//     },
//     {
//       '@type': 'PostalAddress',
//       streetAddress: 'Spine Clinic Physiotherapy, Neuro Development Center',
//       addressLocality: 'Majali',
//       addressRegion: 'Karnataka',
//       addressCountry: 'IN'
//     }
//   ],
//   physician: [
//     {
//       '@type': 'Physician',
//       name: 'Dr. Charmi Sanghvi',
//       jobTitle: 'Lead Physiotherapist',
//       medicalSpecialty: ['Physical Medicine and Rehabilitation', 'Orthopedic Physical Therapy'],
//       worksFor: {
//         '@type': 'MedicalOrganization',
//         name: 'Physiocuro'
//       },
//       alumniOf: {
//         '@type': 'EducationalOrganization',
//         name: 'Physiotherapy College'
//       }
//     }
//   ],
//   sameAs: [
//     'https://www.facebook.com/profile.php?id=61574930018004',
//     'https://www.instagram.com/physiocuro/',
//     'https://x.com/PhysioCuro'
//   ],
//   mainEntityOfPage: {
//     '@type': 'WebPage',
//     '@id': 'https://physiocuro.com/doctors-info'
//   }
// };

export default function DoctorsInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-rajdhani">
      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
