import { BiHomeSmile } from "react-icons/bi";
import { RiAppsFill, RiPagesFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";

export const data = [
  // { title: "Home", icon: <BiHomeSmile />, path: "/" },
  { title: "About", icon: <SiAboutdotme />, path: "/about" },
  { title: "Blogs", icon: <RiPagesFill />, path: "/blogs" },
  { title: "Project", icon: <RiAppsFill />, path: "/projects" },
  // {
  //   title: "Dashboard",
  //   icon: <IoAnalyticsSharp />,
  //   path: "/dashboard",
  // },
  // {
  //   title: "Sign-in",
  //   icon: <IoLogIn />,
  //   path: "/signin",
  // },
];
export const mobileLinkData = [
  { title: "Home", icon: <BiHomeSmile />, path: "/" },
  { title: "About", icon: <SiAboutdotme />, path: "/about" },
  { title: "Blogs", icon: <RiPagesFill />, path: "/blogs" },
  { title: "Project", icon: <RiAppsFill />, path: "/projects" },
  // {
  //   title: "Sign-in",
  //   icon: <IoLogIn />,
  //   path: "/signin",
  // },
];

export const menuItems = [
  { id: "b", title: "Blogs", icon: <BiHomeSmile />, path: "/dashboard/blogs" },
  {
    id: "pb",
    title: "Post blog",
    icon: <SiAboutdotme />,
    path: "/dashboard/post_blog",
  },
  {
    id: "a",
    title: "Analytics",
    icon: <RiPagesFill />,
    path: "/dashboard/analytics",
  },
];
