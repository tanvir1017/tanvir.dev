import { motion as m } from "framer-motion";
import Image from "next/image";
import { GiReturnArrow } from "react-icons/gi";
import { projectData } from "../project/projectData";
import style from "./project.module.css";

function ShowProject({ layoutId, expander }) {
  const showProjectById = projectData.find((p) => p.id === layoutId);
  return (
    <m.div
      className={`${style.showProjectView}`}
      layoutId={layoutId}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 0.15 } }}
      // transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: "auto" }}
    >
      <m.div className="large_container">
        <p
          className="scale-y-[-1] px-12 py-3 rounded-md text-[#ff008c]"
          onClick={() => expander(layoutId)}
        >
          <GiReturnArrow />
        </p>
        <Image
          src={`/projects/${layoutId}.webp`}
          width={800}
          height={100}
          alt={showProjectById.title}
          className="rounded-lg"
        />
        <div>
          <h4>{showProjectById.title}</h4>
        </div>
      </m.div>
    </m.div>
  );
}

export default ShowProject;
