import ProjectShowCards from "components/project/v2-project-page/project-card/project-show-cards";
import ProjectHeading from "components/project/v2-project-page/project-heading";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { projectShowCasePath, projectsFileNames } from "utils/mdx/mdxUtils";
import { metaTagProjects } from "../components/localData/localData";
import Meta from "../components/meta/meta";

export default function Projects({ projects }) {
  return (
    <main className="App">
      <Meta metaTag={metaTagProjects} />
      <ProjectHeading />
      <ProjectShowCards projects={projects} />
    </main>
  );
}

export async function getStaticProps() {
  const projects = projectsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(projectShowCasePath, slug));
    const { data } = matter(content);

    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    };
  });
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };
}
