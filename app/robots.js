export const dynamic = "force-static";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/thank-you" },
    sitemap: "https://nyxra.online/sitemap.xml",
  };
}
