"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Blur from "./blur";
import { Button } from "@/components/ui/button";
function Header() {
  const shouldReduceMotion = useReducedMotion();

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="border-general relative w-full overflow-hidden overflow-x-clip  dark:bg-none h-screen flex ">
      <Blur />
      <Button variant="outline">Hello</Button>
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
                        Frontend Dev.
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
                        years, 그리고 I have done many projects that focuses on
                        MERN stack. I'm a big extreme{" "}
                        <span className="font-bold">javascript 🤌</span>{" "}
                        enthusiast, also in my liked tech list includes many
                        programming languages i.e, Python 🐍
                      </motion.p>
                    </div>
                  </motion.div>
                  <div className="md:space-x-3 space-x-2">
                    <button className="border bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md md:py-2.5 py-2 md:px-5 px-2 dark:text-black text-white  uppercase tracking-wider z-30 relative text-sm md:text-base">
                      <a
                        href="https://drive.google.com/file/d/1kFNHhnbpWtBVQTTyCuSiqJhygGNBgBGH/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get my resume
                      </a>
                    </button>
                    <button className="z-30 border border-slate-300 hover:bg-slate-100 dark:hover:bg-[#3a3a3a] rounded-md md:py-2.5 py-2 md:px-5 px-2 dark:text-white uppercase relative  text-sm md:text-base">
                      <Link href="/blogs">Read blogs</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-20 md:block hidden  md:order-2 order-1">
              <Image
                src="/author/author.webp"
                alt="Author image"
                width={330}
                height={100}
                priority
                className="rounded-2xl"
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

export default Header;
