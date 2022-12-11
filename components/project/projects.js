import { motion } from "framer-motion";
import { items } from "../localData/localData";

function Projects({ id, expander }) {
  const showSelectedProject = items.find((item) => item.id === id);
  const { id: foundedId, category, title } = showSelectedProject;
  return (
    <motion.div key={id} className="expand_card" layoutId={id}>
      <div className="expand_img">
        <div className="expand_image_content">
          <p
            className="bg-purple-700 px-2 py-3 cursor-pointer"
            onClick={expander}
          >
            back
          </p>
          <img src={`/images/${foundedId}.jpg`} alt="" />
        </div>
      </div>
      <div className="expand_text">
        <div className="expand_text_content">
          <small>{category}</small>
          <p>{title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
