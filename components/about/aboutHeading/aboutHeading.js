import { motion as m } from "framer-motion";
import Image from "next/image";
import headingSection from "../../../components/header/heading.module.css";
import Social from "../../social/social";

function AboutHeading() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <m.div
          initial="initial"
          animate="visible"
          className=""
          variants={{
            initial: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.85, staggerChildren: 0.2 },
            },
          }}
        >
          <m.h1
            initial={{ y: "90px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${headingSection.animatedText} font-jostBlack lg:text-7xl text-5xl`}
            style={{ lineHeight: "1.1" }}
          >
            Hello,there!
            <div className="block "></div>
            Tanvir is at your
            <div className=" block "></div>
            service___
          </m.h1>
        </m.div>

        <m.div
          initial="initial"
          animate="visible"
          transition={{ duration: 0.85, delay: 0.3 }}
          className="w-[280px] h-[330px] bg-white/5 bg-center  bg-cover rounded-lg bg-[url('/about-me.jpg')] relative ml-24"
        >
          <m.div className="rounded-lg w-[280px] z-10 h-[375px] absolute -ml-4 -mt-6 block grayscale -rotate-3 border-2 border-r-0  p-1">
            <Image
              className="rounded-lg"
              width={280}
              height={240}
              src="/about-me.jpg"
              alt="avatar"
            />
          </m.div>
        </m.div>

        <div className=" -ml-7">
          <div className="space-y-2">
            <h1 className="text-5xl font-jostBold">About Me</h1>
            <p className="pt-5">
              Hello, I am Tanvir Hossain. I am Javascript Developer that focuses
              on Javascript library called React.Js. I have a passion for web
              accessibility, design system, web security etc. I love to write
              clean code.
            </p>
            <p className="pt-3">
              I have been doing frontend development around 1.6 years. And I
              love to most of the things using Javascript. I have done many
              projects that focuses on MERN stack.
            </p>
          </div>

          <div className="social">
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHeading;
