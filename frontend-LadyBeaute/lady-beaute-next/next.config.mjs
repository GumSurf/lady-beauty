/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimisation des images (local + Strapi)
  images: {
    formats: ["image/avif", "image/webp"], // Next générera AVIF/WebP automatiquement
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ton-strapi.com", // 🔥 mets le domaine de ton Strapi
        pathname: "/uploads/**",
      },
    ],
  },

  // Build moderne uniquement (pas de legacy)
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // nettoie les console.log
  },

  // Expérimental (utile pour CSS + perf)
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
