import BlogFilter from "components/blogs/blogFilter/blogFilter";
import BlogsCard from "components/blogs/blogsCard/blogsCard";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { blogsFileNames, blogsPath } from "utils/mdx/mdxUtils";
import { metaTagBlog } from "../components/localData/localData";
import Meta from "../components/meta/meta";

export default function Blogs({ blogs }) {
  const allTagSet = blogs.reduce((acc, blog) => {
    blog.frontmatter.tags.map((tag) => acc.add(tag));
    return acc;
  }, new Set([]));

  const titles = blogs.map((blog) => blog.frontmatter.title);

  return (
    <>
      <Meta metaTag={metaTagBlog} />
      <div className={`container font-jostRegular`}>
        <div className="lg:mx-[135px] ">
          <div className="mb-12">
            <BlogFilter titles={titles} allTagSet={allTagSet} />
          </div>
          <BlogsCard blogs={blogs} />
        </div>
      </div>
    </>
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