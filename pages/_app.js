import { AnimatePresence } from "framer-motion";
import Footer from "../components/shared/footer/footer";
import LgNav from "../components/shared/nav/LgNav";
import MobileNav from "../components/shared/nav/Navigation/MobileNav";

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
      <Footer />
    </main>
  );
}

export default MyApp;
