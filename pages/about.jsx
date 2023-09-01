import Hobby from "components/about/hobby/hobby";
import TechnologySkills from "components/about/skill/technology-skill";
import ContactMe from "components/home/contact-me/contact";
import AboutHeading from "../components/about/aboutHeading/aboutHeading";
import { metaTagAbout as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";

function About() {
  return (
    <>
      <Meta metaTag={metaTag} />
      <main className="">
        <AboutHeading />
        <Hobby />
        <TechnologySkills />
        <ContactMe />
      </main>
    </>
  );
}

export default About;
