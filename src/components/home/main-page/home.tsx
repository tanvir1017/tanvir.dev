import ContactMe from "../contact-me/contact";
import Projects from "../projects/projects";

export default function HomePage({
  blogs,
  projects,
}: {
  blogs: any;
  projects: any;
}) {
  return (
    <>
      {/* <NewHeadingSection /> */}
      <Projects projects={projects} />
      {/* <Blog blogs={blogs} /> */}
      <ContactMe />
    </>
  );
}
