import { ProjectContentTypes } from "@/ts/type";
import { ArrowUpRightFromCircle, Github } from "lucide-react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
const ProjectCardHome = ({ project }: { project: ProjectContentTypes }) => {
  return (
    <div className="shadow-md px-5 py-6 dark:border-gray-600 border my-3 rounded-lg relative cursor-pointer group/link">
      <Link
        href={`/project/${project.slug}`}
        className="flex justify-between items-center cursor-pointer mb-5"
      >
        <h5 className="md:text-xl text-base font-bold dark:text-slate-300">
          {project.title}{" "}
        </h5>
        <BiArrowBack className="text-base group-hover/link:translate-x-1.5 duration-200 rotate-180" />
      </Link>
      <p className="md:text-base text-sm dark:text-slate-300">
        {project.description}
      </p>
      <div className="my-5">
        {project.tech.map((item, i) => (
          <button
            key={i}
            className={
              "rounded-md m-1 md:px-3 px-1.5 py-1 md:text-base text-xs border-[1px] dark:border-gray-600 border-slate-200"
            }
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <div className="group relative">
          <a
            href={project.preview}
            target="_blank"
            className="flex items-center dark:text-white text-gray-600 mr-4"
            rel="noopener noreferrer"
          >
            <ArrowUpRightFromCircle
              strokeWidth={1}
              className="md:mr-1 mr-2"
              size={15}
            />
            live <span className="md:block hidden md:ml-1 ml-0"> Here</span>
          </a>
          <div className="absolute w-0 group-hover:w-[85%] duration-300 transition-all h-0.5 bg-gray-200"></div>
        </div>
        {project.code.map((item, i) => (
          <div key={i} className="group relative ">
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
