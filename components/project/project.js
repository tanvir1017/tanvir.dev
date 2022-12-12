/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { items } from "../localData/localData";
import ProjectCard from "./projectCard";
import Projects from "./projects";
export default function Project() {
  const [expand, setExpand] = useState(false);
  const [layoutId, setLayoutId] = useState(null);
  const [cardSplice, setCardSplice] = useState(4);

  const expander = (id) => {
    if (!expand) {
      setLayoutId(id);
      setExpand(true);
    } else {
      setLayoutId(null);
      setExpand(!true);
    }
  };

  const cardShowOrHide = () => {
    if (cardSplice === 4 || cardSplice === 6) {
      setCardSplice((prev) => prev + 2);
    } else if (cardSplice === 8) {
      setCardSplice(4);
    }
  };
  return (
    <div className="card_container relative overflow-hidden">
      <AnimateSharedLayout type="crossfade">
        <div className="grid place-items-center">
          <h1 className="uppercase text-4xl font-jostBold">Projects</h1>
          <p className="">
            <span className={` text-green-700 font-jostSemiBold`}>THAT</span>{" "}
            <span className={`font-caveatMedium`}>I&apos;ve done</span>{" "}
          </p>
        </div>
        <div className="">
          <ul className="card-list">
            {items.slice(0, cardSplice).map((card) => (
              <ProjectCard
                key={card.id}
                {...card}
                item={card}
                expander={expander}
                layoutId={card.id}
              />
            ))}
          </ul>
          <div class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-[#0d0a0a] pt-[500px] pb-8 pointer-events-none dark:from-[#121212] absolute">
            <motion.button
              onClick={cardShowOrHide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              class="relative rounded-lg backdrop-blur-0 focus:outline-none focus:ring-1  bg-white/5 border border-purple-500 focus:ring-purple-700 focus:ring-offset-2 text-sm text-white ring-offset-purple-700 font-semibold px-6 flex items-center  pointer-events-auto py-5"
            >
              {cardSplice > 4 ? "Show less..." : "Show more..."}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {expand && (
            <div className="">
              <Projects expander={expander} id={layoutId} />
            </div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
