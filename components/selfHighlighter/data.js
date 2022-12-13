import Light from "../../assets/svg/light";
import Rocket from "../../assets/svg/roket";
import Settings from "../../assets/svg/settings";

import { CiTwitter as Twitter } from "react-icons/ci";
import { GrFacebookOption as Facebook } from "react-icons/gr";
import { SlSocialInstagram as Insta } from "react-icons/sl";
import { TfiLinkedin as LinkedIn } from "react-icons/tfi";
import { VscGithubAlt as GitHub } from "react-icons/vsc";

export const cardData = [
  {
    title: "Deeper Skillset",
    icon: <Settings />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident expedita at voluptates nam? Qui, vitae? Ab alias provident ratione.",
  },
  {
    title: "Creative Work",
    icon: <Light />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident expedita at voluptates nam? Qui, vitae? Ab alias provident ratione.",
  },
  {
    title: "Strong Dedication",
    icon: <Rocket />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident expedita at voluptates nam? Qui, vitae? Ab alias provident ratione.",
  },
];

export const socialData = [
  {
    name: "GitHub",
    id: "https://github.com/tanvir1017",
    icon: <GitHub />,
    theme: "#ff008c",
  },
  {
    name: "Facebook",
    id: "https://facebook.com/tanvir1017",
    icon: <Facebook />,
    theme: "#d309e1",
  },
  {
    name: "LinkedIn",
    id: "https://linkedin.com/tanvir1017",
    icon: <LinkedIn />,
    theme: "#9c1aff",
  },
  {
    name: "Twitter",
    id: "https://twitter.com/tanvi1017",
    icon: <Twitter />,
    theme: "#7700ff",
  },
  {
    name: "Instagram",
    id: "https://instagram.com/mdtan_vir037",
    icon: <Insta />,
    theme: "#4400ff",
  },
];
