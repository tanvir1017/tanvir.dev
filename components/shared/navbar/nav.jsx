import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../nav/navLink";
import style from "./navbar.module.css";

import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [theme]);
  if (!mounted) {
    return null;
  }

  return (
    <nav className="py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <ul>
          <li>
            <Link href={"/"}>
              <span className="font-firaSansBold tracking-wider text-4xl">
                Tanvir
              </span>
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#08AEEA] to-[#2AF598] font-caveatSemiBold text-2xl">
                .dev
              </span>{" "}
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
