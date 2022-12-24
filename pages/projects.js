import { metaTagProjects } from "../components/localData/localData";
import Meta from "../components/meta/meta";
import ProjectsList from "../components/project/projects";

function Projects() {
  return (
    <>
      <Meta metaTag={metaTagProjects} />
      <ProjectsList />
    </>
  );
}

export default Projects;
