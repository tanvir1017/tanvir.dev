import { AnimatePresence } from "framer-motion";
import Footer from "../components/shared/footer/footer";
import LgNav from "../components/shared/nav/LgNav";
import MobileNav from "../components/shared/nav/Navigation/MobileNav";
import Toptop from "../components/shared/toptop/Toptop";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const { pathname } = router;
  return (
    <main>
      {pathname !== "/404" && <Toptop />}
      <MobileNav />
      {pathname !== "/404" && pathname !== "/signin" && <LgNav />}
      {/* {pathname !== "/404" && pathname !== "/login" && <LgNav />} */}
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      {pathname !== "/404" && pathname !== "/signin" && <Footer />}
    </main>
  );
}

export default MyApp;
