import React from "react";
import BlogsPage from "../blogs/blogs";
import HeaderSection from "../header/headerSection";

import SelfHighlighter from "../selfHighlighter/selfHighlighter";
import Yprojects from "../yProject/Yprojects";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <SelfHighlighter />
      <BlogsPage />
      <Yprojects />
    </>
  );
}

export default HomePage;
