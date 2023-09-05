import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import NextNProgress from "nextjs-progressbar";

import Footer from "components/shared/footer/footer";
import NavBar from "components/shared/navbar/nav";
import TapToTop from "components/shared/toptop/Toptop";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const { pathname } = router;

  return (
    <ThemeProvider attribute="class">
      <MDXProvider>
        <main className="dark:bg-[#15192f]">
          <NextNProgress color="#857a7a" />
          {pathname !== "/404" && <TapToTop />}
          {pathname !== "/404" && <NavBar />}
          <Component key={router.pathname} {...pageProps} />
          {pathname !== "/404" && <Footer />}
        </main>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
