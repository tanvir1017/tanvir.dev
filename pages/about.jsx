import AboutHeading from "../components/about/aboutHeading/aboutHeading";
import Contact from "../components/about/contact/contact";
import Stack from "../components/about/stack/stack";
import { metaTagAbout as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";

function About() {
  return (
    <>
      <Meta metaTag={metaTag} />
      <main className="container max-w-6xl mx-aut font-jostRegular">
        <div className="pt-14"></div>
        <AboutHeading />
        <Stack />
        <Contact />
      </main>
    </>
  );
}

export default About;
