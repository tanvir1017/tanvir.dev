import { motion, useReducedMotion } from "framer-motion";
import { FaDatabase, FaLanguage } from "react-icons/fa";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { PiCodesandboxLogoLight } from "react-icons/pi";
const reachMeData = [
  {
    title: "Programming Languages",
    userName: "JavaScript(E6+), TypeScript.",
    icon: <FaLanguage className="text-2xl text-white" />,
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white",
  },
  {
    title: "Databases",
    userName: "Mongodb.",
    icon: <FaDatabase className="text-2xl" />,
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white",
  },
  {
    title: "Framework & Library",
    userName:
      "React, NextJS, Redux, Express, Tailwind, React Bootstrap, Material UI more.",
    icon: <MdOutlineLocalLibrary className="text-2xl" />,
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white",
  },
  {
    title: "Developer Tools",
    userName: "Github, Git, Firebase, Figma, PhotoShop etc.",
    icon: <PiCodesandboxLogoLight className="text-2xl" />,
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white ",
  },
];

function TechnologySkills() {
  const shouldReduceMotion = useReducedMotion();

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="md:px-0 max-w-6xl mx-auto px-3">
      <div className="md:mt-36 mt-10">
        <div className="relative md:pb-16 pb-6">
          <div className="absolute inset-0 m-auto text-left">
            <h2 className="stroke-text-light dark:stroke-text-dark 2xl:text-9xl lg:text-[7rem] break-words lg:leading-[6rem] uppercase poppinsBlack tracking-wider opacity-10 text-[#0605051a] md:inline-block hidden font-HubotSansBlack">
              Tech skills
            </h2>
          </div>
          <h3 className="md:text-4xl text-2xl  dark:text-white text-gray-600 mb-4 tracking-wider uppercase inline-block border dark:border-gray-600 border-slate-300 px-8 py-1.5 backdrop-blur-sm bg-[#d1c9c908]">
            Tech skills
          </h3>
        </div>
      </div>

      <div className="md:mt-16   relative z-20">
        <motion.div
          initial="initial"
          animate="visible"
          variants={{
            initial: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid md:grid-cols-2 gap-3"
        >
          {reachMeData.map((item, i) => (
            <motion.div
              variants={childVariants}
              key={i}
              className="flex items-center border dark:border-gray-600 border-slate-300 p-5 rounded-md hover:bg-slate-50 dark:hover:bg-[#d1c9c908]"
            >
              <span className={`${item.className} p-2 rounded-md box-shadows`}>
                {item.icon}
              </span>
              <a href={item.link} className="ml-8" rel="noopener noreferrer">
                <h6 className="md:text-xl text-base  tracking-wider dark:text-white text-gray-700 font-bold">
                  {item.title}
                </h6>
                <p className="dark:text-white text-gray-600 text-sm mt-2">
                  {item.userName}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechnologySkills;
