import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp of CIW certificated",
    location: "Birjand, Iran",
    description:
      "I graduated after 6 months of studying. I immediately earned my  CIW certificate.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
    githubUrl: "",
    demoUrl: "",
    metaData: "",
  },
  {
    title: "Front-End Developer",
    location: "Tehran, Iran",
    description: `I served as a front-end developer for six months at Raya-Block Company. 
    My task was to replicate the trading page of the Binance exchange. I successfully completed the task, 
    but unfortunately, the project was halted due to the impact of the coronavirus pandemic.`,
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
    githubUrl: "https://github.com/RezaZeraatkar/binance-front-clone",
    demoUrl: "",
    metaData: "",
  },
  {
    title: "Full-Stack web Developer",
    location: "Neyshabur, Iran",
    description: `I worked as a full-stack developer on this project for 2 years as part of my conscription.
      the full description is in my github repository.`,
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
    githubUrl: "https://github.com/RezaZeraatkar/judicial",
    demoUrl: "https://reactjsystem.iran.liara.run/login",
    metaData: "username:reza, password:123456",
  },
] as const;

export const projectsData = [
  {
    title: "material-tailwind-dashboard-react",
    description: `As part of my job, I’ve identified a gap in admin templates lacking bidirectional 
    and multilingual support with React and Tailwind CSS. 
    I’ve forked a package to add these features. 
    I’ve also developed a comprehensive multi-lingual context-provider, 
    opting for a custom solution over react-i18n.
    More details are in my GitHub repository.`,
    tags: [
      "React",
      "Material Tailwind",
      "Hero Icons",
      "Apex Charts",
      "Nepcha Analytics",
    ],
    imageUrl:
      "https://res.cloudinary.com/db7v5ycxn/image/upload/v1702675647/my-portfolio-website/tpujp7sv201xqvnigrbq.png",
    githubUrl:
      "https://github.com/RezaZeraatkar/material-tailwind-dashboard-react",
    demoUrl: "",
  },
  {
    title: "Online-shop-admin",
    description: `The Nextjs Online Store Dashboard, under development,
     will manage online stores, allowing product and category creation. 
     The semi-complete product page supports image uploads to Cloudinary. 
    The site uses lastest Nextjs 13 features like route grouping and server-actions.
      `,
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Vercel",
      "Clerk",
      "Cloudinary",
    ],
    imageUrl:
      "https://res.cloudinary.com/db7v5ycxn/image/upload/v1702675651/my-portfolio-website/s6fop1ep54on2bmattvy.png",
    githubUrl: "https://github.com/RezaZeraatkar/nextjsOnlineStore",
    demoUrl: "https://nextjs-online-store.vercel.app/",
  },
  {
    title: "Realtime Market",
    description: `To demonstrate my proficiency with WebSockets,
    I’ve developed a responsive website from scratch using React and TypeScript. 
    This project serves as a testament to my skills in real-time communication and responsive web design. 
      More details are in my GitHub repository.`,
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Redux/ReduxToolkit",
      "ApexCharts",
      "react-use-websocket",
    ],
    imageUrl:
      "https://res.cloudinary.com/db7v5ycxn/image/upload/v1702675648/my-portfolio-website/i00bab7ax3pntqglkxxi.png",
    githubUrl: "https://github.com/RezaZeraatkar/realtime-market-prices",
    demoUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Nextjs",
  "Nodejs",
  "Tailwind",
  "Material-UI",
  "Bootstrap",
  "Redux",
  "RTK-Query",
  "Express",
  "MongoDB",
  "MySQL",
  "PHP",
  "Wordpress",
  "Mongoose",
  "PostgreSQL",
  "Python",
  "React Hook Form",
  "Zod",
  "Git",
  "Docker",
  "linux",
] as const;
