import BlogView from "components/blogs/blogView";
import fs from "fs";
import matter from "gray-matter";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import { blogsFileNames, blogsPath } from "utils/mdx/mdxUtils";

export default function SingleBlog({ mdxSource, frontmatter }) {
  return (
    <div className="large_container">
      <BlogView mdxSource={mdxSource} frontmatter={frontmatter} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(blogsPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return {
    props: {
      mdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      slug,
    },
  };
}
export async function getStaticPaths() {
  const blogPaths = blogsFileNames.map((slug) => {
    return {
      params: {
        slug: slug.replace(/\.mdx?$/, ""),
      },
    };
  });
  return {
    paths: blogPaths,
    fallback: false,
  };
}
