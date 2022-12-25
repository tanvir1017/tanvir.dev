/* eslint-disable @next/next/no-img-element */
import { motion as m } from "framer-motion";
import { blogLocData, metaTagBlog } from "../components/localData/localData";
import Meta from "../components/meta/meta";

function Blogs() {
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
      </m.div>
    </>
  );
}

export default Blogs;
