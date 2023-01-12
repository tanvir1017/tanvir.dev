import classNames from "classnames";
import { menuItems } from "components/shared/nav/navLink";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { CiHome } from "react-icons/ci";
import { TfiControlBackward } from "react-icons/tfi";

function Sidebar() {
  const { pathName } = useRouter();
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.path === pathName),
    [pathName]
  );
  const sideBarWrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-gray-200 flex-col text-black justify-between ",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );
  const collapseButton = classNames(
    "p-4 rounded bg-gray-200 absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-gray-200 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-gray-200"]: activeMenu?.id === menu.id,
      }
    );
  };
  return (
    <div
      className={sideBarWrapperClasses}
      onMouseEnter={() => setIsCollapsible(!isCollapsible)}
      onMouseLeave={() => setIsCollapsible(!isCollapsible)}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <Link href="/">
            <div className="flex items-center pl-1 gap-4">
              {" "}
              <CiHome />
              <span
                className={classNames(
                  "mt-2 text-lg font-jostMedium text-black",
                  {
                    hidden: toggleCollapse,
                  }
                )}
              >
                Home
              </span>
            </div>
          </Link>
          {isCollapsible && (
            <button
              className={collapseButton}
              onClick={() => setToggleCollapse(!toggleCollapse)}
            >
              <TfiControlBackward />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map((menu) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link legacyBehavior href={menu.path}>
                  <a
                    className={classNames(
                      "flex py-4 px-2 items-center w-full h-full",
                      {
                        ["space-x-4"]: !toggleCollapse,
                      }
                    )}
                  >
                    <div>{menu.icon}</div>
                    {!toggleCollapse && <span>{menu.title}</span>}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Sidebar;
