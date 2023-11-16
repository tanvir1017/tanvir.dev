import TimeLine from "components/about/about-timeline/timeline";
import TechnologySkills from "components/about/skill/technology-skill";
import ContactMe from "components/home/contact-me/contact";
import AboutHeading from "../components/about/about-heading/aboutHeading";
import { metaTagAbout as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";

function About() {
  return (
    <>
      <Meta metaTag={metaTag} />
      <main className="md:container">
        <AboutHeading />
        <TechnologySkills />
        <div className="mb-32 inline-block">
          <TimeLine />
        </div>
        <ContactMe />
      </main>
    </>
  );
}

export default About;
