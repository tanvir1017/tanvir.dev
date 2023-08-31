import { motion as m, useReducedMotion } from "framer-motion";

function Contact() {
  const shouldReduceMotion = useReducedMotion;
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <>
      {" "}
      <m.div
        className="grid place-items-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="font-jostBold uppercase text-4xl md:text-5xl mt-[12rem]">
          Let&apos;s connect
        </h1>
        <p className="mt-5">
          <span className="text-[#ff008c]">I am exited to work with you</span>
        </p>
      </m.div>
      <m.div
        className="md:max-w-md m-auto"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-center my-12">
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="grid place-items-center">
          <m.button
            variants={childVariants}
            whilehover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.85 }}
            className="py-3 px-6 hover:bg-[#b90d6b] rounded-full  bg-[#ff008c]"
          >
            Contact Me
          </m.button>
        </div>
      </m.div>
    </>
  );
}

export default Contact;
