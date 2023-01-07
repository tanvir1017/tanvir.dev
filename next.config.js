/** @type {import('next').NextConfig} */
const nextConfig = {
  httpAgentOptions: {
    keepAlive: 15000,
  },
  reactStrictMode: true,
  images: { domains: ["res.cloudinary.com"] },
};

module.exports = nextConfig;
