import react from "./icons/React.astro";
import Node from "./icons/Node.astro";
import Tailwind from "./icons/Tailwind.astro";
import Firebase from "./icons/Firebase.astro";
import MongoDB from "./icons/MongoDb.astro";
import HTML from "./icons/HTML.astro";
import Css from "./icons/Css.astro";
import JavaScript from "./icons/JavaScript.astro";
import React from "./icons/React.astro";
import Redux from "./icons/Redux.astro";
import ReactRouter from "./icons/ReactRouter.astro";
import VsCode from "./icons/VsCode.astro";
import Figma from "./icons/Figma.astro";
import Git from "./icons/Git.astro";
import Gitlab from "./icons/Gitlab.astro";
import Astro from "./icons/Astro.astro";
import MaterialUI from "./icons/MaterialUI.astro";
import MySql from "./icons/MySql.astro";
import TypeScript from "./icons/TypeScript.astro";
import Next from "./icons/Next.astro";
import Nest from "./icons/Nest.astro";
import Prisma from "./icons/Prisma.astro";
import PostgreSql from "./icons/PostgreSql.astro";
import Neon from "./icons/Neon.astro";
import Stripe from "./icons/Stripe.astro";
import Docker from "./icons/Docker.astro";
import Expo from "./icons/Expo.astro";
import Aws from "./icons/Aws.astro";
import N8n from "./icons/N8n.astro";
import Nginx from "./icons/Nginx.astro";
import SocketIo from "./icons/SocketIo.astro";
import Cursor from "./icons/Cursor.astro";
import Python from "./icons/Python.astro";
import Go from "./icons/Go.astro";
import TanStack from "./icons/TanStack.astro";
import Jwt from "./icons/Jwt.astro";
import Sentry from "./icons/Sentry.astro";
import Zed from "./icons/Zed.astro";
import Claude from "./icons/Claude.astro";
import Gemini from "./icons/Gemini.astro";
import Codex from "./icons/Codex.astro";
import Opencode from "./icons/Opencode.astro";

export const TAGS = {
  React: {
    name: "React",
    class: "bg-blue-900",
    icon: react,
  },
  Node: {
    name: "Node.js",
    class: "bg-[#0C560C]",
    icon: Node,
  },
  Tailwind: {
    name: "Tailwind CSS",
    class: "bg-[#1A5F76]",
    icon: Tailwind,
  },
  Firebase: {
    name: "Firebase",
    class: "bg-[#AC3A0F]",
    icon: Firebase,
  },
  MongoDB: {
    name: "MongoDB",
    class: "bg-[#8B4513]",
    icon: MongoDB,
  },
  Html: {
    name: "HTML",
    class: "bg-[#AC3A0F]",
    icon: HTML,
  },
  Css: {
    name: "CSS",
    class: "bg-[#1A5F76]",
    icon: Css,
  },
  JavaScript: {
    name: "JavaScript",
    class: "bg-[#5C4F00]",
    icon: JavaScript,
  },
  ReactNative: {
    name: "React Native",
    class: "bg-blue-900",
    icon: react,
  },
  TypeScript: {
    name: "TypeScript",
    class: "bg-[#007ACC]",
    icon: TypeScript,
  },
  Next: {
    name: "Next.js",
    class: "bg-[#000000]",
    icon: Next,
  },
  Nest: {
    name: "Nest.js",
    class: "bg-[#E0234E]",
    icon: Nest,
  },
  Prisma: {
    name: "Prisma",
    class: "bg-[#2D3748]",
    icon: Prisma,
  },
  PostgreSql: {
    name: "PostgreSQL",
    class: "bg-[#336791]",
    icon: PostgreSql,
  },
  Neon: {
    name: "Neon",
    class: "bg-[#000000]",
    icon: Neon,
  },
  Stripe: {
    name: "Stripe",
    class: "bg-[#6772E5]",
    icon: Stripe,
  },
  Docker: {
    name: "Docker",
    class: "bg-[#0D2F4A]",
    icon: Docker,
  },
  Aws: {
    name: "AWS",
    class: "bg-[#232F3E]",
    icon: Aws,
  },
  Expo: {
    name: "Expo",
    class: "bg-[#18181B]",
    icon: Expo,
  },
  N8n: {
    name: "n8n",
    class: "bg-[#EA4B71]",
    icon: N8n,
  },
  Redux: {
    name: "Redux",
    class: "bg-[#764ABC]",
    icon: Redux,
  },
  Astro: {
    name: "Astro",
    class: "bg-[#FFAA00]",
    icon: Astro,
  },
  Python: {
    name: "Python",
    class: "bg-[#3776AB]",
    icon: Python,
  },
  Go: {
    name: "Go",
    class: "bg-[#00ACD7]",
    icon: Go,
  },
  TanStack: {
    name: "TanStack",
    class: "bg-[#FF4154]",
    icon: TanStack,
  },
  Jwt: {
    name: "JWT",
    class: "bg-[#000000]",
    icon: Jwt,
  },
  Claude: {
    name: "Claude",
    class: "bg-[#D97757]",
    icon: Claude,
  },
  Nginx: {
    name: "Nginx",
    class: "bg-[#009639]",
    icon: Nginx,
  },
};

