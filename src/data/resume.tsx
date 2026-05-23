import { Icons } from "@/components/icons";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanvir Hossain",
  initials: "TH",
  url: "https://tanvircodes.com",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description: "Full Stack Developer | Typescript, Node.js, React",
  summary:
    "I'm a full-stack software engineer focused on building scalable web applications and digital products from end to end. I studied Computer Science and have worked on both client projects and product-based teams. Over the years, I've built SaaS platforms, business websites, and custom software solutions using modern technologies. I'm passionate about exploring new tools, staying up to date with industry trends, and creating products that deliver real value to users and businesses.",
  avatarUrl: "/me.webp",
  skills: [
    {
      category: "Languages",
      items: [{ name: "TypeScript", icon: Typescript }],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: Icons.react },
        { name: "Next.js", icon: Icons.nextjs },
        { name: "Tanstack Start" },
      ],
    },
    {
      category: "CSS Preprocessors",
      items: [{ name: "Tailwind CSS" }, { name: "shadcn/ui" }],
    },
    {
      category: "Tools & Libraries",
      items: [
        { name: "TanStack Router" },
        { name: "TanStack Query" },
        // { name: "tRPC" },
        { name: "Zod" },
        // { name: "Effect-TS" },
        // { name: "Vercel AI SDK" },
        { name: "Vite" },
        // { name: "Parcel" },
        // { name: "WebPack" },
        { name: "FramerMotion" },
        // { name: "GSAP" },
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", icon: Nodejs },
        { name: "MongoDB", icons: Icons.mongodb },
        { name: "MySQL" },
        // { name: "Convex" },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "Prisma ORM" },
        { name: "Drizzle ORM" },
      ],
    },
    {
      category: "Hosting",
      items: [
        { name: "Vercel" },
        { name: "Railway" },
        { name: "Render" },
        { name: "Netlify" },
        { name: "Hostinger" },
        { name: "Digital Ocean" },
      ],
    },
    {
      category: "coder related",
      items: [
        { name: "VS Code" },
        { name: "Cursor" },
        { name: "Copilot" },
        { name: "Git" },
        { name: "Deep Seek" },
        { name: "Claude" },
        { name: "VO" },
        { name: "etc.." },
      ],
    },
    {
      category: "designer related",
      items: [{ name: "Figma", icon: Icons.figma }],
    },

    {
      category: "Operating Systems",
      items: [
        { name: "Ubuntu", icon: Icons.ubuntu },
        { name: "Arch Linux", icon: Icons.archlinx },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tanvir.swe.work@gmail.com",
    tel: "+8801784070569",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tanvir1017",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tanvir1017",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tanvi1017",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tanvir.swe.work@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Shakil Education Group - SEG",
      href: "https://shakileducation.com",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer, Backend Focused",
      logoUrl: "/seg.png",
      start: "Dec 2025",
      end: "Present",
      description:
        "Built and maintained the Shakil Education portfolio and internal business management tools, including a lead management system. This helped the internal team track lead status, schedule follow-ups, and stay organized with task-based workflows. Also integrated VoIP (Voice over Internet Protocol) to enable browser-based calling.",
    },
    {
      company: "SM Technology - Betopia Group",
      href: "https://smtech24.com",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer, Team Lead",
      logoUrl: "/smt.png",
      start: "Apr 2024",
      end: "Dec 2025",
      description:
        "As a team lead, I managed project delivery, gathered client requirements, and coordinated the team’s day-to-day work. I also built and maintained freelance client projects for global clients across rental platforms, yacht booking, quiz apps, e-commerce, CRM systems, and educational websites",
    },
    {
      company: "IRD Foundation - IRDF",
      href: "https://irdfoundation.com",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Full Stack Software Engineer",
      logoUrl: "/quranmazid.png",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
        "Started as an intern and progressed into a web developer role, eventually taking ownership of backend development for quranmazid.com.",
    },
  ],
  education: [
    {
      school: "Dhaka Polytechnic Institute",
      href: "https://dhaka.polytech.gov.bd/",
      degree: "Diploma in Computer Technology",
      logoUrl: "/dpi.jpeg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Shakil Education Group",
      href: "https://shakiledu.com",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "Build and maintain the Shakil Education Group Front-end, Backend and Complete CMS Management System for the Shakil Education Group",
      technologies: [
        "TypeScript",
        "Next.js",
        "mySQL",
        "Prisma",
        "redis",
        "node.js",
        "bullMQ",
      ],
      links: [
        {
          type: "Website",
          href: "https://shakiledu.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shakiledu.png",
      video: "/shakiledu.mp4",
    },
    {
      title: "Lead Management System",
      href: "https://lead.shakiledu.com",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "Build and maintain the Lead Management System for the Shakil Education Group",
      technologies: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Prisma",
        "redis",
        "node.js",
        "bullMQ",
        "twilio/voip",
      ],
      links: [
        {
          type: "Website",
          href: "https://lead.shakiledu.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/lm.mp4",
    },
    {
      title: "My Uni-Abroad",
      href: "https://my-uniabroad.com",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "Build and maintain the My Uni-Abroad Front-end, Backend and Complete CMS Management System for the My Uni-Abroad",
      technologies: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Prisma",
        "redis",
        "node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://my-uniabroad.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Uniabroad-intro.mp4",
    },
  ],

  contacts: [
    {
      name: "LinkedIn",
      icon: Icons.linkedin,
      link: "https://linkedin.com/in/tanvir1017",
    },

    {
      name: "Github",
      icon: Icons.github,
      link: "https://github.com/tanvir1017",
    },
    {
      name: "X/Twitter",
      icon: Icons.x,
      link: "https://x.com/tanvi1017",
    },
    {
      name: "Email",
      icon: Icons.email,
      link: "mailto:tanvir.swe.work@gmail.com",
    },
  ],
} as const;
