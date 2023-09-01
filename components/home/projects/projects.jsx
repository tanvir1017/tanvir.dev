import { Github, Link } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";

const data = [
  {
    name: "Academy.py",
    desc: "A web application for Learn python in very easy way & all in one environment",
  },
  {
    name: "Miazi Farm",
    desc: "Miazi-Farm is an online marketplace for 100% natural and organic honey, honey-nuts, and organic oil. We source our products from small farmers and producers who practice sustainable agriculture. Visit our website today to learn more and place an order.",
  },
  {
    name: "Nur It Institute",
    desc: "NurIt Institute offers online courses on web development, digital marketing, and graphic design. Learn the skills you need to succeed in your chosen field. Visit our website today.",
  },
];

const Projects = () => {
  return (
    <section className="container max-w-6xl mx-auto relative mt-40">
      <div className=" flex items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="md:text-4xl text-2xl font-FiraSansBold dark:text-white text-gray-600 mb-4 tracking-wider uppercase">
            Projects
          </h2>
          <p className="">
            Some of my side projects I'm currently working on :
          </p>
        </div>
        <div>
          <button className="border border-slate-300 hover:bg-slate-100 rounded-md py-2.5 px-5 text-black dark:text-white dark:hover:text-black font-firaSansLight ">
            View all projects{" "}
            <FaLongArrowAltRight className="w-4 h-4 text-gray-400  inline-flex " />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 place-items-center mt-36">
        <div className="-rotate-90">
          <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark hover:stroke-text-light-gradient dark:hover:stroke-text-dark-gradient hover:opacity-100 md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a]">
            Projects
          </h2>
        </div>

        <div className="col-span-2 relative">
          {data.map((item, i) => (
            <div
              key={i}
              className="shadow-md cursor-pointer px-5 py-6 dark:border-gray-600 border my-3 rounded-lg relative"
            >
              <h5 className="mb-5 text-xl font-FiraSansMedium">{item.name}</h5>
              <p>{item.desc}</p>
              <div className="space-x-3 my-5">
                <button className="rounded-md px-3 py-0.5 border-[1px] dark:border-gray-600 border-slate-200">
                  React.js
                </button>
                <button className="rounded-md px-3 py-0.5 border-[1px] dark:border-gray-600 border-slate-200 ">
                  Redux.js
                </button>
                <button className="rounded-md px-3 py-0.5 border-[1px] dark:border-gray-600 border-slate-200 ">
                  Express.js
                </button>
                <button className="rounded-md px-3 py-0.5 border-[1px] dark:border-gray-600 border-slate-200 ">
                  Mongodb
                </button>
              </div>
              <div className="flex items-center">
                <span className="flex items-center dark:text-white text-gray-600 mr-4">
                  <Link size={15} className="mr-1" /> Live Here
                </span>
                <span className="flex items-center dark:text-white text-gray-600 mr-4">
                  <Github size={15} className="mr-1" /> Front-End
                </span>
                <span className="flex items-center dark:text-white text-gray-600">
                  <Github size={15} className="mr-1" />
                  Backend
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
