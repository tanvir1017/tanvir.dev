import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-28">
      <div className="font-jostRegular text-black dark:text-white max-w-6xl mx-auto text-center">
        <ul className="flex justify-center items-center space-x-8">
          <li initial={{ scale: 1 }} whilehover={{ scale: 1.1 }}>
            {" "}
            <Link
              className="hover:text-[#ff008c] transition-all duration-300 "
              href="/about"
            >
              {" "}
              About
            </Link>
          </li>
          <li initial={{ scale: 1 }} whilehover={{ scale: 1.1 }}>
            {" "}
            <Link
              className="hover:text-[#ff008c] transition-all duration-300 "
              href="/blog"
            >
              {" "}
              Blogs
            </Link>
          </li>
          <li initial={{ scale: 1 }} whilehover={{ scale: 1.1 }}>
            {" "}
            <Link
              className="hover:text-[#ff008c] transition-all duration-300 "
              href="/projects"
            >
              {" "}
              Projects
            </Link>
          </li>
        </ul>
        <p className="mt-8">Design and Develop by Tanvir Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;
