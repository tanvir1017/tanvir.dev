import Link from "next/link";

import style from "./navbar.module.css";
import { data } from "./navLink";

function MobileNav() {
  return (
    <div className={`${style.navBg} px-12 py-2`}>
      <div className="flex justify-between items-center">
        <ul>
          <li className={``}>
            <Link href={"/"}>
              <span
                className={`${style.animatedText} ${jost.className} text-4xl`}
                style={{ fontWeight: "900" }}
              >
                Tanvir
              </span>
              <span className={`${pacifico.className} text-white`}>.dev</span>{" "}
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
  );
}

export default MobileNav;
