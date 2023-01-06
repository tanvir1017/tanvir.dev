import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";

const Custom404 = () => {
  const [routerPath, setRouterPath] = useState("/");
  const router = useRouter();
  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    const prevPath = storage.getItem("prevPath");
    const currentPath = storage.getItem("currentPath");
    if (prevPath !== currentPath) {
      return setRouterPath(prevPath);
    }
    setRouterPath("/about");
  }, [router.path]);

  return (
    <div className="page404 w-full h-[100%] absolute inset-0 lg:p-[6rem] p-0">
      <div className="pageNotFoundItem bg-white rounded-[30px] ">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row lg:p-[5rem] p-[2.5rem]">
          <div className="lg:space-y-3 lg:mt-0 mt-8">
            <h1 className="font-jostBold text-6xl text-gray-700">404</h1>
            <p className="font-bold text-7xl text-gray-800 lostText">
              Lost in Space
            </p>
            <div className="text-gray-800 py-6">
              <p>You have reached the end of the universe.</p>
              <p>The page you requested could not be founded.</p>
              <p>Don&apos;t lose your patient and return to home</p>
            </div>
            <div className="relative">
              <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0  justify-start items-center space-x-6">
                <m.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full px-6 py-2 bg-[#312255] text-white`}
                >
                  <Link href="/">GO HOME</Link>
                </m.button>
                <m.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full px-6 py-2 bg-[#312255] text-white`}
                  onClick={() => router.push(routerPath)}
                >
                  GO BACK
                </m.button>
              </div>
              <div className="flex items-center space-x-4 lg:pb-0 lg:pt-0 pb-8 pt-2 text-gray-600 absolute left-14 mt-5">
                <a
                  href="https://facebook.com/tanvir1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-2 ring-gray-600 rounded-full ring-offset-4 "
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://instagram.com/mdtan_vir037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-2 ring-gray-600 rounded-full ring-offset-4 "
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://linkedin.com/tanvir1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-2 ring-gray-600 rounded-full ring-offset-4 "
                >
                  <ImLinkedin />
                </a>
                <a
                  href="https://twitter.com/tanvi1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-2 ring-gray-600 rounded-full ring-offset-4 "
                >
                  <SiTwitter />
                </a>
                <a
                  href="https://github.com/tanvir1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-2 ring-gray-600 rounded-full ring-offset-4 "
                >
                  <GoMarkGithub />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image src="/404.gif" alt="404" width={500} height={100} />
          </div>
        </div>
        <div className="text-gray-400 text-center p-2 ">
          <p className="font-jostMedium">
            &#169; All terms & condition are reserved by Tanvir.
            <span className="font-caveatRegular text-gray-500">dev</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
