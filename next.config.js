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
