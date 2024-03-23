const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  images: {
    domains: ["res.cloudinary.com"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Add 'mdx' to the list of extensions
  // Other Next.js configuration options...
});

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
