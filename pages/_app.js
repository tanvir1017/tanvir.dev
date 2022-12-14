import { AnimatePresence } from "framer-motion";
import LgNav from "../components/nav/LgNav";
import MobileNav from "../components/nav/Navigation/MobileNav";

import Toptop from "../components/toptop/Toptop";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <main>
      <Toptop />
      <MobileNav />
      <LgNav />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}

export default MyApp;
