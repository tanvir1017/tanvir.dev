import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Blur from "./blur";
function NewHeadingSection() {
  const shouldReduceMotion = useReducedMotion();

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="border-general relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#15192f] dark:bg-none h-screen flex">
      <Blur />
      <div className="px-3 m-auto max-w-6xl">
        <div className="">
          <div className="grid md:grid-cols-3 place-items-stretch lg:justify-items-stretch justify-items-end">
            <div className="md:col-span-2 md:order-1 order-2">
              <div className="md:flex md:text-left text-center flex md:flex-row flex-col-reverse justify-between items-center">
                <div className="dark:text-white text-[#121212] space-y-2 lg:mt-0 mt-12">
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
                    className="lg:overflow-hidden lg:mb-12 inline-block z-50"
                  >
                    <motion.div variants={childVariants}>
                      <h3>Hello! I'm Tanvir,</h3>
                    </motion.div>
                    <motion.div variants={childVariants}>
                      <h1 className="lg:text-7xl text-2xl font-HubotSansBlack tracking-wider my-8">
                        Web Developer.
                      </h1>
                    </motion.div>
                    <div className="mt-7 space-y-3 pr-3 max-w-xl">
                      <motion.p variants={childVariants}>
                        I love building tools that are user-friendly, simple and
                        delightful and focused on javascript language 💘
                      </motion.p>
                      <motion.p
                        variants={childVariants}
                        className="md:block hidden"
                      >
                        I have been doing frontend development almost 2 years
                        years.{" "}
                        <span title="And" alt="and">
                          그리고
                        </span>
                        , I have done many projects that focuses on MERN stack.
                        I'm a big extreme{" "}
                        <span className="font-bold">javascript 🤌</span>{" "}
                        enthusiast, also in my liked tech list includes many
                        programming languages i.e, Python 🐍
                      </motion.p>
                    </div>
                  </motion.div>
                  <div className="md:space-x-3 space-x-2 flex items-start">
                    <div className="relative group transition-transform hover:translate-y-1">
                      <button className="border bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md md:py-2.5 py-2 md:px-5 px-2 dark:text-black text-white  uppercase tracking-wider z-30  text-sm md:text-base flex items-center justify-center">
                        <span className="">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-atom"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                            <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                          </svg>{" "}
                        </span>
                        Resume Or Cv{" "}
                      </button>

                      <div className="h-0 group-hover:h-auto group-hover:pt-1 overflow-hidden absolute w-full duration-500">
                        <div className="bg-gray-100 w-full rounded-md flex items-center justify-between p-0.5">
                          <button className="border border-black/15 bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md md:py-1.5 py-1 md:px-5 px-2 dark:text-black text-white  uppercase tracking-wider z-30 text-sm md:text-base">
                            <a
                              href="https://drive.google.com/file/d/1kFNHhnbpWtBVQTTyCuSiqJhygGNBgBGH/view?usp=share_link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Resume
                            </a>
                          </button>

                          <button className="border border-black/15 bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md md:py-1.5 py-1 md:px-5 px-2 dark:text-black text-white  uppercase tracking-wider z-30 text-sm md:text-base">
                            <a
                              href="https://drive.google.com/file/d/1FCZUsoSG9yqcd3Nu912hfReQMTCf5eUM/view"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              CV
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <ResumeOrCv
                      closeModal={closeModal}
                      openModal={openModal}
                      isOpen={isOpen}
                    /> */}
                    <button className="z-30 border border-slate-300 hover:bg-slate-100 dark:hover:bg-[#3a3a3a] rounded-md md:py-2.5 py-2 md:px-5 px-2 dark:text-white uppercase relative  text-sm md:text-base">
                      <Link href="/blogs">Read blogs</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-20 md:block hidden md:order-2 order-1 border-2 p-1 dark:border-[#989898] border-[#d1d1d1] relative">
              <div className="absolute -top-2 -left-2  border-b-2 border-r-2 w-2 h-2 dark:border-[#989898] border-[#121212]"></div>
              <div className="absolute -bottom-2 -right-2  border-t-2 border-l-2 w-2 h-2 dark:border-[#989898] border-[#121212]"></div>
              <div className="absolute -bottom-2 -left-2  border-t-2 border-r-2 w-2 h-2 dark:border-[#989898] border-[#121212]"></div>
              <div className="absolute -bottom-2 -left-2  border-t-2 border-r-2 w-2 h-2 dark:border-[#989898] border-[#121212]"></div>
              <div className="absolute -top-2 -right-2  border-b-2 border-l-2 w-2 h-2 dark:border-[#989898] border-[#121212]"></div>
              <Image
                src="/author/tanvir1017.png"
                alt="Author image"
                width={330}
                height={100}
                priority
                className=""
              />
            </div>
            <div className="md:hidden block md:order-2 order-1">
              <Image
                src="/author/author-mobile.webp"
                alt="Author image"
                width={200}
                height={100}
                priority
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewHeadingSection;
