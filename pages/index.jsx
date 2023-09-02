import HomePage from "components/home/main-page/home";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { blogsFileNames, blogsPath } from "utils/mdx/mdxUtils";
import { metaTagHome } from "../components/localData/localData";
import Meta from "../components/meta/meta";

export default function Home({ blogs }) {
  return (
    <main className="font-firaSansRegular">
      <Meta metaTag={metaTagHome} />
      <HomePage blogs={blogs} />
    </main>
  );
}

export async function getStaticProps() {
  const blogs = blogsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(blogsPath, slug));
    const { data } = matter(content);

    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    };
  });
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
}
