import { motion as m } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import style from "./navbar.module.css";
import { data } from "./navLink";

function LgNav() {
  const { pathname } = useRouter();
  return (
    <div className="pt-3 lg:block hidden">
      <div className={`${style.navBg} font-jostRegular px-12 py-5`}>
        <div className="flex justify-between items-center">
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
                <span className={`font-caveatMedium text-white`}>.dev</span>{" "}
              </Link>
            </m.li>
          </m.ul>
          {pathname !== "/signin" && pathname !== "/signup" && (
            <m.ul className="flex">
              {data.map((nav, index) => (
                <m.li
                  key={index}
                  className="m-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: 0.85, delay: 0.2 }}
                >
                  <Link href={nav.path} className={`${style.linkText} `}>
                    {nav.title}
                  </Link>
                </m.li>
              ))}
            </m.ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default LgNav;
