import { ArrowUpRight, GithubIcon } from "lucide-react";
import Link from "next/link";
import BlurImageWithBlurHash from "@/lib/utils/blur-able-image/blur-hash";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    publishedAt,
    status,
    thumbnail,
    blurHash,
    preview,
    code,
    tech,
  } = project.frontmatter;
  return (
    <div className=" p-2 rounded-lg border dark:border-gray-600 border-slate-200 dark:bg-[#2927278a] bg-slate-50 shadow-md dark:shadow-none">
      <Link href={`/project/${project.slug}`}>
        <div
          className="md:h-[20.6875rem] h-[16.6875rem] w-full relative rounded-lg overflow-clip"
          title={title}
        >
          <BlurImageWithBlurHash
            className="absolute"
            layout="fill"
            objectFit="cover"
            src={thumbnail}
            alt={title}
            placeholder="blur"
            blurDataURL={blurHash}
          />
        </div>
      </Link>
      <div className="pt-3">
        <div className="flex md:flex-row flex-col  items-center justify-between px-2">
          <div className="md:mb-0 mb-2">
            <a href={preview} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center border rounded-md px-3 py-1.5  dark:hover:bg-[#3232328a] hover:bg-slate-100  text-sm">
                Preview
                <ArrowUpRight strokeWidth={1} className="mr-2" />
              </button>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            {code.map((item, index) => (
              <a
                key={index}
                href={item}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center border rounded-md px-3 py-1.5 dark:hover:bg-[#3232328a] hover:bg-slate-100  text-sm">
                  <GithubIcon className="mr-2" strokeWidth={1} />
                  <span className="text-xs md:text-sm">
                    {" "}
                    {index !== 0 ? "Back-end" : "Front-end"}
                  </span>
                </button>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="px-2">
            <Link href={`/project/${project.slug}`} className="">
              <h2 className="text-xl  dark:text-slate-100 text-gray-800">
                {title}
              </h2>
            </Link>
          </div>
          <div className="grid grid-flow-col grid-rows-2 gap-2 mt-4 mb-1">
            {tech.slice(0, 5).map((ts, i) => (
              <button
                key={i}
                className="border rounded-md py-1 dark:hover:bg-[#3232328a] hover:bg-slate-100 text-sm "
              >
                {ts}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
