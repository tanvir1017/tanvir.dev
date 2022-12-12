/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { items } from "../localData/localData";

function Projects({ id, expander }) {
  const showSelectedProject = items.find((item) => item.id === id);
  const { id: foundedId, category, title } = showSelectedProject;
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
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              ut sunt! Molestiae vel quidem id illum earum quaerat, dignissimos
              esse asperiores nesciunt error, modi aliquam blanditiis? Doloribus
              veniam delectus ipsa facere, voluptatum placeat eum,
              exercitationem neque voluptate harum est fuga, sunt officia libero
              ex vero! Molestias dicta distinctio libero expedita?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
