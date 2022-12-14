import { motion, useCycle } from "framer-motion";
import MenuToggler from "../MenuToggoler";
import Navigation from "../Navigation";

const sidebarVariants = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(20px at 40px 40px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <motion.nav
        className="lg:hidden block"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className="background" variants={sidebarVariants} />
        <MenuToggler className="button" toggle={() => toggleOpen()} />
        <Navigation toggle={() => toggleOpen()} isOpen={isOpen} />
      </motion.nav>
    </>
  );
}

export default MobileNav;
