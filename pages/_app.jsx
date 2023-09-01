import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

import NextNProgress from "nextjs-progressbar";
import Footer from "../components/shared/footer/footer";
import MobileNav from "../components/shared/nav/Navigation/MobileNav";

import NavBar from "components/shared/navbar/nav";
import Toptop from "components/shared/toptop/Toptop";
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
          <NextNProgress color="#857a7a" />
          {pathname !== "/404" && <Toptop />}
          <MobileNav />
          {pathname !== "/404" && <NavBar />}
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
