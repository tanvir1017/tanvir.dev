import React from "react";
import { metaTagProjects } from "../components/localData/localData";
import Meta from "../components/meta/meta";
import Project from "../components/project/project";

function Projects() {
  return (
    <>
      <Meta metaTag={metaTagProjects} />
      <Project />
    </>
  );
}

export default Projects;
