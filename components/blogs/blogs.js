/* eslint-disable @next/next/no-img-element */
import { motion as m } from "framer-motion";
import Link from "next/link";

function BlogsPage() {
  return (
    <>
      <div className={` lg:large_container m_container  font-jostRegular`}>
        <m.div
          className="grid place-items-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-jostBold uppercase text-4xl">Latest blog</h1>
          <p className="">
            <span className={` text-green-700 font-jostSemiBold`}>MY</span>{" "}
            <span className={`font-caveatMedium`}>Articles & Advices</span>{" "}
          </p>
        </m.div>

        <div className="grid place-items-center">
          <button className="hover:bg-white/5 hover:backdrop-blur-lg border px-12 py-3 rounded-3xl">
            <Link href="/blogs">View more...</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogsPage;
