import Image from "next/legacy/image";
import Link from "next/link";
import Blur from "./blur";

function NewHeadingSection() {
  return (
    <section className="border-general relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#15192f] dark:bg-none h-screen flex">
      <Blur />
      <div className=" px-3 m-auto max-w-6xl ">
        <div className="">
          <div className="grid md:grid-cols-3 place-items-start justify-items-end">
            <div className="md:col-span-2 md:order-1 order-2">
              <div className="md:flex md:text-left text-center flex md:flex-row flex-col-reverse justify-between items-center">
                <div className="dark:text-white text-[#121212] space-y-2 lg:mt-0 mt-12">
                  <div className="lg:overflow-hidden pb-8">
                    <h1 className="md:text-5xl text-2xl font-firaSansExtraBold tracking-wide">
                      Hello! I'm Tanvir, a Front-End developer
                      <div className="md:hidden block "></div>
                    </h1>
                    <div className="mt-7 space-y-3 pr-3">
                      <p>
                        I love building tools that are user-friendly, simple and
                        delightful.
                      </p>
                      <p className="md:block hidden">
                        I was a student at Lambda School where I spent 8 months
                        learning the fundamentals of front-end and back-end web
                        development. I also worked at Lambda where my role was
                        split between helping scale processes through
                        automation's and overseeing student teams.
                      </p>
                      <p className="md:block hidden">
                        Through these experiences, I had the opportunity to work
                        with both small and large, specialized and
                        cross-functional teams across different time zones and
                        developed a working style that leans towards
                        flexibility, clarity, and collaboration. I'm currently
                        looking for a new role as a developer. Hire me?
                      </p>
                    </div>
                  </div>

                  <div className="space-x-3">
                    <button className="border bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md py-2.5 px-5 dark:text-black text-white dark:font-firaSansRegular font-firaSansExtraLight uppercase tracking-wider">
                      <a
                        href="https://drive.google.com/file/d/1kFNHhnbpWtBVQTTyCuSiqJhygGNBgBGH/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get my resume
                      </a>
                    </button>
                    <button className="border border-slate-300 hover:bg-slate-100 dark:hover:bg-[#3a3a3a] rounded-md py-2.5 px-5 dark:text-white font-firaSansRegular dark:font-firaSansExtraLight uppercase">
                      <Link href="/blogs">Read blogs</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-20 md:order-2 order-1 md:block hidden">
              <Image
                src="/about-me.jpg"
                alt="Author image"
                width={350}
                height={467}
                priority
                className="rounded-2xl"
              />
            </div>
            <div className="h-48 w-48 md:hidden block relative">
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
      </div>
    </section>
  );
}

export default NewHeadingSection;
