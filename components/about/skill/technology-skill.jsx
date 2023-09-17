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
    userName: "Github, Git, Firebase, etc.",
    icon: <PiCodesandboxLogoLight className="text-2xl" />,
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white ",
  },
];

function TechnologySkills() {
  return (
    <section className="md:px-0 max-w-6xl mx-auto px-3">
      <div className="md:mt-36 mt-10">
        <div className="relative md:pb-16 pb-6">
          <div className="absolute inset-0 m-auto text-center">
            <h2 className="stroke-text-light dark:stroke-text-dark md:text-9xl text-2xl uppercase font-poppinsBlack tracking-wider opacity-10 text-[#0605051a] md:inline-block hidden">
              Technological skills
            </h2>
          </div>
          <h3 className="md:text-4xl text-2xl font-firaSansBold dark:text-white text-gray-600 mb-4 tracking-wider uppercase inline-block border dark:border-gray-600 border-slate-300 px-8 py-1.5 backdrop-blur-sm bg-[#d1c9c908]">
            Tech skills
          </h3>
        </div>
      </div>

      <div className="md:mt-16   relative z-20">
        <div className="grid md:grid-cols-2 gap-3">
          {reachMeData.map((item, i) => (
            <div
              key={i}
              className="flex items-center border dark:border-gray-600 border-slate-300 p-5 rounded-md hover:bg-slate-50 dark:hover:bg-[#d1c9c908]"
            >
              <span className={`${item.className} p-2 rounded-md box-shadows`}>
                {item.icon}
              </span>
              <a href={item.link} className="ml-8" rel="noopener noreferrer">
                <h6 className="md:text-xl text-base font-firaSansBold tracking-wider dark:text-white text-gray-700">
                  {item.title}
                </h6>
                <p className="dark:text-white text-gray-600">{item.userName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologySkills;
