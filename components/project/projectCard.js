/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

function ProjectCard({ item, expander }) {
  const { id, title, category } = item;
  return (
    <li className={`card cursor-pointer`}>
      <div className="card-content-container">
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
        </motion.div>
      </div>
      <span
        onClick={() => expander(id)}
        className={`card-open-link cursor-pointer`}
      />
    </li>
  );
}

export default ProjectCard;
