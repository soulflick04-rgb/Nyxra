import "./globals.css";

export const metadata = {
  title: "Nyxra | Websites, Lead Systems & AI Automation for Small Businesses",
  description: "Nyxra builds professional websites, lead-capture systems, appointment workflows and simple AI-powered automations that help small businesses grow.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300..900;1,300..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Great+Vibes&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script src="/tailwind.config.js"></script>
      </head>
      <body className="bg-surface text-on-surface font-body-md antialiased selection:bg-secondary-container selection:text-on-secondary-container overflow-x-hidden">
        <div className="texture-overlay"></div>
        {children}
      </body>
    </html>
  );
}
