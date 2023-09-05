import { ArrowUpRightFromCircle, ChevronRight, Github } from "lucide-react";
import Link from "next/link";
const ProjectCardHome = ({ project }) => {
  const {
    title,
    description,
    publishedAt,
    status,
    preview,
    code,
    tech,
    thumbnail,
    blurHash,
  } = project.frontmatter;
  return (
    <div className="shadow-md px-5 py-6 dark:border-gray-600 border my-3 rounded-lg relative cursor-pointer">
      <Link href={`/project/${project.slug}`} className=" cursor-pointer">
        <h5 className="mb-5 text-xl font-FiraSansMedium inline-flex items-center group ">
          {title}{" "}
          <span>
            {" "}
            <ChevronRight
              strokeWidth={2.5}
              className="group-hover:translate-x-2 duration-200 transition-all text-green-400"
            />
          </span>
        </h5>
      </Link>
      <p>{description}</p>
      <div className="my-5">
        {tech.map((item, i) => (
          <button
            key={i}
            className="rounded-md m-1 px-3 py-0.5 border-[1px] dark:border-gray-600 border-slate-200"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <div className="group relative">
          <a
            href={preview}
            target="_blank"
            className="flex items-center dark:text-white text-gray-600 mr-4"
            rel="noopener noreferrer"
          >
            <ArrowUpRightFromCircle
              strokeWidth={1}
              className="mr-1"
              size={15}
            />
            Live Here
          </a>
          <div className="absolute w-0 group-hover:w-[85%] duration-300 transition-all h-0.5 bg-gray-200"></div>
        </div>
        {code.map((item, i) => (
          <div key={i} className="group relative">
            <a
              href={item}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center dark:text-white text-gray-600 mr-4"
            >
              <Github size={15} className="mr-1" />{" "}
              {i !== 0 ? "Backend" : "Front-end"}
            </a>
            <div className="absolute w-0 group-hover:w-[85%] duration-300 transition-all h-0.5 bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardHome;
