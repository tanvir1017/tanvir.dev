import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";

const reachMeData = [
  {
    title: "E-Mail",
    userName: "tanvir.hossaindev1@gmail.com",
    icon: <HiOutlineEnvelope className="text-2xl text-white" />,
    link: "",
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
    className: "bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white ",
  },
];

const ContactMe = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-36">
      <div className="text-center relative pb-28">
        <div className="absolute inset-x-0 ">
          <h2 className="stroke-text-light dark:stroke-text-dark  md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a] inline-block">
            Reach Me
          </h2>
        </div>
        <div className="absolute inset-x-0">
          <h3 className="md:text-4xl text-2xl font-FiraSansBold dark:text-white text-gray-600 mb-4 tracking-wider uppercase inline-block border dark:border-gray-600 border-slate-300 px-8 py-1.5 backdrop-blur-sm bg-[#d1c9c908]">
            Reach Me
          </h3>
        </div>
      </div>
      <div className="mb-44 mt-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {reachMeData.map((item, i) => (
            <div
              key={i}
              className="flex items-center border dark:border-gray-600 border-slate-300 p-5 rounded-md hover:bg-slate-50 dark:hover:bg-[#d1c9c908]"
            >
              <span className={`${item.className} p-2 rounded-md box-shadows`}>
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </span>
              <a href={item.link} target="_blank" className="ml-8">
                <h6 className="text-xl font-poppinsBold dark:text-white text-gray-700">
                  {item.title}
                </h6>
                <p className="dark:text-white text-gray-600">{item.userName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
