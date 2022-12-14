import React from "react";
import BlogsPage from "../blogs/blogs";
import HeaderSection from "../header/headerSection";

import Project from "../project/project";
import SelfHighlighter from "../selfHighlighter/selfHighlighter";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <SelfHighlighter />
      <BlogsPage />
      <Project />
    </>
  );
}

export default HomePage;