export const PROJECTS_BASE = [
  {
    image: "/project1.webp",
    link: "https://inmonteriahose.onrender.com/",
    github: "https://github.com/KLI31/inMonteriaHouse",
    tags: ["React", "Node", "Tailwind", "Firebase", "MongoDB"],
  },
  {
    image: "/devlinks.png",
    link: "https://devlinks.lramdev.com/",
    github: "https://github.com/KLI31/DEVLINKS",
    tags: ["React, Nest, PostgreSql, Prisma, Next, Docker, Claude"],
  },
  {
    image: "/project4.webp",
    github: "https://github.com/KLI31/KristCar-Rental",
    link: "https://krist-car.vercel.app/",
    tags: [
      "React",
      "Tailwind",
      "TypeScript",
      "Next",
      "Neon",
      "Stripe",
      "Prisma",
    ],
  },
];

/** Tech tags por experiencia (mismo orden que experience.items en i18n) */
export const EXPERIENCE_TAGS = [
  [
    "React",
    "TypeScript",
    "Docker",
    "N8n",
    "Next",
    "PostgreSql",
    "Prisma",
    "Node",
    "Astro",
    "Claude",
    "Python",
    "Jwt",
  ],
  [
    "React",
    "TypeScript",
    "Aws",
    "Docker",
    "Next",
    "PostgreSql",
    "Nest",
    "Node",
    "Claude",
    "Jwt",
    "Nginx",
  ],
  ["React", "Redux", "JavaScript"],
  ["ReactNative", "Expo"],
  ["React", "JavaScript"],
];

/** Enlace opcional a carta de recomendación por índice (mismo orden que experience.items en i18n) */
export const EXPERIENCE_LINKS = [
  "/CartaCifra.pdf",
  undefined,
  "/Carta.pdf",
  undefined,
  undefined,
];

/** Imágenes de instituciones; textos en i18n */
export const EDUCATION_IMAGES = [
  "/Unicordoba-logo.webp",
  "/Logo-PeakU.webp",
  "/UNAL.webp",
  "/Evolve-logo.webp",
  "/smart-academy.webp",
];

