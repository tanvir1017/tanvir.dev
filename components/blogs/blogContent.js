import { MDXRemote } from "next-mdx-remote";

const components = {};
export default function BlogContent({ mdxSource }) {
  return (
    <div>
      <MDXRemote components={components} {...mdxSource} />
    </div>
  );
}
