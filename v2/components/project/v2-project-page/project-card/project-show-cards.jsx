import ProjectCard from "./project-card";

const ProjectShowCards = ({ projects }) => {
  const latestProjects = projects
    .filter((item) => item.frontmatter.status !== "undone")
    .slice(-3)
    .reverse();
  return (
    <section className="md:container  md:mt-40 mt-10 px-3">
      <h1 className=" md:text-5xl text-2xl uppercase dark:text-slate-100 text-gray-800 ">
        Something that i've built
      </h1>

      <div className="max-w-6xl mx-auto mt-16">
        <div className="grid md:grid-cols-2 md:gap-5 gap-2">
          {latestProjects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowCards;
