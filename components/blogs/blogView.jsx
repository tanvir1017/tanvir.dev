import Meta from "components/meta/meta";
import Image from "next/legacy/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import RemoteMdx from "./remote-mdx";

export default function BlogView({ mdxSource, frontmatter }) {
  const singleMetaTagForBlog = {
    title: frontmatter.title,
    name: frontmatter.title,
    content: frontmatter.description,
    // keywords:frontmatter.tags.map(item => )
  };
  return (
    <div>
      <Meta metaTag={singleMetaTagForBlog} />
      <div className="prose prose-2xl dark:prose-invert prose-pre:bg-[#282C34]  mt-8 max-w-4xl mx-auto">
        <div className="mb-16">
          <Link href="/blogs" className="no-underline">
            <button className="px-8 py-1 rounded-md  mb-5 flex items-center">
              <BiArrowBack className="text-base mr-2" />
              <span className="font-firaSansExtraLight text-base">
                Back to overview
              </span>
            </button>
          </Link>
        </div>

        <div className="relative w-full lg:h-[28rem] md:h-[25rem] sm:h-[23rem] h-[15rem]  overflow-hidden">
          <Image
            className="absolute rounded-lg"
            src={frontmatter.bannerUrl}
            alt={frontmatter.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-8">
          <p>{frontmatter.description}</p>
        </div>

        <RemoteMdx mdxSource={mdxSource} />
      </div>
    </div>
  );
}
