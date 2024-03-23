import { motion, useReducedMotion } from "framer-motion";
const ProjectHeading = () => {
  const shouldReduceMotion = useReducedMotion();

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="md:container relative md:h-screen flex px-3 mt-10">
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
        className="m-auto"
      >
        <motion.h2
          variants={childVariants}
          className="stroke-text-light dark:stroke-text-dark  md:text-9xl text-5xl uppercase font-HubotSansBlack tracking-wider  text-[#0605051a]"
        >
          <span className="opacity-10">Among my</span>
        </motion.h2>
        <motion.h2
          variants={childVariants}
          className="text-center stroke-text-light dark:stroke-text-dark  md:text-9xl text-5xl uppercase font-HubotSansBlack tracking-wider text-[#0605051a]"
        >
          <motion.span
            variants={childVariants}
            className="stroke-text-light-gradient opacity-100"
          >
            creations
          </motion.span>
          <br className="md:hidden block" />

          <span className="opacity-10 md:inline-block hidden">are</span>
          <span className="opacity-10 md:hidden block">are the</span>
        </motion.h2>
        <motion.h2
          variants={childVariants}
          className="grid justify-items-end  stroke-text-light dark:stroke-text-dark  md:text-9xl text-5xl uppercase font-HubotSansBlack tracking-wider  text-[#0605051a]"
        >
          <span className="md:inline-flex hidden opacity-10">
            the <span className="ml-7"> following</span>
          </span>
          <span className="md:hidden inline-flex"> following</span>
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default ProjectHeading;
