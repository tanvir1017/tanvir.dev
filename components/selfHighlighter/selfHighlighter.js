import { cardData } from "./data";
import style from "./selfHighlighter.module.css";

import { Pacifico } from "@next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

import { Jost } from "@next/font/google";
const jost = Jost({
  subsets: ["latin"],
});
function SelfHighlighter() {
  return (
    <>
      <div className={`headingSection ${jost.className}`}>
        <div>
          <h2
            className={`${jost.className} highLighter_title flex justify-center font-[600] text-4xl mb-16 uppercase`}
          >
            Describing
            <span
              className={`${style.textHighlighter}  ${pacifico.className} lowercase mr-4 ml-2`}
            >
              myself
            </span>{" "}
            into three sentence
          </h2>
        </div>
        <div className="px-16">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {cardData.map((data, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={`${style.cardBg} rounded-xl p-12 space-y-4 even:overflow-hidden even:h-[30rem] even:border-b-2 even:border-b-[#ff6f91]`}
                  >
                    {data.icon}
                    <h4 className="text-2xl font-bold">{data.title}</h4>
                    <p className="text-1xl text-gray-300">{data.desc}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelfHighlighter;
