import { motion as m } from "framer-motion";
import BlogsSearch from "../blogsSearch/blogsSearch";

export default function BlogFilter({ allTagSet, titles }) {
  return (
    <>
      <BlogsSearch titles={titles} />

      <m.div className="flex items-center space-x-3 justify-center flex-wrap ">
        {[...allTagSet].map((tag, index) => {
          return (
            <m.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 cursor-pointer border-2 "
              style={{
                borderImage:
                  "linear-gradient(to bottom, #ff008c, rgba(0, 0, 0, 0)) 1 1 1 10%",
              }}
            >
              {tag}
            </m.div>
          );
        })}
      </m.div>
    </>
  );
}
