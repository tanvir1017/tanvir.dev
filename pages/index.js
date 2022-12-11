import HeaderSection from "../components/header/headerSection";
import { metaTagHome as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";
import Project from "../components/project/project";
import SelfHighlighter from "../components/selfHighlighter/selfHighlighter";
import Blog from "./blog";

export default function Home() {
  return (
    <>
      <Meta metaTag={metaTag} />
      <main>
        <HeaderSection />
        <SelfHighlighter />
        <Blog />
        <Project />
      </main>
    </>
  );
}
