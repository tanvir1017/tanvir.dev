import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import BlogContent from "./blogContent";

export default function BlogView({ mdxSource, frontmatter }) {
  return (
    <div>
      <div>
        <Link
          className="flex bg-gray-800 w-24 h-[35px] items-center p-2 rounded-lg"
          href="/blogs"
        >
          <BiArrowBack />
          <span className="mx-3">Back</span>
        </Link>

        <div>
          <Image
            src={frontmatter.bannerUrl}
            alt={frontmatter.title}
            width={500}
            height={100}
          />
        </div>
        <div>
          <p>{frontmatter.description}</p>
        </div>
      </div>

      <BlogContent mdxSource={mdxSource} />
    </div>
  );
}
