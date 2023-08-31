import { Github, Link } from "lucide-react";

const data = [
  {
    name: "URL Shortener",
    desc: "A web application for shorting URLs into short. Short URLs are customizable, and the URL statistics are trackable.",
  },
  {
    name: "URL Shortener",
    desc: "A web application for shorting URLs into short. Short URLs are customizable, and the URL statistics are trackable.",
  },
  {
    name: "URL Shortener",
    desc: "A web application for shorting URLs into short. Short URLs are customizable, and the URL statistics are trackable.",
  },
];

const Projects = () => {
  return (
    <section className="container max-w-6xl mx-auto relative ">
      <h2 className="cursor-pointer hover:text-blue-300 project-heading-title-light mt-16 dark:project-heading-title-dark  md:text-9xl text-2xl uppercase font-jostBlack  tracking-wider  hover:opacity-100 inline-block opacity-10 text-[#7777771a]">
        Projects<span className="font-caveatMedium">{">"}_</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-2 place-items-start relative mt-6">
        <p className="bg-white shadow-sm z-30 ">
          Some of my side projects I'm currently working on:
        </p>

        <div className="col-span-2 relative">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md z-50 cursor-pointer px-5 py-6 border my-3 rounded-lg relative"
            >
              <h5 className="mb-5 font-jostSemiBold">{item.name}</h5>
              <p>{item.desc}</p>
              <div className="space-x-3 my-5">
                <button className="rounded-md px-3 py-0.5 border-[1px] border-slate-200">
                  React.js
                </button>
                <button className="rounded-md px-3 py-0.5 border-[1px] border-slate-200">
                  Redux.js
                </button>
                <button className="rounded-md px-3 py-0.5 border-[1px] border-slate-200">
                  Express.js
                </button>
                <button className="rounded-md px-3 py-0.5 border-[1px] border-slate-200">
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
