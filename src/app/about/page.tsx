"use client";

import AboutHeading from "@/layouts/AboutPageLayout/Header/about-header";
import TechnologySkills from "@/layouts/AboutPageLayout/Skill/technology-skill";
import TimeLine from "@/layouts/AboutPageLayout/Timeline/timeline";
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
