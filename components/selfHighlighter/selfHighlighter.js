import { cardData } from "./data";
import style from "./selfHighlighter.module.css";

function SelfHighlighter() {
  return (
    <>
      <div className={`lg:container m_container font-jostRegular`}>
        <div className="text-center grid place-items-center">
          <h1 className="uppercase text-4xl font-jostBold">
            Describing myself
          </h1>
          <p className="">
            <span className={` text-green-700 font-jostSemiBold`}>Into</span>{" "}
            <span className={`font-caveatMedium`}>Three Sentence</span>{" "}
          </p>
        </div>
        <div className="lg:px-16 my-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-items-center">
            {cardData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`${style.cardBg} rounded-xl lg:p-12 p-6 lg:mb-0 mb-4 space-y-4 lg:even:overflow-hidden lg:h-[25rem] lg:even:h-[30rem] even:border-b-2 even:border-b-[#ff6f91]`}
                >
                  <div className="md:w-24">{data.icon}</div>
                  <h4 className="text-2xl font-bold">{data.title}</h4>
                  <p className="text-1xl text-gray-300">{data.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelfHighlighter;
