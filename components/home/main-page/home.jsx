import Blog from "../blog/blog";
import NewHeadingSection from "../header/new_heading-section";
import Projects from "../projects/projects";

function HomePage() {
  return (
    <>
      <NewHeadingSection />
      <Projects />
      <Blog />
    </>
  );
}

export default HomePage;
