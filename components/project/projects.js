/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { projectData } from "./projectData";

function Projects({ id, expander }) {
  const showSelectedProject = projectData.find((item) => item.id === id);
  const {
    category,
    title,
    listItem,
    about,
    link: linkItem,
  } = showSelectedProject;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay cursor-pointer"
      >
        <a onClick={() => expander(id)} />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-image"
              src={`projects/${id}.webp`}
              alt="project-image"
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <motion.div className="">
              <motion.ul>
                {linkItem.map((codeShow, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center space-x-3 z-"
                  >
                    <motion.li className="bg-[#ff008c] px-3 py-2 hover:bg-black hover:text-white grid place-items-center">
                      {" "}
                      <a href={`${codeShow.live}`}>Live</a>{" "}
                    </motion.li>
                    <motion.li>
                      {" "}
                      <a href={`${codeShow.code}`}>Code</a>{" "}
                    </motion.li>
                    <motion.li>
                      {" "}
                      <a href={`${codeShow.server}`}>Server</a>{" "}
                    </motion.li>
                  </div>
                ))}
              </motion.ul>
            </motion.div>
            <p>{about}</p>
            <ul>
              {listItem?.map((items) => (
                <li key={items}> &gt; {items}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
