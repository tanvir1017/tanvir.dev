import { motion as m } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

import style from "./navbar.module.css";
import { data } from "./navLink";
import Theme from "./Theme";

function LgNav() {
  useEffect(function mount() {
    const body = document.body;
    let topPosition = 0;
    function onScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }
      if (
        currentScroll > topPosition &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }
      if (
        currentScroll < topPosition &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }

      topPosition = currentScroll;
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const conditionalClasses = {
    background: "bg-white/5",
    iconPadding: "p-2",
    iconSize: "text-3xl",
  };

  return (
    <div className="pt-3 lg:block hidden">
      <header
        className={`font-jostRegular px-12 py-3  bg-slate-50/30 backdrop-blur-2xl dark:bg-[#121212]/60 fixed top-0 left-0 w-full text-center transition-all duration-500`}
        style={{
          boxShadow: "2px 0px 5px 1px rgba(49, 49, 49, 0.375)",
          zIndex: 150,
        }}
      >
        <nav className="flex justify-between items-center">
          <m.ul>
            <m.li
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, transition: 0.85, x: 0, delay: 0.2 }}
            >
              <Link href={"/"}>
                <span
                  className={`${style.animatedText} font-jostBold  text-4xl`}
                  style={{ fontWeight: "900" }}
                >
                  Tanvir
                </span>
                <span
                  className={`font-caveatMedium dark:text-white text-[#121212]`}
                >
                  .dev
                </span>{" "}
              </Link>
            </m.li>
          </m.ul>

          <m.ul className="flex justify-center items-center">
            {data.map((nav, index) => (
              <m.li
                key={index}
                className="m-2 text-[#121212] dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: 0.85, delay: 0.2 }}
              >
                <Link href={nav.path} className={`${style.linkText} `}>
                  {nav.title}
                </Link>
              </m.li>
            ))}
            <m.li className="ml-5">
              <Theme conditionalClasses={conditionalClasses} />
            </m.li>
          </m.ul>
        </nav>
      </header>
    </div>
  );
}

export default LgNav;
