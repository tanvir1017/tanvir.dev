/** @type {import('next').NextConfig} */
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://tanvirhossain.vercel.app"
    : "http://localhost:3000";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth",
        destination: apiUrl,
      },
      {
        source: "/users",
        destination: apiUrl,
      },
    ];
  },
  httpAgentOptions: {
    keepAlive: 15000,
  },
  reactStrictMode: true,
  images: { domains: ["res.cloudinary.com"] },
};

module.exports = nextConfig;