export const STACK = [
  // FRONTEND
  {
    name: "HTML",
    color: "#EF652A",
    icon: HTML,
    category: "frontend",
  },
  {
    name: "CSS",
    color: "#30A9DC",
    icon: Css,
    category: "frontend",
  },
  {
    name: "JavaScript",
    color: "#F0DB4F",
    icon: JavaScript,
    category: "frontend",
  },
  {
    name: "React Js",
    color: "#61DAFB",
    icon: React,
    category: "frontend",
  },
  {
    name: "React Native",
    color: "#61DAFB",
    icon: React,
    category: "frontend",
  },
  {
    name: "Redux",
    color: "#764ABC",
    icon: Redux,
    category: "frontend",
  },
  {
    name: "React Router",
    color: "#CA4245",
    icon: ReactRouter,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    color: "#38B2AC",
    icon: Tailwind,
    category: "frontend",
  },
  {
    name: "Material UI",
    color: "#0081CB",
    icon: MaterialUI,
    category: "frontend",
  },
  {
    name: "TypeScript",
    color: "#007ACC",
    icon: TypeScript,
    category: "frontend",
  },
  {
    name: "Next.js",
    color: "#000000",
    icon: Next,
    category: "frontend",
  },
  {
    name: "Astro",
    color: "#FFAA00",
    icon: Astro,
    category: "frontend",
  },
  {
    name: "Expo",
    color: "#6366F1",
    icon: Expo,
    category: "frontend",
  },
  {
    name: "TanStack",
    color: "#FF4154",
    icon: TanStack,
    category: "frontend",
  },
  // BACKEND
  {
    name: "Node.js",
    color: "#68A063",
    icon: Node,
    category: "backend",
  },
  {
    name: "Nest.js",
    color: "#E0234E",
    icon: Nest,
    category: "backend",
  },
  {
    name: "Prisma",
    color: "#2D3748",
    icon: Prisma,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: PostgreSql,
    category: "backend",
  },
  {
    name: "MySql",
    color: "#00758F",
    icon: MySql,
    category: "backend",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: MongoDB,
    category: "backend",
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    icon: Firebase,
    category: "backend",
  },
  {
    name: "Neon",
    color: "#000000",
    icon: Neon,
    category: "backend",
  },
  {
    name: "Stripe",
    color: "#6772E5",
    icon: Stripe,
    category: "backend",
  },
  {
    name: "Socket.io",
    color: "#010101",
    icon: SocketIo,
    category: "backend",
  },
  {
    name: "JWT",
    color: "#D63AFF",
    icon: Jwt,
    category: "backend",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: Python,
    category: "backend",
  },
  {
    name: "Go",
    color: "#00ACD7",
    icon: Go,
    category: "backend",
  },
  // CLOUD & DEVOPS
  {
    name: "Docker",
    color: "#008fe2",
    icon: Docker,
    category: "cloud",
  },
  {
    name: "AWS",
    color: "#FF9900",
    icon: Aws,
    category: "cloud",
  },
  {
    name: "Nginx",
    color: "#009639",
    icon: Nginx,
    category: "cloud",
  },
  {
    name: "Git",
    color: "#F05032",
    icon: Git,
    category: "cloud",
  },
  {
    name: "Gitlab",
    color: "#FCA326",
    icon: Gitlab,
    category: "cloud",
  },
  {
    name: "VS Code",
    color: "#3DA9F2",
    icon: VsCode,
    category: "cloud",
  },
  {
    name: "Figma",
    color: "#A95FFF",
    icon: Figma,
    category: "cloud",
  },
  {
    name: "Sentry",
    color: "#362D59",
    icon: Sentry,
    category: "cloud",
  },
  {
    name: "Zed",
    color: "#084CCF",
    icon: Zed,
    category: "cloud",
  },
  // IA
  {
    name: "n8n",
    color: "#EA4B71",
    icon: N8n,
    category: "ia",
  },
  {
    name: "Cursor",
    color: "#6366F1",
    icon: Cursor,
    category: "ia",
  },
  {
    name: "Claude",
    color: "#D97757",
    icon: Claude,
    category: "ia",
  },
  {
    name: "Gemini",
    color: "#8E75B2",
    icon: Gemini,
    category: "ia",
  },
  {
    name: "Codex",
    color: "#000000",
    icon: Codex,
    category: "ia",
  },
  {
    name: "Opencode",
    color: "#131010",
    icon: Opencode,
    category: "ia",
  },
];
