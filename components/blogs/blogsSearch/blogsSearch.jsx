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
      <div className="text-center mt-36 dark:text-white text-[#121212]">
        <h2 className="font-firaSansSemiBold uppercase text-4xl">
          Search Articles by topics or titles
        </h2>
        <p className="capitalize mb-11">
          Find my Latest Articles & Blogs from here
        </p>
      </div>
      <div className="mb-12">
        <form onSubmit={handleOnSubmit}>
          <label className="block text-center text-black relative overflow-hidden ">
            <div
              className={classNames(
                "absolute cursor-pointer text-white text-3xl top-[50%] delay-150 transition-all duration-500 -translate-x-[50%] -translate-y-[50%] p-2 rounded-full z-10 bg-gradient-to-tr from-[#2AF598] to-[#08AEEA]",
                {
                  ["left-[50%]"]: !focusInput,
                  ["left-[90%]"]: focusInput,
                  ["delay-[0ms]"]: !focusInput,
                }
              )}
              onClick={handleFocusedInput}
            >
              <FiSearch />
            </div>
            <input
              type="text"
              className={classNames(
                "transition-all duration-500 p-4 dark:bg-slate-50 bg-slate-100  focus:outline-none  rounded-full",
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