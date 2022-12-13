import React from "react";
import { socialData } from "../selfHighlighter/data";
import style from "./social.module.css";

function Social() {
  return (
    <ul className="flex items-center mt-4">
      {socialData.map(({ id, icon, name, theme }) => {
        return (
          <li
            key={id}
            title={name}
            className={`border p-3 rounded-full m-2 ${style.socialLi} cursor-pointer`}
          >
            <a href={`${id}`} target="blink">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Social;
