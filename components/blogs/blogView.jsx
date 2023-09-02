import Meta from "components/meta/meta";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import BlurImageWithBlurHash from "utils/blur-able-image/blur-hash";
import { formatShortDate } from "utils/timeFormatter/timeFormatter";
import RemoteMdx from "./remote-mdx";

export default function BlogView({ mdxSource, frontmatter }) {
  const singleMetaTagForBlog = {
    title: frontmatter.title,
    name: frontmatter.title,
    content: frontmatter.description,
    // keywords:frontmatter.tags.map(item => )
  };
  return (
    <div className="font-firaSansRegular">
      <Meta metaTag={singleMetaTagForBlog} />
      <div className="prose prose-2xl dark:prose-invert prose-pre:bg-[#282C34]  mt-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blogs" className="no-underline ">
            <button className="px-8 py-1 rounded-md  mb-5 flex items-center group/item">
              <BiArrowBack className="text-base mr-2 group-hover/item:-translate-x-0.5 duration-200 " />
              <span className="font-firaSansExtraLight text-base">
                Back to overview
              </span>
            </button>
          </Link>

          <h1 className="mb-2 md:text-5xl text-2xl tracking-wider font-firaSansBold">
            {frontmatter.title}
          </h1>
          <p className="text-base">
            {formatShortDate(frontmatter.publishedAt)}
          </p>
        </div>
        <div className="relative w-full lg:h-[28rem] md:h-[25rem] sm:h-[23rem] h-[15rem]  overflow-hidden mb-10 rounded-lg">
          <BlurImageWithBlurHash
            className="absolute "
            src={frontmatter.bannerUrl}
            alt={frontmatter.title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={frontmatter.blurHash}
          />
          {/* <Image
            className="absolute rounded-lg"
            src={frontmatter.bannerUrl}
            alt={frontmatter.title}
            layout="fill"
            objectFit="cover"
          /> */}
        </div>

        <RemoteMdx mdxSource={mdxSource} />
      </div>
    </div>
  );
}
