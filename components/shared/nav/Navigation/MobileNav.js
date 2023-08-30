import { motion as m, useCycle } from "framer-motion";
import Link from "next/link";
import MenuToggler from "../MenuToggoler";
import Style from "../navbar.module.css";
import Navigation from "../Navigation";
import Theme from "../Theme";

const sidebarVariants = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(20px at 40px 40px)`,
    transition: {
      duration: 0.4,
    },
  },
};

const conditionalClasses = {
  background: "dark:bg-[#121212]/90 dark:text-white bg-white text-black",
  iconPadding: "p-1",
  iconSize: "text-1xl",
};

function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <m.nav
        className="lg:hidden block"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <header
          className="py-2 px-4  bg-slate-50/30 backdrop-blur-2xl dark:bg-[#121212]/60 fixed top-0 left-0 w-full transition-all duration-500"
          style={{
            boxShadow: "2px 0px 5px 1px rgba(49, 49, 49, 0.375)",
            zIndex: 100,
          }}
        >
          <m.ul className="flex justify-end items-center space-x-5">
            <m.li
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, transition: 0.85, x: 0, delay: 0.2 }}
            >
              <Link href={"/"}>
                <span
                  className={`${Style.animatedText}  font-jostBold  text-4xl`}
                  style={{ fontWeight: "900" }}
                >
                  Tanvir
                </span>
                <span
                  className={`font-caveatMedium dark:text-white text-[#121212]`}
                >
                  .dev
                </span>{" "}
              </Link>
            </m.li>
            <m.li>
              <Theme conditionalClasses={conditionalClasses} />
            </m.li>
          </m.ul>
        </header>

        <m.div
          className="background"
          style={{ zIndex: 180 }}
          variants={sidebarVariants}
        />
        <MenuToggler className="button" toggle={() => toggleOpen()} />
        <Navigation toggle={() => toggleOpen()} isOpen={isOpen} />
      </m.nav>
    </>
  );
}

export default MobileNav;
