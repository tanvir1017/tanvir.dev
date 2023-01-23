import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TimeFormatter from "utils/timeFormatter/timeFormatter";
export default function Blogs({ blog }) {
  return (
    <Link key={blog.slug} href={`/blog/${blog?.slug}`}>
      <m.div
        className={`rounded-2xl p-5 space-y-5 bg-white/5 backdrop:filter(16px)`}
      >
        <h6 className="uppercase font-medium">
          {" "}
          <TimeFormatter time={blog.frontmatter.date} />
        </h6>
        <h4 className="text-2xl font-semibold">{blog.frontmatter.title}</h4>
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
}
