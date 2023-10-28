/* eslint-disable @next/next/no-img-element */
import BlogsCard from "./blogs-slug";
export default function BlogSection({ blogs }) {
  return (
    <div className="px-3">
      <div className="pt-8 dark:text-white text-[#121212] max-w-lg">
        <h2 className=" uppercase text-3xl mb-5 font-bold">Latest blogs</h2>
        <p>
          I write about web development, design and productivity. I also share
          my thoughts on life in general!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-14 mt-10 ">
        {blogs
          .filter((blog) => blog.frontmatter.status !== "draft")
          .map((blog, index) => {
            return <BlogsCard key={index} blog={blog} />;
          })}
      </div>
    </div>
  );
}
