import { metaTagProjects } from "../components/localData/localData";
import Meta from "../components/meta/meta";
import ProjectsPage from "../components/project/projectsPage";

function Projects() {
  return (
    <>
      <Meta metaTag={metaTagProjects} />
      <ProjectsPage />
    </>
  );
}

export default Projects;
