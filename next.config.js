const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true, // required for static export (next export)
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Add 'mdx' to the list of extensions
  // Other Next.js configuration options...
});
