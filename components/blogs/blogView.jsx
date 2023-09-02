import { useReducedMotion } from "framer-motion";
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
      <button className="px-8 py-1 rounded-md  dark:bg-[#22222292] backdrop-blur-0 bg-slate-100">
        <Link href="/blogs" className="flex items-center no-underline">
          <BiArrowBack className="text-base mr-2" />
          <span className="font-firaSansLightItalic ">Back</span>
        </Link>
      </button>

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