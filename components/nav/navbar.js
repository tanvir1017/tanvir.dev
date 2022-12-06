import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import { data } from "./navLink";

function Navbar() {
  return (
    <div className={`${style.navBg} px-12 py-2`}>
      <div className="flex justify-between items-center">
        <ul>
          <li
            className={`${style.animatedText} text-4xl italic font-extrabold`}
          >
            <Link href={"/"}>Tanvir</Link>
          </li>
        </ul>
        <ul className="flex">
          {data.map((nav, index) => (
            <li key={index} className="m-2 font-medium">
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

export default Navbar;
