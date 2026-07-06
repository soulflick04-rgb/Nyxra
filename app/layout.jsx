import "./globals.css";

export const metadata = {
  title: "Nyxra | Websites That Grow Local Businesses",
  description:
    "Nyxra builds modern, fast, and professional websites for local businesses that need trust, visibility, and growth online.",
  keywords: [
    "Nyxra",
    "website development",
    "local business websites",
    "landing pages",
    "digital agency",
    "Rishi Srivastav"
  ],
  authors: [{ name: "Rishi Srivastav" }],
  creator: "Nyxra",
  openGraph: {
    title: "Nyxra | Websites That Grow Local Businesses",
    description:
      "Premium website design and digital presence setup for local businesses.",
    siteName: "Nyxra",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyxra | Websites That Grow Local Businesses",
    description:
      "Modern, fast, and professional websites for local business growth."
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001F3F"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
