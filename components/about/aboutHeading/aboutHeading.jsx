import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function AboutHeading() {
  return (
    <div className="container max-w-6xl mx-auto mt-20 border border-slate-200 dark:border-gray-600 rounded-lg py-12 dark:bg-[#33333360] dark:backdrop-blur-md bg-slate-100">
      <div className="grid md:grid-cols-2 place-items-start justify-items-end">
        <div>
          <h1 className="md:text-5xl text-2xl font-poppinsBold">
            More About Me
          </h1>
          <p className="text-lg mt-12">
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
        <div className="rounded-lg block grayscale">
          <Image
            className="rounded-lg"
            width={350}
            height={100}
            src="/about-me.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHeading;
