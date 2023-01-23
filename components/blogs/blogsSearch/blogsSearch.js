import classNames from "classnames";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
export default function BlogsSearch() {
  const [focusInput, setFocusInput] = useState(false);
  const handleFocusedInput = () => {
    if (!focusInput) {
      setFocusInput(true);
    } else {
      setFocusInput(false);
    }
  };

  useEffect(() => {}, [focusInput]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="grid place-items-center  text-center md:mt-0 mt-12 mb-8">
        <h2 className="font-jostBold uppercase text-3xl">
          Search Articles by topics or titles
        </h2>
        <p className="">
          <span className={`font-caveatMedium`}>Find</span>{" "}
          <span className={` text-green-700 font-jostSemiBold`}>MY</span>{" "}
          <span className={`font-caveatMedium capitalize `}>
            Latest Articles & Blogs from here
          </span>{" "}
        </p>
      </div>
      <div className="mb-12">
        <form onSubmit={handleOnSubmit}>
          <label className="block text-center text-black relative overflow-hidden ">
            <div
              className={classNames(
                "absolute cursor-pointer text-white text-3xl top-[50%] delay-150 transition-all duration-500 -translate-x-[50%] -translate-y-[50%] p-2 rounded-full z-10",
                {
                  ["left-[50%]"]: !focusInput,
                  ["left-[90%]"]: focusInput,
                  ["delay-[0ms]"]: !focusInput,
                }
              )}
              onClick={handleFocusedInput}
              style={{
                background: "var(--mesh-gradient)",
              }}
            >
              <FiSearch />
            </div>
            <input
              type="text"
              className={classNames(
                "transition-all duration-500 p-4 focus:outline-none  rounded-full",
                {
                  ["w-[0%] opacity-0"]: !focusInput,
                  ["w-[80%] opacity-100 "]: focusInput,
                }
              )}
              placeholder="Search something..."
            />
          </label>
        </form>
      </div>
    </>
  );
}
