"use client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { formatShortDate } from "@/lib/utils/timeFormatter/timeFormatter";
import { BlogContentProps } from "@/ts/type";
import { useMemo } from "react";

const HomePageBlogSection = ({ blogs }: { blogs: BlogContentProps[] }) => {
  const latestBlogs = useMemo(() => {
    return blogs
      .filter((item) => item.status !== "draft")
      .slice(-3)
      .reverse();
  }, []);
  return (
    <section className="max-w-6xl mx-auto md:mt-40 mt-12 md:px-0 px-3">
      <div className="md:flex items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="md:text-4xl text-2xl dark:text-white text-gray-600 mb-4 tracking-wider uppercase md:block hidden font-HubotSansBlack">
            Latest Blogs & Topics
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="md:text-4xl text-2xl  dark:text-white text-gray-600  tracking-wider uppercase block md:hidden">
                Articles
              </h2>
            </div>
            <div className="md:hidden block">
              <Link href="/blogs" className="flex items-center">
                All blogs{" "}
                <FaLongArrowAltRight className="w-4 h-4 text-gray-400 ml-2" />
              </Link>
            </div>
          </div>
          <p className="md:block hidden">
            I love to upgrade myself from the previous one by learning. In those
            articles, I shared my thoughts, and perspectives about tech and
            programming fundamentals in very simple way
          </p>
        </div>
        <div className=" md:block hidden">
          <Link href="/blogs">
            <button className="border border-slate-300 hover:bg-slate-100 rounded-md py-2.5 px-5 text-black dark:text-white dark:hover:text-black jostLight ">
              View all blogs{" "}
              <FaLongArrowAltRight className="w-4 h-4 text-gray-400  inline-flex " />
            </button>
          </Link>
        </div>
      </div>
      <div className="md:mt-36 mt-10 grid md:grid-cols-3 place-items-center">
        <div className="col-span-2 relative">
          {latestBlogs.map((item, i) => (
            <Link href={`blogs/${item?.slug}`} key={i}>
              <div className="shadow-md cursor-pointer px-5 py-6 dark:border-gray-600 border my-3 rounded-lg relative">
                <h5 className=" text-xl jostSemiBold">{item.title}</h5>
                <p className="mb-5 mt-2">{formatShortDate(item.publishedAt)}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="rotate-90 md:block hidden">
          <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark hover:stroke-text-light-gradient dark:hover:stroke-text-dark-gradient hover:opacity-100 md:text-9xl text-2xl uppercase poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a] font-HubotSansBlack">
            articles
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogSection;
