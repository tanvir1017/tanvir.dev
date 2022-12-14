import AboutHeading from "../components/about/aboutHeading/aboutHeading";
import Contact from "../components/about/contact/contact";
import Stack from "../components/about/stack/stack";
import { metaTagAbout as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";

function About() {
  return (
    <>
      <Meta metaTag={metaTag} />
      <main className="lg:large_container m_container font-jostRegular">
        <AboutHeading />
        <Stack />
        <Contact />
      </main>
    </>
  );
}

export default About;
