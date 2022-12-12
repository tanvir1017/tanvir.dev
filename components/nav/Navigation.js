import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { data } from "./navLink";

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ toggle }) => {
  return (
    <motion.ul className="nav-ul" variants={navigationVariants}>
      {data.map((nav, i) => (
        <MenuItem key={i} toggle={toggle} nav={nav} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
