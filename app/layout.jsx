import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nyxra.online";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nyxra | Websites, Lead Systems & AI Automation for Small Businesses",
  description:
    "Nyxra builds professional websites, lead-capture systems, appointment workflows and simple AI-powered automations for small businesses.",
  keywords: [
    "Nyxra",
    "AI automation studio",
    "lead capture systems",
    "small business websites",
    "appointment workflows",
    "CRM setup",
    "business automation",
    "digital agency",
    "Rishi Srivastav"
  ],
  authors: [{ name: "Rishi Srivastav" }],
  creator: "Nyxra",
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" }
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }
  },
  openGraph: {
    title: "Nyxra | Websites, Lead Systems & AI Automation for Small Businesses",
    description:
      "Websites, lead systems and simple automations that help small businesses grow.",
    url: siteUrl,
    siteName: "Nyxra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Nyxra logo"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyxra | Websites, Lead Systems & AI Automation",
    description:
      "Professional websites, lead-capture systems and simple AI-powered automations for small businesses.",
    images: ["/logo.png"]
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001F3F"
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nyxra",
    url: siteUrl,
    email: "supportnyxra@gmail.com",
    founder: {
      "@type": "Person",
      name: "Rishi Srivastav"
    },
    description:
      "Nyxra builds websites, lead systems and simple automations for growing businesses.",
    areaServed: "India",
    serviceType: [
      "Website development",
      "Lead capture systems",
      "CRM setup",
      "Appointment workflows",
      "AI content starter systems"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
