import { motion as m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Style from "./heading.module.css";

function HeaderSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <m.div
      initial="initial"
      animate="visible"
      variants={{
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="lg:large_container m_container"
    >
      <div className={`font-jostRegular`}>
        <div className="md:flex md:text-left text-center flex md:flex-row flex-col-reverse justify-between items-center">
          <m.div variants={childVariants} className="space-y-2 lg:mt-0 mt-12">
            <p>Hi there beautiful people on the internet</p>
            <h4 className="font-semibold text-2xl ">Tanvir here</h4>
            <m.div className="lg:overflow-hidden pb-8">
              <m.h1
                initial={{ y: "90px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:text-6xl text-5xl font-bold"
              >
                {" "}
                <span className={`${Style.animatedText} font-jostBlack`}>
                  Frontend
                </span>
                <div className="md:hidden block "></div>
                <span
                  className={`${Style.textHighlighter} text-white font-jostBlack`}
                >
                  Developer
                </span>
              </m.h1>
            </m.div>

            <p className="pt-5" variants={childVariants}>
              Mainly i am play with javascript and explore with this language
              some
              <br />
              frontend framework as like as React
            </p>
            <div className="space-x-3 pt-12">
              <m.button
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg backdrop-blur-0 bg-white/5 border-t-[#ff008c] border border-b-white/5 border-r-[#ff008c] border-l-white/5"
              >
                <a
                  href="https://drive.google.com/file/d/1kFNHhnbpWtBVQTTyCuSiqJhygGNBgBGH/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get my resume
                </a>
              </m.button>
              <m.button
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg backdrop-blur-0 bg-white/5 border-b-[#ff008c] border border-t-white/5 
              border-l-[#ff008c] border-r-white/5"
              >
                <Link href="/blogs">Read blogs</Link>
              </m.button>
            </div>
          </m.div>
          {/* <div className="profile-image">
            <Image
              src="/avatar.png"
              width={350}
              height={350}
              alt="avatar"
            ></Image>
          </div> */}
        </div>
      </div>
    </m.div>
  );
}

export default HeaderSection;
