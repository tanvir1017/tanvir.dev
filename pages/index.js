import HeaderSection from "../components/header/headerSection";
import { metaTagHome as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";
import Projects from "../components/projects/projects";
import SelfHighlighter from "../components/selfHighlighter/selfHighlighter";
import Blog from "./blog";

export default function Home() {
  return (
    <div>
      <Meta metaTag={metaTag} />
      <main>
        <HeaderSection />
        <SelfHighlighter />
        <Blog />
        <Projects />
      </main>
    </div>
  );
}
