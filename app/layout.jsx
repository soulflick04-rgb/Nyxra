import "./globals.css";
import "./modern.css";
export const metadata = {
  metadataBase: new URL("https://nyxra.online"),
  title: "Nyxra | Thoughtful websites for local businesses",
  description:
    "Distinctive, responsive websites for clinics, gyms, coaching centres and local businesses. Clear scope, practical enquiry tools and thoughtful design.",
  openGraph: {
    title: "Nyxra | Built around your business",
    description: "Thoughtful websites for local businesses.",
    url: "https://nyxra.online",
    siteName: "Nyxra",
    type: "website",
  },
  icons: { icon: "/nyxra-mark.svg", apple: "/apple-touch-icon.png?v=violet" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
