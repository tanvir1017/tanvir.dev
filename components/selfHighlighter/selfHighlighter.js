import { motion as m } from "framer-motion";
import { cardData } from "./data";

function SelfHighlighter() {
  return (
    <>
      <div
        className={`lg:large_container m_container font-jostRegular text-[#121212] dark:text-white`}
      >
        <m.div
          className="text-center grid place-items-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="uppercase text-4xl font-jostBold">
            Describing myself
          </h1>
          <p className="">
            <span className={`text-[#ff008c] font-jostSemiBold`}>INTO</span>{" "}
            <span className={`font-caveatMedium`}>Three Sentence</span>{" "}
          </p>
        </m.div>
        <div className="lg:px-16 my-14">
          <m.div
            className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {cardData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`dark:bg-[#ffffff06] bg-[#000000d6] text-white shadow-md cardBg rounded-xl lg:p-12 p-6 lg:mb-0 mb-4 space-y-4 even:pb-12 even:border-b-2 even:border-b-[#d309e1] overflow-y-clip dark:shadow-none`}
                >
                  <div className="md:w-24">{data.icon}</div>
                  <h4 className="text-2xl font-bold">{data.title}</h4>
                  <p className="text-1xl dark:text-gray-300">{data.desc}</p>
                </div>
              );
            })}
          </m.div>
        </div>
      </div>
    </>
  );
}

export default SelfHighlighter;
