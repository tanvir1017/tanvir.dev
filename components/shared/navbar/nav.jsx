import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
export const data = [
  { title: "About", path: "/about" },
  { title: "Blogs", path: "/blogs" },
  { title: "Project", path: "/projects" },
];

import { AlignJustify, Moon, Sun, X } from "lucide-react";
import { useRouter } from "next/router";
import { cn } from "utils/cn/cn";

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

const MobileNavBar = ({
  pathname,
  isMenuOpen,
  setIsMenuOpen,
  theme,
  setTheme,
}) => {
  return (
    <nav className="py-3 sticky top-0 dark:bg-[#15192f] bg-slate-100 backdrop-blur-md z-50 md:hidden block">
      <div className="px-4">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/" className="flex items-center gap-2">
              <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                width="40"
                height="40"
                viewBox="0 0 321 415"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M207 2H111C106.2 84.4 36.6667 108.667 2.5 110.5V206.5C164.1 197.7 207 73 207 2Z"
                  stroke="#08AEEA"
                  strokeWidth="12"
                  variants={pathVariants}
                />
                <motion.path
                  variants={pathVariants}
                  d="M318.5 412.5L318.5 316.5C236.1 311.7 211.833 242.167 210 208L114 208C122.8 369.6 247.5 412.5 318.5 412.5Z"
                  stroke="#2AF598"
                  strokeWidth="12"
                />
              </motion.svg>
              <span className="font-semibold text-[#121212] dark:text-white">
                Tanvir
              </span>
            </Link>
          </li>
          <div className="flex items-center">
            <li className="">
              <button>
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
            <li className="ml-3">
              <button>
                {!isMenuOpen ? (
                  <AlignJustify
                    size={25}
                    strokeWidth={2.5}
                    onClick={() => setIsMenuOpen(true)}
                  />
                ) : (
                  <X
                    size={25}
                    strokeWidth={2.5}
                    onClick={() => setIsMenuOpen(!true)}
                  />
                )}
              </button>
            </li>
          </div>
        </ul>

        <ul
          className={cn("duration-300  transition-all", {
            ["h-36 visible opacity-100 mt-4"]: isMenuOpen,
            ["h-0 invisible opacity-0 -mt-2"]: !isMenuOpen,
          })}
        >
          {data.map((nav, index) => (
            <Link key={index} href={nav.path}>
              <li
                className={cn(
                  "m-2 text-[#121212] dark:text-white border border-[#2b3460] rounded-md p-1.5",
                  {
                    ["bg-[#1d2345]"]: pathname === nav.path,
                    ["text-[#ffffff]"]: pathname === nav.path,
                  },
                )}
              >
                {nav.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  useEffect(() => {
    const onScroll = () =>
      setIsScrolled(typeof window !== "undefined" && window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 md:block hidden transition-all duration-300",
          isScrolled ? "py-2 px-4" : "py-3 px-0",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 transition-all duration-300",
            isScrolled
              ? "max-w-6xl mx-auto rounded-2xl bg-[#f4f4f5] dark:bg-slate-800/95 shadow-lg px-4 py-2.5 backdrop-blur-sm"
              : "max-w-6xl mx-auto  dark:bg-[#15192f]  px-4",
          )}
        >
          {/* Left: logo + name */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex items-center rounded-lg bg-none dark:bg-none p-1.5 ring-1 ring-slate-200 dark:ring-slate-600">
              <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                width="36"
                height="36"
                viewBox="0 0 321 415"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M207 2H111C106.2 84.4 36.6667 108.667 2.5 110.5V206.5C164.1 197.7 207 73 207 2Z"
                  stroke="#08AEEA"
                  strokeWidth="12"
                  variants={pathVariants}
                />
                <motion.path
                  variants={pathVariants}
                  d="M318.5 412.5L318.5 316.5C236.1 311.7 211.833 242.167 210 208L114 208C122.8 369.6 247.5 412.5 318.5 412.5Z"
                  stroke="#2AF598"
                  strokeWidth="12"
                />
              </motion.svg>
            </span>
            <span className="text-lg font-semibold text-[#121212] dark:text-white tracking-tight">
              Tanvir
            </span>
          </Link>

          {/* Center: nav links */}
          <ul className="flex items-center justify-center gap-1 flex-1 min-w-0">
            {data.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.path}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    pathname === nav.path
                      ? isScrolled
                        ? "bg-slate-700 dark:bg-slate-600 text-white"
                        : "bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-[#121212] dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700",
                  )}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: search, theme, Hire Me */}
          <div className="flex items-center gap-3 shrink-0">
            {/* <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 px-3 py-2 min-w-[140px]">
              <Search
                size={16}
                className="text-slate-400 dark:text-slate-500 shrink-0"
              />
              <input
                type="search"
                placeholder="Search..."
                className="flex-1 min-w-0 bg-transparent text-sm text-[#121212] dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none"
                aria-label="Search"
              />
              <kbd className="hidden sm:inline-flex items-center rounded bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                ⌘K
              </kbd>
            </div> */}
            <button
              type="button"
              className={cn(
                "p-2 transition-colors rounded-full",
                isScrolled
                  ? "rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  : "bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-700 dark:hover:bg-slate-600",
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme !== "dark" ? (
                <Moon size={20} strokeWidth={1.5} />
              ) : (
                <Sun size={20} strokeWidth={1.5} />
              )}
            </button>
            <Link
              href="/#contact"
              className={cn(
                "rounded-full font-medium text-sm px-5 py-2.5 transition-colors whitespace-nowrap",
                isScrolled
                  ? "bg-white dark:bg-slate-50 text-[#121212] dark:text-black shadow-sm hover:bg-slate-100 dark:hover:bg-slate-200"
                  : "bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-700 dark:hover:bg-slate-600",
              )}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </nav>

      <MobileNavBar
        setTheme={setTheme}
        pathname={pathname}
        isMenuOpen={isMenuOpen}
        theme={theme}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

export default NavBar;
