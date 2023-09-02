import Blog from "../blog/blog";
import ContactMe from "../contact-me/contact";
import NewHeadingSection from "../header/new_heading-section";
import Projects from "../projects/projects";

function HomePage() {
  return (
    <>
      <NewHeadingSection />
      <Projects />
      <Blog />
      <ContactMe />
      {/* <ContactMe /> */}
    </>
  );
}

export default HomePage;
