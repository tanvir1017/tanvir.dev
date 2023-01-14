/** @type {import('next').NextConfig} */
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://tanvirhossain.vercel.app"
    : "http://localhost:3000";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/signup",
        destination: apiUrl,
      },
      {
        source: "/users",
        destination: apiUrl,
      },
    ];
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: { domains: ["res.cloudinary.com", "images.unsplash.com"] },
};

module.exports = nextConfig;
