import Blog from "../blog/blog";
import ContactMe from "../contact-me/contact";
import NewHeadingSection from "../header/new_heading-section";
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
      <NewHeadingSection />
      <Projects projects={projects} />
      <Blog blogs={blogs} />
      <ContactMe />
    </>
  );
}
