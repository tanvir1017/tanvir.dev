import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function AboutHeading() {
  const shouldReduceMotion = useReducedMotion();

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="max-w-6xl mx-auto md:mt-20 mt-0 md:border md:border-slate-200 dark:border-gray-600 rounded-lg py-12 md:dark:bg-[#202330] bg-transparent dark:backdrop-blur-md bg-slate-100 px-3">
      <div className="grid md:grid-cols-2 place-items-start md:justify-items-end justify-items-end md:px-5 px-2">
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
          className="md:order-1 order-2"
        >
          <div className="flex">
            <motion.h1
              variants={childVariants}
              className="md:text-5xl text-2xl font-HubotSansBlack mt-5"
            >
              HALLO!
            </motion.h1>
            <motion.h2
              variants={childVariants}
              className="md:text-5xl text-2xl font-HubotSansBlack mt-5"
            >
              🙋‍♂️
            </motion.h2>
          </div>

          <motion.p
            variants={childVariants}
            className="text-base md:mt-12 mt-6"
          >
            I'm called Tanvir. As a passionate Javascript Developer, I love to
            build tools user-friendly, elegant, and delightful code that leaves
            a lasting impression.
          </motion.p>

          <motion.p variants={childVariants} className="text-base my-4">
            Back on June 6th, 2021 [27 months], I started learning the
            fundamentals of Front-end Or MERN Stack development. I am an
            undergraduate student from Dhaka Polytechnic Institute. I completed
            studies in computer science engineering diploma from this college.
          </motion.p>

          <div className="space-x-3 mt-10 ">
            <button className="border bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md py-2.5 px-5 dark:text-black text-white   uppercase tracking-wider">
              <a
                href="https://github.com/tanvir1017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center "
              >
                <BsGithub className="mr-2" /> Github
              </a>
            </button>
            <button className="border border-slate-300 hover:bg-slate-100 rounded-md py-2.5 px-5 text-black dark:text-white dark:hover:text-black   uppercase">
              <Link href="/blogs" className="flex items-center ">
                <RiDashboardFill className="mr-2" />
                Articles
              </Link>
            </button>
          </div>
        </motion.div>
        <div className="md:block hidden  md:order-2 order-1">
          <Image
            src="/author/about-me.webp"
            alt="Author image"
            width={350}
            height={100}
            priority
            className="rounded-2xl"
          />
        </div>
        <div className="md:hidden block md:order-2 order-1">
          <Image
            src="/author/mobile-view-author.png"
            alt="Author image"
            width={200}
            height={100}
            priority
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHeading;
