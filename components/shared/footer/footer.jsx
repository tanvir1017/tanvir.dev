import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:px-0 px-3 md:mt-36 mt-12 pb-20">
      <div className="jostRegular text-black dark:text-white max-w-6xl mx-auto text-center">
        <ul className="flex justify-center items-center space-x-8">
          {[
            { href: "/about", siteMap: "About" },
            { href: "/blogs", siteMap: "Blogs" },
            { href: "/projects", siteMap: "Projects" },
          ].map(({ href, siteMap }, i) => (
            <li key={i}>
              <Link
                className="hover:text-[#2AF598] transition-all duration-300 "
                href={href}
              >
                {siteMap}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Right reserved, Designed & Developed by &#x24B8;{" "}
          <span className="extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#08AEEA] to-[#2AF598]">
            Tanvir Hossain
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
