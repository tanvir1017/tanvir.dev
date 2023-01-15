import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import BlogContent from "./blogContent";

export default function BlogView({ mdxSource, frontmatter }) {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="prose prose-xl dark:prose-invert dark:prose-pre:bg-[#282C34]  mt-8 mx-auto">
      <m.button
        variants={childVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-28 h-[38px] px-2 rounded-lg backdrop-blur-0 bg-white/5 border-t-[#ff008c] border border-b-white/5 border-r-[#ff008c] border-l-white/5"
      >
        <Link
          href="/blogs"
          className="flex items-center"
          style={{ textDecoration: "none" }}
        >
          <BiArrowBack />
          <span className="mx-3">Back</span>
        </Link>
      </m.button>

      <div className="relative w-full lg:h-[28rem] md:h-[25rem] sm:h-[23rem] h-[15rem]  overflow-hidden">
        <Image
          className="absolute"
          src={frontmatter.bannerUrl}
          alt={frontmatter.title}
          fill
        />
      </div>
      <div className="mt-8">
        <p>{frontmatter.description}</p>
      </div>

      <BlogContent mdxSource={mdxSource} />
    </div>
  );
}
