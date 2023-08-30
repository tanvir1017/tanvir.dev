import Link from "next/link";
import { data } from "../nav/navLink";
import style from "./navbar.module.css";
const NavBar = () => {
  return (
    <nav className="py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <ul>
          <li>
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
          {/* <m.li className="ml-5">
          <Theme conditionalClasses={conditionalClasses} />
        </m.li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
