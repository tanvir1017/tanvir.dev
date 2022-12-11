import React from "react";
import FirstProjectRow from "./FirstProjectRow/FirstProjectRow";
import SecondeProjectsRow from "./SecondeProjectsRow/SecondeProjectsRow";

function Projects() {
  return (
    <>
      <div className={`headingSection`}>
        <div className="grid place-items-center">
          <h1 className="font-[600] uppercase text-4xl">Projects</h1>
          <p className="">
            <span className={` text-green-700 `}>That</span>{" "}
            <span className={``}>I&#39;ve Done</span>{" "}
          </p>
        </div>
        <FirstProjectRow />
        <SecondeProjectsRow />
      </div>
    </>
  );
}

export default Projects;
