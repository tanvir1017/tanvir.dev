import { motion as m } from "framer-motion";
import Link from "next/link";
import Social from "../social/social";

const Footer = () => {
  return (
    <>
      <footer className="font-jostRegular">
        <div className="grid place-items-center my-24 px-12">
          <m.div className="mb-16 mt-12 space-y-8">
            <m.ul className="flex justify-center items-center space-x-8">
              <m.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                {" "}
                <Link
                  className="hover:text-[#ff008c] transition-all duration-300 "
                  href="/about"
                >
                  {" "}
                  About
                </Link>
              </m.li>
              <m.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                {" "}
                <Link
                  className="hover:text-[#ff008c] transition-all duration-300 "
                  href="/blog"
                >
                  {" "}
                  Blogs
                </Link>
              </m.li>
              <m.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                {" "}
                <Link
                  className="hover:text-[#ff008c] transition-all duration-300 "
                  href="/projects"
                >
                  {" "}
                  Projects
                </Link>
              </m.li>
            </m.ul>
            <p className="text-center">Design and Develop by Tanvir Hossain</p>
            <Social />
          </m.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
