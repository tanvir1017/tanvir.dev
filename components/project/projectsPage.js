import {
  AnimatePresence,
  AnimateSharedLayout,
  motion as m,
} from "framer-motion";
import { useState } from "react";
import ProjectItem from "./project";
import { projectData } from "./projectData";
import ShowProject from "./showProject";

function ProjectsPage() {
  const [expand, setExpand] = useState(false);
  const [layoutId, setLayoutId] = useState(null);
  const expander = (id) => {
    if (!expand) {
      setLayoutId(id);
      setExpand(true);
    } else {
      setLayoutId(null);
      setExpand(!true);
    }
  };
  return (
    <>
      <div className={`card_container relative`}>
        <m.div className="grid place-items-center" animate>
          <h1 className="uppercase text-4xl font-jostBold">Projects</h1>
          <p className="">
            <span className={` text-green-700 font-jostSemiBold`}>THAT</span>{" "}
            <span className={`font-caveatMedium`}>I&apos;ve done</span>{" "}
          </p>
        </m.div>
        <AnimateSharedLayout type="crossfade">
          <ul className="card-list my-14">
            {projectData.map((project, i) => {
              return (
                <ProjectItem
                  expander={expander}
                  key={i}
                  project={project}
                  layoutId={project.id}
                />
              );
            })}
          </ul>
          <AnimatePresence>
            {" "}
            {expand && <ShowProject expander={expander} layoutId={layoutId} />}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </>
  );
}

export default ProjectsPage;
