"use client";

import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";

const reachMeData = [
  {
    title: "E-Mail",
    userName: "tanvir.hossaindev1@gmail.com",
    icon: <HiOutlineEnvelope className="text-2xl text-white" />,
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white",
  },
  {
    title: "Github",
    userName: "/tanvir1017",
    icon: <AiFillGithub className="text-2xl" />,
    link: "https://github.com/tanvir1017",
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white",
  },
  {
    title: "LinkedIn",
    userName: "/in/tanvir1017",
    icon: <BsLinkedin className="text-2xl" />,
    link: "https://www.linkedin.com/in/tanvir1017",
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white",
  },
  {
    title: "Facebook",
    userName: "/tanvir1017",
    icon: <BsFacebook className="text-2xl" />,
    link: "https://www.facebook.com/tanvir1017",
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white",
  },
];

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="md:container max-w-6xl mx-auto md:mt-44 mt-12 px-2">
      <div className="sm:text-center text-left relative md:pb-28 pb-10">
        <div className="absolute inset-x-0 md:block hidden">
          <h2 className="stroke-text-light dark:stroke-text-dark  md:text-9xl  uppercase poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a] inline-block font-HubotSansBlack">
            Reach Me
          </h2>
        </div>
        <div className="absolute inset-x-0">
          <h3 className="md:text-4xl text-2xl  dark:text-white text-gray-600 mb-4 tracking-wider uppercase inline-block border dark:border-gray-600 border-slate-300 px-8 py-1.5 backdrop-blur-sm bg-[#d1c9c908] ">
            Reach Me
          </h3>
        </div>
      </div>
      <div className="mb-44 mt-16 md:max-w-3xl max-w-full md:mx-auto">
        <div className="grid md:grid-cols-2 gap-3">
          {reachMeData.map((item, i) => (
            <div
              key={i}
              className="flex items-center border dark:border-gray-600 border-slate-300 md:p-5 p-3 rounded-md hover:bg-slate-50 dark:hover:bg-[#d1c9c908] "
            >
              <div className={`${item.className} p-2 rounded-md box-shadows`}>
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                  {item.icon}
                </a>
              </div>

              <div className="ml-8">
                <h6 className="text-xl font-bold dark:text-slate-300 text-gray-700">
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>
                </h6>
                <p className="dark:text-slate-300 text-gray-600 md:text-base text-sm">
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.userName}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-sm mx-auto mt-5"></div>
      </div>
    </section>
  );
};

export default ContactMe;
