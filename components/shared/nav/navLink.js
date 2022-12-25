import { BiHomeSmile } from "react-icons/bi";
import { IoMdAnalytics } from "react-icons/io";
import { RiAppsFill, RiPagesFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";

export const data = [
  { title: "Home", icon: <BiHomeSmile />, path: "/" },
  { title: "About", icon: <SiAboutdotme />, path: "/about" },
  { title: "Blogs", icon: <RiPagesFill />, path: "/blogs" },
  { title: "Project", icon: <RiAppsFill />, path: "/projects" },
  {
    title: "Dashboard",
    icon: <IoMdAnalytics />,
    path: "/dashboard",
  },
];
