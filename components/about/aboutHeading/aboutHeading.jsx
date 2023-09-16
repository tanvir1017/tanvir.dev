import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function AboutHeading() {
  return (
    <div className="max-w-6xl mx-auto md:mt-20 mt-0 md:border md:border-slate-200 dark:border-gray-600 rounded-lg py-12 dark:bg-[#202330] dark:backdrop-blur-md bg-slate-100 px-3">
      <div className="grid md:grid-cols-2 place-items-center md:justify-items-end justify-items-end md:px-5 px-2">
        <div className="md:order-1 order-2">
          <h1 className="md:text-5xl text-2xl font-poppinsBold mt-5">
            HELLO! 👋
          </h1>
          <p className="text-base md:mt-12 mt-6">
            I'm called Tanvir(Tanu). As a passionate MERN stack developer, I
            thrive on crafting user-friendly, elegant, and delightful code that
            leaves a lasting impression.
          </p>
          <p className="text-base md:my-4 my-4">
            My journey through the world of web development has been a
            relentless pursuit of simplicity and focus. Each line of code I
            write is a testament to my commitment to creating seamless,
            intuitive user experiences. With every project, I seek not only to
            solve problems but to elevate them to new heights of efficiency and
            elegance.
          </p>
          <p className="text-base">
            Join me on this exhilarating journey, where code isn't just
            functional; it's a work of art, a reflection of my unwavering
            dedication to excellence.
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
        <div className="md:block hidden  md:order-2 order-1">
          <Image
            src="/author/about-me.webp"
            alt="Author image"
            width={350}
            height={100}
            priority
            className="rounded-2xl"
          />
        </div>
        <div className="md:hidden block md:order-2 order-1">
          <Image
            src="/author/author-mobile.webp"
            alt="Author image"
            width={200}
            height={100}
            priority
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHeading;
