import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import headingSection from "../../header/heading.module.css";
import Social from "../../shared/social/social";

function AboutHeading() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 space-y-5 md:space-y-0 gap-4">
        <m.div
          initial="initial"
          animate="visible"
          className="my-12 md:my-0 md:px-5 lg:px-0 px-5 "
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
            transition={{ duration: 0.5 }}
            className={`${headingSection.animatedText} font-jostBlack lg:text-6xl text-5xl`}
            style={{ lineHeight: "1.1" }}
          >
            Hello,there!
            <div className="block "></div>
            Tanvir is at your
            <div className=" block "></div>
            service___
          </m.h1>
        </m.div>

        <m.div className="w-[280px] h-[330px] bg-center  bg-cover rounded-lg bg-[url('/about-me.jpg')] relative ml-12">
          <m.div
            className="rounded-lg w-[280px] h-[375px] absolute -ml-7 -mt-6 block grayscale border-2 border-r-0  p-1"
            animate={{
              rotate: [0, -7],
            }}
            transition={{
              duration: 0.85,
              ease: "easeInOut",
              times: [0, 0.2],
              delay: 0.4,
            }}
          >
            <Image
              className="rounded-lg"
              width={280}
              height={240}
              src="/about-me.jpg"
              alt="avatar"
            />
          </m.div>
        </m.div>

        <m.div
          className="md:-ml-5 ml-0 md:px-5 lg:px-0 px-5 md:pt-0 pt-8 overflow-hidden"
          initial="initial"
          animate="visible"
          variants={{
            initial: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <m.div className="space-y-2" variants={childVariants}>
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
          </m.div>

          <m.div variants={childVariants} className="social">
            <Social />
          </m.div>
        </m.div>
      </div>
    </>
  );
}

export default AboutHeading;
