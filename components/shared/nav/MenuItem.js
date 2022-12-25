import { motion } from "framer-motion";
import Link from "next/link";
import style from "./navbar.module.css";

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      // ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      // ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const MenuItem = ({ nav, toggle }) => {
  return (
    <motion.li
      className={`nav-li ${style.navLink}`}
      onClick={toggle}
      variants={menuItemVariants}
    >
      <span className="icon-placeholder grid place-items-center">
        <Link href={`${nav.path}`}>{nav.icon}</Link>
      </span>
      <span className="text-placeholder grid place-items-center">
        <Link href={`${nav.path}`}>{nav.title}</Link>
      </span>
    </motion.li>
  );
};

export default MenuItem;
