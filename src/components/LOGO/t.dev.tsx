import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const svgVariants = {
  hidden: {
    // rotate: -180,
  },
  visible: {
    // rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const LOGO = () => {
  return (
    <>
      <Link href="/" className="">
        <span className="tracking-wider text-4xl flex items-center">
          <motion.svg
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            width="45"
            height="45"
            viewBox="0 0 321 415"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <motion.path
              d="M207 2H111C106.2 84.4 36.6667 108.667 2.5 110.5V206.5C164.1 197.7 207 73 207 2Z"
              stroke="#08AEEA"
              strokeWidth="12"
              variants={pathVariants}
            />
            <motion.path
              variants={pathVariants}
              d="M318.5 412.5L318.5 316.5C236.1 311.7 211.833 242.167 210 208L114 208C122.8 369.6 247.5 412.5 318.5 412.5Z"
              stroke="#2AF598"
              strokeWidth="12"
            />
          </motion.svg>
          {/* <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#08AEEA] to-[#2AF598] font-CaveatSemi text-2xl">
            .dev
          </span>{" "} */}
        </span>
      </Link>
    </>
  );
};

export default LOGO;
