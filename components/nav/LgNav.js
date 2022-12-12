import Link from "next/link";

import style from "./navbar.module.css";
import { data } from "./navLink";

function LgNav() {
  return (
    <div className="pt-3 lg:block hidden">
      <div className={`${style.navBg} font-jostRegular px-12 py-5`}>
        <div className="flex justify-between items-center">
          <ul>
            <li className={``}>
              <Link href={"/"}>
                <span
                  className={`${style.animatedText} font-jostBold  text-4xl`}
                  style={{ fontWeight: "900" }}
                >
                  Tanvir
                </span>
                <span className={`font-caveatMedium text-white`}>.dev</span>{" "}
              </Link>
            </li>
          </ul>
          <ul className="flex">
            {data.map((nav, index) => (
              <li key={index} className="m-2">
                <Link href={nav.path} className={`${style.linkText} `}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LgNav;
