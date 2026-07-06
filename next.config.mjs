/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport ? true : undefined,
  assetPrefix: isStaticExport ? "./" : undefined,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
