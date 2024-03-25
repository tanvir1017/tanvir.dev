import { getAllPostsMeta } from "@/lib/utils/mdx/mdxUtils";
import { BlogContentProps } from "@/ts/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = async () => {
  const blogContentData = (await getAllPostsMeta()) as BlogContentProps[];

  return (
    <div className="App">
      <div className="container">
        {blogContentData.map((blog) => {
          return (
            <div key={blog.slug}>
              <h1> {blog.title}</h1>

              <Image
                src={blog.bannerUrl}
                alt={blog.title}
                height={100}
                width={350}
              />
              <Link href={`blogs/${blog.slug}`} className="underline">
                Read More...
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
