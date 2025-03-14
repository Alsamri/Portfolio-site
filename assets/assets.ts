import type { StaticImageData } from "next/image";

import code_icon from "./code-icon.png";
import intrest_icon from "./intrests-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import javascript from "./javascript.png";
import typescript from "./typescript.png";
import postgres from "./postgres.png";
import react_icon from "./react-icon.png";
import vscode from "./vscode.png";
import figma from "./figma.png";
import git from "./git.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import next from "./Next.svg";
import node_js from "./Node.svg";
import express from "./Express.svg";

export const assets: Record<string, StaticImageData> = {
  express,
  node_js,
  next,
  javascript,
  typescript,
  postgres,
  react_icon,
  intrest_icon,
  code_icon,
  code_icon_dark,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  figma,
  git,
  right_arrow_white,
  logo,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
  url: string;
}

export const workData: WorkItem[] = [
  {
    title: "Full-Stack Project",
    description: "News Forum",
    bgImage: "/work-1.png",
    url: "https://aloisa.netlify.app/",
  },
  {
    title: "Full-Stack Project",
    description: "Gamified Open Source Platform",
    bgImage: "/work-2.png",
    url: "https://github.com/nxvafps/code4change",
  },
];

interface ServiceItem {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export const serviceData: ServiceItem[] = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, Typescript, React Js, Next Js, Express Js, SQL",
  },
  {
    icon: assets.intrest_icon,
    iconDark: assets.intrest_icon,
    title: "intrests",
    description: "I enjoy swimming, And playing tennis",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 3 projects",
  },
];

export const toolsData: StaticImageData[] = [
  assets.node_js,
  assets.express,
  assets.vscode,
  assets.react_icon,
  assets.postgres,
  assets.typescript,
  assets.javascript,
  assets.figma,
  assets.git,
  assets.next,
];
