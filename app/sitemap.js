export const dynamic = "force-static";
export default function sitemap() {
  return [
    "",
    "/services",
    "/pricing",
    "/portfolio",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({ url: `https://nyxra.online${route}` }));
}
