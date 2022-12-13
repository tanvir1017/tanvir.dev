import { AnimatePresence, useCycle } from "framer-motion";
import LgNav from "../components/nav/LgNav";
import MobileNav from "../components/nav/Navigation/MobileNav";

import Toptop from "../components/toptop/Toptop";
import "../styles/globals.css";

// const sidebarVariants = {
//   open: {
//     clipPath: `circle(1000px at 40px 40px)`,
//     transition: {
//       duration: 0.4,
//     },
//   },
//   closed: {
//     clipPath: `circle(30px at 40px 40px)`,
//     transition: {
//       duration: 0.4,
//       delay: 0.4,
//     },
//   },
// };
function MyApp({ Component, pageProps, router }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <main>
      <Toptop />
      <MobileNav />

      <LgNav />

      {/* <motion.nav
        className="lg:hidden block"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className="background" variants={sidebarVariants} />
        <MenuToggler className="button" toggle={() => toggleOpen()} />
        <Navigation toggle={() => toggleOpen()} />
      </motion.nav> */}
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}

export default MyApp;
