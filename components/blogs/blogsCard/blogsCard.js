/* eslint-disable @next/next/no-img-element */
import { motion as m } from "framer-motion";
import Blogs from "./blogs";
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
          return <Blogs key={index} blog={blog} />;
        })}
      </m.div>
    </>
  );
}
