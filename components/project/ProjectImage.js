import { motion as m } from "framer-motion";
import Image from "next/image";
import { AiFillCode } from "react-icons/ai";
import { BsServer } from "react-icons/bs";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";
import style from "./project.module.css";

function ProjectImage({ expander, stack, layoutId, title, links, id }) {
  return (
    <div>
      <m.div
        className="dark:bg-white/5 backdrop-blur-lg bg-black/5   grid p-5 rounded-lg relative z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <m.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute backdrop-blur-lg bg-white/30  rounded-lg w-14 h-[56px] grid place-items-center top-0 left-0 lg:right-0 right-3  bottom-0 cursor-pointer text-black"
          onClick={() => expander(layoutId)}
        >
          <FaCompressArrowsAlt />
        </m.span>
        <Image
          src={`/projects/${layoutId}.webp`}
          width={800}
          height={100}
          alt={title}
          className="rounded-lg"
        />
        <ul className="flex justify-center flex-wrap items-center space-x-2 my-3 space-y-3">
          {stack.map(
            (
              {
                html,
                css,
                Bootstrap,
                Tailwind,
                Mongodb,
                Express,
                Redux,
                PracticeProject,
                ReactRouter,
                Firebase,
              },
              i
            ) => (
              <>
                {html && (
                  <li
                    key={i + 2}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {html}
                  </li>
                )}
                {css && (
                  <li
                    key={i + 3}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {css}
                  </li>
                )}
                {Bootstrap && (
                  <li
                    key={i + 5}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {Bootstrap}
                  </li>
                )}
                {Tailwind && (
                  <li
                    key={i + 6}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {Tailwind}
                  </li>
                )}
                {Mongodb && (
                  <li
                    key={i + 7}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {Mongodb}
                  </li>
                )}
                {Express && (
                  <li
                    key={i + 8}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {Express}
                  </li>
                )}
                {ReactRouter && (
                  <li
                    key={i + 9}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {ReactRouter}
                  </li>
                )}
                {Redux && (
                  <li
                    key={i + 10}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {Redux}
                  </li>
                )}
                {Firebase && (
                  <li
                    key={i + 11}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {Firebase}
                  </li>
                )}
                {PracticeProject && (
                  <li
                    key={i + 12}
                    className={`${style.techLi} px-5 py-1 rounded-full bg-white/5`}
                  >
                    {PracticeProject}
                  </li>
                )}
              </>
            )
          )}
        </ul>
      </m.div>
      <m.div>
        <m.ul
          className="flex justify-center items-center space-x-3 mt-6 z-[-10]"
          initial={{ opacity: 0, y: "-30px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {links.map(({ server, code, live }, i) => (
            <>
              {code && (
                <m.li
                  key={i + 13}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="dark:bg-white/5 bg-[#121212] px-6 py-1 rounded-full"
                >
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <AiFillCode className="mr-2" /> Code
                  </a>
                </m.li>
              )}
              {server && (
                <m.li
                  key={i + 14}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="dark:bg-white/5 bg-[#121212] px-6 py-1 rounded-full"
                >
                  <a
                    href={server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <BsServer className="mr-2" /> Server
                  </a>
                </m.li>
              )}
              {live && (
                <m.li
                  key={i + 15}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="dark:bg-white/5 bg-[#121212] px-6 py-1 rounded-full"
                >
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <IoIosOpen className="mr-2" /> Live
                  </a>
                </m.li>
              )}
            </>
          ))}
        </m.ul>
      </m.div>
    </div>
  );
}

export default ProjectImage;
