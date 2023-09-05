import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProjectCardHome from "./project-card";

const Projects = ({ projects }) => {
  const latestProjects = projects
    .filter((item) => item.frontmatter.status !== "undone")
    .slice(-3)
    .reverse();
  return (
    <section className="container max-w-6xl mx-auto relative ">
      <div className=" flex items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="md:text-4xl text-2xl font-firaSansExtraBold dark:text-white text-gray-600 mb-4 tracking-wider uppercase">
            Projects
          </h2>
          <p className="">
            Some of my side projects I'm currently working on :
          </p>
        </div>
        <div>
          <Link href="/projects">
            <button className="border border-slate-300 hover:bg-slate-100 rounded-md py-2.5 px-5 text-black dark:text-white dark:hover:text-black font-firaSansLight ">
              View all projects{" "}
              <FaLongArrowAltRight className="w-4 h-4 text-gray-400  inline-flex " />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 place-items-center mt-36">
        <div className="-rotate-90">
          <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark hover:stroke-text-light-gradient dark:hover:stroke-text-dark-gradient hover:opacity-100 md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a]">
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
