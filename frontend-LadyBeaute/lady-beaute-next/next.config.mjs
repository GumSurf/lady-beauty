/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimisation des images (local + Strapi)
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ton-strapi.com", // 🔥 remplace par ton domaine Strapi
        pathname: "/uploads/**",
      },
    ],
  },

  // Build moderne uniquement
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Cible uniquement navigateurs modernes
  future: {
    webpack5: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    esmExternals: true,
    modern: true,
  },
};

export default nextConfig;
