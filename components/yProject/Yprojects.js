import {
  AnimatePresence,
  AnimateSharedLayout,
  motion as m,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projectData } from "../project/projectData";
import ShowProject from "./showProject";

function Yprojects() {
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
      <div className={`large_container`}>
        <AnimateSharedLayout type="switch">
          <div className="grid place-items-center">
            <h1 className="uppercase text-4xl font-jostBold">Projects</h1>
            <p className="">
              <span className={` text-green-700 font-jostSemiBold`}>THAT</span>{" "}
              <span className={`font-caveatMedium`}>I&apos;ve done</span>{" "}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {projectData.map((project, i) => {
              return (
                <m.div
                  onClick={() => expander(project.id)}
                  key={i}
                  className="bg-white text-black rounded-lg p-3 grid place-items-center"
                >
                  <Image
                    src={`/projects/${project.id}.webp`}
                    width={300}
                    height={100}
                    alt={project.title}
                  />
                  <div>
                    <h4>{project.title}</h4>
                  </div>
                </m.div>
              );
            })}
          </div>
          <AnimatePresence>
            {" "}
            {expand && <ShowProject expander={expander} layoutId={layoutId} />}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </>
  );
}

export default Yprojects;
