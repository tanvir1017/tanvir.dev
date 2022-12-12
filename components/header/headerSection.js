import { motion as m } from "framer-motion";
import Image from "next/image";
import style from "./heading.module.css";

function HeaderSection() {
  return (
    <m.div
    // initial={{ scale: 1.138 }}
    // animate={{ scale: 0.95 }}
    // transition={{ duration: 0.8 }}
    >
      <div className={`lg:container m_container font-jostRegular`}>
        <div className="lg:flex flex lg:flex-row flex-col-reverse justify-between items-center">
          <m.div transition={{ duration: 0.85 }} className="space-y-2">
            <p>Hi there beautiful people on the internet</p>
            <h4 className="font-semibold text-2xl ">Tanvir here</h4>
            <m.div className="lg:overflow-hidden">
              <m.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:text-6xl text-5xl font-bold"
              >
                {" "}
                <span className={`${style.animatedText} font-jostBlack`}>
                  Frontend
                </span>
                <br className="lg:hidden" />
                <span
                  className={`${style.textHighlighter} text-white font-jostBlack`}
                >
                  Developer
                </span>
              </m.h1>
            </m.div>

            <p className="pt-5">
              Mainly i am play with javascript and explore with this language
              some
              <br />
              frontend framework as like as React
            </p>
            <div className="space-x-3 pt-12">
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg backdrop-blur-0 bg-white/5 border-t-purple-500 border border-b-white/5 border-r-purple-500 border-l-white/5"
              >
                Get my resume
              </m.button>
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg backdrop-blur-0 bg-white/5 border-b-purple-500 border border-t-white/5 
              border-l-purple-500 border-r-white/5"
              >
                Read blogs
              </m.button>
            </div>
          </m.div>
          <div className="profile-image">
            <Image
              src="/avatar.png"
              width={350}
              height={350}
              alt="avatar"
            ></Image>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default HeaderSection;
