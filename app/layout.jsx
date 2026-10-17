import "./globals.css";

export const metadata = {
  title: "Nyxra | Websites, Lead Systems & AI Automation for Small Businesses",
  description: "Nyxra builds professional websites, lead-capture systems, appointment workflows and simple AI-powered automations that help small businesses grow.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png?v=2", sizes: "48x48", type: "image/png" }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script src="/tailwind.config.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('nyxra-theme');
                  if (saved) {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="bg-background text-foreground selection:bg-brand selection:text-foreground antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
