import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
const data = [
  {
    name: "Build-Time Syntax Highlighting: Zero Client-Side JS, Support for 100+ Languages and Any VSCode Theme",
    desc: "Leverage VS Code's ecosystem to generate highly accurate syntax highlighting at build time. With zero performance cost and access to the entire VS Code theme catalog.",
  },
  {
    name: "Open Graph Images: Automatically Generate OG Images From Post Content",
    desc: "Use Cloudinary's generous free tier and flexible API to automatically generate a branded OG image for your blog posts.",
  },
  {
    name: "Integrate MDX with a single tool and less boilerplate. Manage content with type-safe data and helper functions.",
    desc: "Effortlessly integrate MDX and manage content effectively. Validate and transform markdown posts into type-safe data your app can import.",
  },
];
const Blog = () => {
  return (
    <section className="container max-w-6xl mx-auto  mt-40">
      <div className="flex items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="md:text-4xl text-2xl font-FiraSansBold dark:text-white text-gray-600 mb-4 tracking-wider uppercase">
            Latest Blogs & Topics
          </h2>
          <p className="">
            I love to upgrade myself from the previous one by learning. In those
            articles, I shared my thoughts, and perspectives about tech and
            programming fundamentals in very simple way
          </p>
        </div>
        <div>
          <Link href="/blogs">
            <button className="border border-slate-300 hover:bg-slate-100 rounded-md py-2.5 px-5 text-black dark:text-white dark:hover:text-black font-jostLight ">
              View all blogs{" "}
              <FaLongArrowAltRight className="w-4 h-4 text-gray-400  inline-flex " />
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-36 grid md:grid-cols-3 place-items-center">
        <div className="col-span-2 relative">
          {data.map((item, i) => (
            <div
              key={i}
              className="shadow-md cursor-pointer px-5 py-6 dark:border-gray-600 border my-3 rounded-lg relative"
            >
              <h5 className=" text-xl font-jostSemiBold">{item.name}</h5>
              <p className="mb-5 mt-2">Jul 18 · 13,526 views</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="-rotate-90">
          <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark hover:stroke-text-light-gradient dark:hover:stroke-text-dark-gradient hover:opacity-100 md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a]">
            LATEST BLOGS
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Blog;
