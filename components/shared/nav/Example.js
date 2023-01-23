import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { MdDarkMode, MdOutlineSettingsBrightness } from "react-icons/md";

export default function Example() {
  const { resolvedTheme, systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log(theme);
  }, [theme]);
  if (!mounted) {
    return null;
  }
  let src;
  switch (resolvedTheme) {
    case "dark":
      src = <MdDarkMode />;
      break;
    case "light":
      src = <BsSunFill />;
      break;

    default:
      src = <MdOutlineSettingsBrightness />;
      break;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);
  return (
    <Menu as="div" className="relative inline-block m-auto">
      <div>
        <Menu.Button className=" dark:backdrop-blur-sm  dark:bg-white/5 rounded-full p-2  font-medium text-[#121212] dark:text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 border-2 border-[#121212] dark:border-white   focus-visible:ring-opacity-75">
          <span className="flex items-center justify-center text-3xl">
            {src}
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={` absolute right-0 mt-2 w-56 origin-top-right  rounded-md bg-white/5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
        >
          <div className={` px-1 py-1 `}>
            <div onClick={() => setTheme("dark")}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-gradient-to-r from-[#df027b] text-white"
                        : "text-black dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-lg`}
                  >
                    <CiDark /> <span className="ml-3">Dark</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div onClick={() => setTheme("light")}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-gradient-to-r from-[#9e0158] text-white"
                        : "text-black dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-lg`}
                  >
                    <BsSunFill /> <span className="ml-3">Light</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div onClick={() => setTheme("system")}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-gradient-to-r from-[#ff008c] text-white"
                        : "text-black dark:text-white"
                    } group flex items-center w-full rounded-md px-2 py-2 text-lg`}
                  >
                    <MdOutlineSettingsBrightness />{" "}
                    <span className="ml-3">System</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}