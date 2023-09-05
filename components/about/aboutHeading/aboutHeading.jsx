import Image from "next/legacy/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function AboutHeading() {
  return (
    <div className="max-w-6xl mx-auto md:mt-20 mt-0 md:border md:border-slate-200 dark:border-gray-600 rounded-lg py-12 dark:bg-[#202330] dark:backdrop-blur-md bg-slate-100 px-3">
      <div className="grid md:grid-cols-2 place-items-start md:justify-items-end justify-items-end md:px-5 px-2">
        <div className="md:order-1 order-2">
          <h1 className="md:text-5xl text-2xl font-poppinsBold mt-5">
            More About Me
          </h1>
          <p className="text-lg md:mt-12 mt-6">
            Myself Tanvir. I am Javascript Developer that focuses on Javascript
            library called React.Js. I have a passion for web accessibility,
            design system, web security etc. I love to write clean code.
          </p>
          <p className="text-lg mt-5">
            I have been doing frontend development around 1.6 years. And I love
            to most of the things using Javascript. I have done many projects
            that focuses on MERN stack.
          </p>

          <div className="space-x-3 mt-10 ">
            <button className="border bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md py-2.5 px-5 dark:text-black text-white dark:font-firaSansRegular font-firaSansLight uppercase tracking-wider">
              <a
                href="https://drive.google.com/file/d/1kFNHhnbpWtBVQTTyCuSiqJhygGNBgBGH/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center "
              >
                <BsGithub className="mr-2" /> Github
              </a>
            </button>
            <button className="border border-slate-300 hover:bg-slate-100 rounded-md py-2.5 px-5 text-black dark:text-white dark:hover:text-black dark:font-firaSansRegular font-firaSansLight uppercase">
              <Link href="/blogs" className="flex items-center ">
                <RiDashboardFill className="mr-2" />
                Articles
              </Link>
            </button>
          </div>
        </div>
        <div className="grayscale md:block hidden md:order-2 order-1">
          <Image
            className="rounded-lg"
            width={350}
            height={467}
            src="/about-me.jpg"
            alt="avatar"
          />
        </div>
        <div className="h-48 w-48 md:hidden block grayscale relative md:order-2 order-1">
          <Image
            src="/about-me.jpg"
            alt="Author image"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-2xl absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHeading;
