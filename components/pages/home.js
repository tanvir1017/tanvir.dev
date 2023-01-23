import BlogsPage from "../blogs/blogs";
import HeaderSection from "../header/headerSection";
import ProjectsList from "../project/projects";

import SelfHighlighter from "../selfHighlighter/selfHighlighter";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <SelfHighlighter />
      <BlogsPage />
      <ProjectsList />
    </>
  );
}

export default HomePage;
