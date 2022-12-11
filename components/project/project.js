/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { items } from "../localData/localData";
import Projects from "./projects";
export default function Project() {
  const [expand, setExpand] = useState(false);
  const [layoutId, setLayoutId] = useState(null);

  const expander = (id) => {
    if (!expand) {
      setLayoutId(id);
      setExpand(true);
    } else {
      setLayoutId(null);
      setExpand(!true);
    }
  };
  return (
    <div className="container relative">
      <AnimateSharedLayout type="crossfade">
        <div className="grid place-items-center">
          <h1 className="uppercase text-4xl font-jostBold">Projects</h1>
          <p className="">
            <span className={` text-green-700 font-jostSemiBold`}>THAT</span>{" "}
            <span className={`font-caveatMedium`}>I&apos;ve done</span>{" "}
          </p>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 place-items-center gap-4 my-12">
          {items.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => expander(item.id)}
              className="cursor-pointer"
              layoutId={item.id}
            >
              <img
                className="rounded-xl"
                src={`images/${item.id}.jpg`}
                alt=""
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {expand && <Projects expander={expander} id={layoutId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
