import { motion as m } from "framer-motion";
import { projectData } from "../project/projectData";
import style from "./project.module.css";
import ProjectImage from "./ProjectImage";

function ShowProject({ layoutId, expander }) {
  const showProjectById = projectData.find((p) => p.id === layoutId);
  const {
    id,
    about,
    title,
    desc,
    listItem,
    link: links,
    stack,
  } = showProjectById;
  return (
    <m.div
      className={`${style.showProjectView} font-jostRegular lg:py-0 pt-6`}
      layoutId={layoutId}
      style={{ pointerEvents: "auto" }}
    >
      <m.div className="lg:large_container m_container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 place-items-center">
          <ProjectImage
            expander={expander}
            stack={stack}
            layoutId={layoutId}
            title={title}
            links={links}
            id={id}
          />
          <m.div
            className="lg:p-8 relative"
            initial={{ opacity: 0, x: "-100px" }}
            animate={{ opacity: 1, x: "0px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="font-jostBold text-3xl">{title}</h2>
            <p>{desc}</p>
            <p className="font-jostBold mt-5 border rounded-full inline-block px-5 py-1">
              {about}
            </p>
            <ul className={`mt-4 ${style.descUl} space-y-2`}>
              {listItem.map((item, i) => (
                <li key={i + 1} className={`${style.listLi}`}>
                  {item}
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </m.div>
    </m.div>
  );
}

export default ShowProject;
