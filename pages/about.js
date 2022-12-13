import { motion as m } from "framer-motion";
import Image from "next/image";
import { metaTagAbout as metaTag } from "../components/localData/localData";
import Meta from "../components/meta/meta";

function About() {
  return (
    <main className="lg:large_container m_container">
      <Meta metaTag={metaTag} />
      <div className="grid grid-cols-4 place-items-start gap-4">
        <div className="mr-10">
          <h1>Here are a few technologies I’ve been working with recently:</h1>
          <ul>
            <li>Javascript(ES6+)</li>
            <li>React.js </li>
            <li>Next.js</li>
            <li> Tailwind CSS</li>
            <li> Material UI </li>
            <li> Typescript</li>
          </ul>
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="w-[280px] h-[330px] bg-white/5 bg-center bg-cover rounded-lg bg-[url('/about-me.jpg')] relative border border-r-0  p-1"
        >
          <m.div className="rounded-lg w-[280px] z-10 h-[375px] absolute -ml-4 -mt-6 block grayscale -rotate-3 border border-r-0  p-1">
            <Image
              className="rounded-lg"
              width={280}
              height={240}
              src="/about-me.jpg"
              alt="avatar"
            />
          </m.div>
        </m.div>

        <div className="col-span-2 -ml-7">
          <h1>About me</h1>
          <p>
            Hello, I am Tanvir Hossain. I am Javascript Developer that focuses
            on Javascript library called React.Js. I have a passion for web
            accessibility, design system, web security etc. I love to write
            clean code.
          </p>
          <p>
            I have been doing frontend development around 1.6 years. And I love
            to most of the things using Javascript. I have done many projects
            that focuses on MERN stack.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
