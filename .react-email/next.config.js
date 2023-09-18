/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname:
          '/djbcnjkin/image/upload/v1695030251/mqmasrrhqj5ug8bg3hmz.png',
      },
    ],
  },
  experimental: {
    appDir: true,
    externalDir: true, // compile files that are located next to the .react-email directory
  },
};

module.exports = nextConfig;
