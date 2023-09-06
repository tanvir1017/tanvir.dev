import RemoteMdx from "components/blogs/remote-mdx";
import Meta from "components/meta/meta";
import fs from "fs";
import matter from "gray-matter";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import path from "path";
import { BiArrowBack } from "react-icons/bi";
import rehypeHighlight from "rehype-highlight";
import BlurImageWithBlurHash from "utils/blur-able-image/blur-hash";
import { projectShowCasePath, projectsFileNames } from "utils/mdx/mdxUtils";
import { formatShortDate } from "utils/timeFormatter/timeFormatter";

export default function ProjectSlug({ mdxSource, frontmatter }) {
  const projectMeta = {
    title: frontmatter.title,
    name: frontmatter.title,
    content: frontmatter.description,
  };
  return (
    <div className="font-firaSansRegular">
      <Meta metaTag={projectMeta} />
      <div className="prose md:prose-md prose-sm dark:prose-invert prose-pre:bg-[#282C34]  mt-8 max-w-4xl mx-auto overflow-hidden md:px-0 px-2">
        <div className="mb-8">
          <Link href="/projects" className="no-underline ">
            <button className="py-1 rounded-md  mb-5 flex items-center group/item">
              <BiArrowBack className="text-base mr-2 group-hover/item:-translate-x-0.5 duration-200 " />
              <span className="font-firaSansExtraLight text-base">
                Back to overview
              </span>
            </button>
          </Link>

          <h1 className="mb-2 md:text-4xl text-2xl tracking-wide font-firaSansMedium">
            {frontmatter.title}
          </h1>
          <p className="text-base">
            {formatShortDate(frontmatter.publishedAt)}
          </p>
        </div>
        <div className="relative lg:h-[28rem] md:h-[25rem] sm:h-[23rem] h-[15rem]  overflow-hidden mb-10 rounded-lg">
          <BlurImageWithBlurHash
            className="absolute "
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={frontmatter.blurHash}
          />
        </div>

        <RemoteMdx mdxSource={mdxSource} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(projectShowCasePath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return {
    props: {
      mdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      slug,
    },
  };
}
export async function getStaticPaths() {
  const projectPaths = projectsFileNames.map((slug) => {
    return {
      params: {
        slug: slug.replace(/\.mdx?$/, ""),
      },
    };
  });
  return {
    paths: projectPaths,
    fallback: false,
  };
}
