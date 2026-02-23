import { motion, useReducedMotion } from "framer-motion";
import {
  TbBrandGithub,
  TbBrandLeetcode,
  TbBrandLinkedin,
  TbMail,
} from "react-icons/tb";
import Blur from "./blur";

const Sparkle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

function NewHeadingSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="border-general relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#15192f] dark:bg-none md:h-screen h-[80vh] flex">
      <Blur />
      <div className="px-3 m-auto max-w-6xl z-20 isolate w-full">
        <div className="text-center dark:text-white text-[#121212]">
          <motion.div
            initial="initial"
            animate="visible"
            variants={{
              initial: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-6 lg:mt-0 mt-12"
          >
            <motion.div variants={childVariants}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/80 dark:bg-slate-600/40 px-3 py-1 text-sm text-slate-600 dark:text-slate-300">
                <Sparkle /> Full Stack Developer
              </span>
            </motion.div>
            <motion.h1
              variants={childVariants}
              className="font-HubotSansBlack tracking-normal text-4xl sm:text-5xl md:text-6xl lg:text-8xl  leading-tight max-w-7xl mx-auto"
            >
              <span className="block">
                Ideas to{" "}
                <i className="font-HubotSansItalic italic">interfaces</i>.
              </span>
              <span className="block">Then to the cloud.</span>
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-2xl"
            >
              I build and ship web applications that users love and systems that
              scale.
            </motion.p>
            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="https://drive.google.com/file/d/1kFNHhnbpWtBVQTTyCuSiqJhygGNBgBGH/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md py-2.5 px-5 dark:text-black text-white uppercase tracking-wider text-sm md:text-base shadow-lg"
              >
                Download Resume →
              </a>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center justify-center gap-3 pt-8"
            >
              <a
                href="https://github.com/tanvir1017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <TbBrandGithub classname="text-xl" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/tanvir1017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="LeetCode"
              >
                <TbBrandLeetcode className="text-xl" />
                <span className="text-sm font-medium">LeetCode</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tanvir1017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <TbBrandLinkedin className="text-xl" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:developer.tanvirhossain@gmail.com"
                className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <TbMail className="text-xl" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NewHeadingSection;
