import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProjectCardHome from "./project-card";

const Projects = ({ projects }) => {
  const latestProjects = projects
    .filter((item) => item.frontmatter.status !== "undone")
    .slice(-3)
    .reverse();
  return (
    <section className=" max-w-6xl mx-auto relative md:px-0 px-3 md:mt-0 mt-12">
      <div className="flex md:flex-row flex-col items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="md:text-4xl text-2xl font-HubotSansBlack dark:text-white text-gray-600 mb-4 tracking-wider uppercase md:block hidden">
            Projects
          </h2>
          <div className="md:hidden flex items-center justify-between mb-4">
            <h2 className="md:text-4xl text-2xl  dark:text-white text-gray-600  tracking-wider uppercase">
              Projects
            </h2>
            <Link href="/projects" className="md:hidden flex items-center">
              All Projects
              <FaLongArrowAltRight className="w-4 h-4 text-gray-400 ml-2" />
            </Link>
          </div>
          <p className="">
            Some of my side projects I'm currently working on :
          </p>
        </div>

        <Link href="/projects" className="md:block hidden">
          <button className="border border-slate-300 hover:bg-slate-100 rounded-md py-2.5 px-5 text-black dark:text-white dark:hover:text-black  ">
            View all projects{" "}
            <FaLongArrowAltRight className="w-4 h-4 text-gray-400  inline-flex " />
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 place-items-center md:mt-36 mt-10">
        <div className="-rotate-90 md:block hidden">
          <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark hover:stroke-text-light-gradient dark:hover:stroke-text-dark-gradient hover:opacity-100 md:text-9xl text-6xl uppercase poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a] font-HubotSansBlack">
            Projects
          </h2>
        </div>

        <div className="col-span-2 relative">
          {latestProjects.map((item, i) => (
            <ProjectCardHome key={i} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
