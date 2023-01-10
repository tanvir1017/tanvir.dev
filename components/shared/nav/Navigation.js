import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import Style from "./navbar.module.css";
import { mobileLinkData } from "./navLink";

const navigationVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  close: {
    transition: { staggerChildren: 0.5, staggerDirection: 2 },
  },
};

const Navigation = ({ toggle, isOpen }) => {
  return (
    <motion.ul
      className={`${isOpen ? "block" : "hidden"} ${Style.navUl} nav-ul`}
      variants={navigationVariants}
    >
      {mobileLinkData.map((nav, i) => (
        <MenuItem key={i} toggle={toggle} isOpen={isOpen} nav={nav} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
