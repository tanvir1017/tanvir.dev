import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

import Footer from "../components/shared/footer/footer";
import LgNav from "../components/shared/nav/LgNav";
import MobileNav from "../components/shared/nav/Navigation/MobileNav";
import Toptop from "../components/shared/toptop/Toptop";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const { pathname } = router;

  return (
    <ThemeProvider
      forcedTheme={Component.theme || null}
      enableSystem={true}
      attribute="class"
    >
      <MDXProvider>
        <main>
          {pathname !== "/404" && <Toptop />}
          <MobileNav />
          {pathname !== "/404" && <LgNav />}
          <AnimatePresence>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
          {pathname !== "/404" && <Footer />}
        </main>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
