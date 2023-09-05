import ProjectCard from "./project-card";

const ProjectShowCards = ({ projects }) => {
  return (
    <section className="md:container font-firaSansRegular md:mt-40 mt-10 px-3">
      <h1 className="font-firaSansBold md:text-5xl text-2xl uppercase dark:text-slate-100 text-gray-800 ">
        Something that i've built
      </h1>

      <div className="max-w-6xl mx-auto mt-16">
        <div className="grid md:grid-cols-2 md:gap-5 gap-2">
          {projects
            .filter((project) => project.frontmatter.status !== "not-complete")
            .map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowCards;