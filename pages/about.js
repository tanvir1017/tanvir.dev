import { metaTagAbout as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";
import SelfHighlighter from "../components/selfHighlighter/selfHighlighter";

function About() {
  return (
    <>
      <Meta metaTag={metaTag} />
      <SelfHighlighter />
    </>
  );
}

export default About;
