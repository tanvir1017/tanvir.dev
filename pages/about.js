import { metaTagAbout as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";

function About() {
  return (
    <>
      <Meta metaTag={metaTag} />
      <div>This is about page</div>
    </>
  );
}

export default About;
