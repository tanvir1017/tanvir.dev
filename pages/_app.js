import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Footer from "../components/shared/footer/footer";
import LgNav from "../components/shared/nav/LgNav";
import MobileNav from "../components/shared/nav/Navigation/MobileNav";
import Toptop from "../components/shared/toptop/Toptop";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const { pathname } = router;
  useEffect(() => storePathValues, [router.asPath]);
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", globalThis.location.pathname);
  }
  return (
    <main>
      {pathname !== "/404" && <Toptop />}
      <MobileNav />
      {pathname !== "/404" && <LgNav />}
      {/* {pathname !== "/404" && pathname !== "/login" && <LgNav />} */}
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      {pathname !== "/404" &&
        pathname !== "/signin" &&
        pathname !== "/signup" && <Footer />}
    </main>
  );
}

export default MyApp;
