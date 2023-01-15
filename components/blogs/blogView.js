import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import BlogContent from "./blogContent";

export default function BlogView({ mdxSource, frontmatter }) {
  return (
    <div className="prose prose-xl dark:prose-invert dark:prose-pre:bg-[#282C34]  mt-8 mx-auto">
      <Link
        className="flex bg-[#282C34] w-24 h-[35px] items-center p-2 rounded-lg"
        href="/blogs"
        style={{ textDecoration: "none" }}
      >
        <BiArrowBack />
        <span className="mx-3">Back</span>
      </Link>
      <div className="relative w-full h-[22rem] overflow-hidden">
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
