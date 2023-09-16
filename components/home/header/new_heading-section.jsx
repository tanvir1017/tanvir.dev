import Image from "next/image";
import Link from "next/link";
import Blur from "./blur";

function NewHeadingSection() {
  return (
    <section className="border-general relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#15192f] dark:bg-none h-screen flex">
      <Blur />
      <div className="px-3 m-auto max-w-6xl">
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
                    <div className="mt-7 space-y-3 pr-3 max-w-xl">
                      <p>
                        I love building tools that are user-friendly, simple and
                        delightful and focused on javascript language 💘
                      </p>
                      <p className="md:block hidden">
                        Back on June 6th, 2021 [27 months], I started learning
                        the fundamentals of Front-end Or MERN Stack development.
                        I am an undergraduate student from Dhaka Polytechnic
                        Institute. I completed studies in computer science
                        engineering diploma from this college.
                      </p>

                      <p className="md:block hidden">
                        Through these experiences, I developed many projects
                        both small and mid-large with the MERN stack. I'm
                        currently looking for a new role as a Front-end/MERN
                        Stack developer. Hire me?
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
            <div className="z-20 md:block hidden  md:order-2 order-1">
              <Image
                src="/author/author.webp"
                alt="Author image"
                width={330}
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
      </div>
    </section>
  );
}

export default NewHeadingSection;
