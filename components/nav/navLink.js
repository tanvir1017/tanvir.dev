import { BiHomeSmile } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
// import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";

export const data = [
  { title: "Home", icon: <BiHomeSmile />, path: "/" },
  { title: "About", icon: <SiAboutdotme />, path: "/about" },
  { title: "Blogs", icon: <RiPagesFill />, path: "/blog" },
  // {
  //   title: "Contact",
  //   icon: <MdOutlineConnectWithoutContact />,
  //   path: "/contact",
  // },
  { title: "Project", icon: <GrProjects />, path: "/projects" },
];
