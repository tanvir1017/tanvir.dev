// const withMDX = require("@next/mdx")({
//   extension: /\.mdx$/,
// });
// import remarkGfm from "remark-gfm";
// import createMdx from "@next/mdx";

/** @type {import('next').nextConfig}  */

// const nextConfig = {
//   images: {
//     domains: ["res.cloudinary.com", "assets.aceternity.com"],
//   },

//   pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Add 'mdx' to the list of extensions

//   experimental: {
//     mdxRs: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// const withMdx = createMdx({
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//   },
// });

// export default withMdx(nextConfig);

import nextMdx from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = nextMdx({
  extension: /\.mdx?$/, // Handle both .md and .mdx files if needed
  options: {
    remarkPlugins: [remarkGfm], // Use GitHub Flavored Markdown
    rehypePlugins: [],
  },
});

const nextConfig = {
  // output: "export", // Configure for static HTML export
  images: {
    unoptimized: true,
    // domains: ["res.cloudinary.com", "assets.aceternity.com"], // Specify allowed image domains
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Include MDX as a page extension
  experimental: {
    mdxRs: true, // Assuming this is a desired experimental feature
  },
  typescript: {
    ignoreBuildErrors: false, // Consider setting to false to catch important issues
  },
};

export default withMDX(nextConfig);
