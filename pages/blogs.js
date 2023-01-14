/* eslint-disable @next/next/no-img-element */
import BlogList from "components/blogs/blogList";
import { motion as m } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { blogsFileNames, blogsPath } from "utils/mdx/mdxUtils";
import { blogLocData, metaTagBlog } from "../components/localData/localData";

import Meta from "../components/meta/meta";

export default function Blogs({ blogs }) {
  const allTagSet = blogs.reduce((acc, blog) => {
    blog.frontmatter.tags?.map((tag) => acc.add(tag));
    return acc;
  }, new Set([]));

  return (
    <>
      <Meta metaTag={metaTagBlog} />
      <m.div
        className={` lg:large_container m_container  font-jostRegular`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid place-items-center">
          <h1 className="font-jostBold uppercase text-4xl">Latest blog</h1>
          <p className="">
            <span className={` text-green-700 font-jostSemiBold`}>MY</span>{" "}
            <span className={`font-caveatMedium`}>Articles & Advices</span>{" "}
          </p>
        </div>

        <m.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 lg:mx-[135px] "
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
        >
          {blogLocData.map((blogs, index) => {
            return (
              <m.div
                key={index}
                className={`rounded-2xl p-5 space-y-5 bg-white/5 backdrop:filter(16px)`}
              >
                <h6 className="uppercase font-medium">{blogs.time}</h6>
                <h4 className="text-2xl font-semibold">{blogs.title}</h4>
                <p>{blogs.desc}</p>
                <span className="font-semibold block">Reade more...</span>

                <div>
                  <img
                    className="m-auto transition duration-500 rounded-3xl w-[100%] h-[180px] object-cover"
                    src={blogs.thumb}
                    alt={blogs.title}
                  />
                </div>
              </m.div>
            );
          })}
        </m.div>
        <BlogList blogs={blogs} />
      </m.div>
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
