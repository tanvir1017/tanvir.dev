import { cardData } from "./data";
import style from "./selfHighlighter.module.css";

function SelfHighlighter() {
  return (
    <>
      <div className={`container `}>
        <div className="grid place-items-center">
          <h1 className="font-[600] uppercase text-4xl">Describing myself</h1>
          <p className="">
            <span className={` text-green-700 font-semibold`}>Into</span>{" "}
            <span className={``}>Three Sentence</span>{" "}
          </p>
        </div>
        <div className="px-16 my-14">
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
