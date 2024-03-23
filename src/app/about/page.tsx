"use client";

import AboutHeading from "@/components/about/about-heading/aboutHeading";
import TimeLine from "@/components/about/about-timeline/timeline";
import TechnologySkills from "@/components/about/skill/technology-skill";
import { MdContactEmergency } from "react-icons/md";

function About() {
  return (
    <main className="md:container">
      <AboutHeading />
      <TechnologySkills />
      <div className="sm:mt-20 mb-32 inline-block">
        <TimeLine />
      </div>
      <MdContactEmergency />
    </main>
  );
}

export default About;
