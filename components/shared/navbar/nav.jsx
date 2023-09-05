import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../nav/navLink";
import style from "./navbar.module.css";

import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [theme]);
  if (!mounted) {
    return null;
  }

  const svgVariants = {
    hidden: {
      // rotate: -180,
    },
    visible: {
      // rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="py-4 sticky top-0 dark:bg-[#15192f] bg-white/30 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between ">
        <ul>
          <li>
            <Link href={"/"}>
              <span className="font-firaSansBold racking-wider text-4xl flex items-center">
                <motion.svg
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                  width="50"
                  height="50"
                  viewBox="0 0 321 415"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M207 2H111C106.2 84.4 36.6667 108.667 2.5 110.5V206.5C164.1 197.7 207 73 207 2Z"
                    stroke="#08AEEA"
                    stroke-width="4"
                    variants={pathVariants}
                  />
                  <motion.path
                    variants={pathVariants}
                    d="M318.5 412.5L318.5 316.5C236.1 311.7 211.833 242.167 210 208L114 208C122.8 369.6 247.5 412.5 318.5 412.5Z"
                    stroke="#2AF598"
                    stroke-width="4"
                  />
                </motion.svg>
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#08AEEA] to-[#2AF598] font-caveatSemiBold text-2xl">
                  .dev
                </span>{" "}
              </span>
            </Link>
          </li>
        </ul>

        <ul className="flex justify-center items-center">
          {data.map((nav, index) => (
            <li
              key={index}
              className="m-2 text-[#121212] dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: 0.85, delay: 0.2 }}
            >
              <Link href={nav.path} className={`${style.linkText} `}>
                {nav.title}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button className="absolute top-[50%] left-[10%] translate-x-[50%] -translate-y-[50%]">
              {theme !== "dark" ? (
                <Moon
                  size={25}
                  className="text-gray-600"
                  strokeWidth={1.5}
                  onClick={() => setTheme("dark")}
                />
              ) : (
                <Sun
                  size={25}
                  strokeWidth={1.5}
                  className="text-slate-200"
                  onClick={() => setTheme("light")}
                />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
