import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { MdDarkMode, MdOutlineSettingsBrightness } from "react-icons/md";

export default function Theme({ conditionalClasses }) {
  const { background, iconPadding, iconSize } = conditionalClasses;
  const { resolvedTheme, systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Menu as="div" className="relative inline-block m-auto">
      <span className="hidden">{currentTheme}</span>
      <div>
        <Menu.Button className={``}>
          <span className={`flex items-center justify-center ${iconSize}`}>
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
          className={` absolute top-10 right-0 lg:mt-6 w-56 origin-top-right  rounded-md ${background} shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
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
