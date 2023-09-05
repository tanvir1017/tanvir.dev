import { motion, useScroll, useTransform } from "framer-motion";

const ProjectHeading = () => {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0", "70%"]);
  return (
    <section className="container relative h-screen flex">
      <motion.div style={{ y }} className="m-auto">
        <h2
          // style={{ y }}
          className="stroke-text-light dark:stroke-text-dark  md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a]"
        >
          Among my
        </h2>
        <h2
          // style={{ y }}
          className="text-center stroke-text-light dark:stroke-text-dark  md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider text-[#0605051a]"
        >
          <span className="stroke-text-light-gradient opacity-100">
            creations
          </span>
          <span className="opacity-10">are</span>
        </h2>
        <h2
          style={{ y }}
          className="grid justify-items-end  stroke-text-light dark:stroke-text-dark  md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a]"
        >
          the following
        </h2>
      </motion.div>
    </section>
  );
};

export default ProjectHeading;
