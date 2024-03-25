// const withMDX = require("@next/mdx")({
//   extension: /\.mdx$/,
// });
import remarkGfm from "remark-gfm";
import createMdx from "@next/mdx";

/** @type {import('next').nextConfig}  */

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Add 'mdx' to the list of extensions

  experimental: {
    mdxRs: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

const withMdx = createMdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMdx(nextConfig);
