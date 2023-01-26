import {
  AnimatePresence,
  AnimateSharedLayout,
  motion as m,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ProjectItem from "./project";
import Style from "./project.module.css";
import { projectData } from "./projectData";
import ShowProject from "./showProject";

function ProjectsList() {
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
      <div className={`card_container relative pt-5`}>
        <m.div
          className="grid place-items-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="uppercase text-4xl font-jostBold text-[#121212] dark:text-white">
            Projects
          </h1>
          <p className="">
            <span className={` text-green-700 font-jostSemiBold`}>THAT</span>{" "}
            <span
              className={`font-caveatMedium text-[#121212] dark:text-white`}
            >
              I&apos;ve done
            </span>{" "}
          </p>
        </m.div>
        <AnimateSharedLayout type="crossfade">
          <m.ul
            className="card-list my-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {projectData.slice(0, 4).map((project, i) => {
              return (
                <ProjectItem
                  expander={expander}
                  key={i}
                  project={project}
                  layoutId={project.id}
                />
              );
            })}
          </m.ul>
          <div className="inset-x-0 bottom-0 flex justify-center dark:bg-gradient-to-t  pt-[700px] pb-8 pointer-events-none dark:from-[#121212]  absolute">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`relative -top-36 rounded-full backdrop-blur-0 focus:outline-none focus:ring-1    text-white px-6 flex shadow-lg items-center  pointer-events-auto py-2 ${Style.showMoreButton}`}
            >
              <Link href="/projects">Show more</Link>
            </m.button>
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

export default ProjectsList;
