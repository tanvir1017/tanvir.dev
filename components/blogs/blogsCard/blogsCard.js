/* eslint-disable @next/next/no-img-element */
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TimeFormatter from "utils/timeFormatter/timeFormatter";
export default function BlogsCard({ blogs }) {
  return (
    <>
      <div className="pt-8">
        <h3 className="font-jostBold uppercase text-3xl">Latest blog</h3>
      </div>
      <m.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14  mt-10"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        {blogs.map((blog, index) => {
          return (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <m.div
                key={index}
                className={`rounded-2xl p-5 space-y-5 bg-white/5 backdrop:filter(16px)`}
              >
                <h6 className="uppercase font-medium">
                  {" "}
                  <TimeFormatter time={blog.frontmatter.date} />
                </h6>
                <h4 className="text-2xl font-semibold">
                  {blog.frontmatter.title}
                </h4>
                <p>{blog.frontmatter.description}</p>
                <span className="font-semibold block">Reade more...</span>

                <div className="relative w-[100%] h-[180px] ">
                  <Image
                    className="absolute m-auto transition duration-500 rounded-3xl"
                    fill
                    src={blog.frontmatter.bannerUrl}
                    alt={blog.title}
                  />
                </div>
              </m.div>
            </Link>
          );
        })}
      </m.div>
    </>
  );
}
