// @ts-nocheck
import { MDXRemote } from "next-mdx-remote";

const components = {};
export default function RemoteMdx({ mdxSource }) {
  return <MDXRemote components={components} {...mdxSource} />;
}
