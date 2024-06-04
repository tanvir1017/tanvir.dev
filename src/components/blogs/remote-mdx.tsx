import { MDXRemote } from "next-mdx-remote";

const components = {};
export default function RemoteMdx({ mdxSource }: any) {
  return <MDXRemote components={components} {...mdxSource} />;
}
