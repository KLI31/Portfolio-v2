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
    name: "MondoDb",
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
};

export const PROJECTS = [
  {
    name: "InMonteriaHouse",
    description:
      "Proyecto universitario para gestionar alquileres. Permite a usuarios buscar y reservar alojamiento en la ciudad, y a propietarios publicar y gestionar sus propiedades. Desarrollado desde cero con MERN Stack y Firebase",
    link: "https://inmonteriahose.onrender.com/",
    image: "/project1.webp",
    github: "https://github.com/KLI31/inMonteriaHouse",
    tags: [TAGS.React, TAGS.Node, TAGS.Tailwind, TAGS.Firebase, TAGS.MongoDB],
  },
  {
    name: "Landing Page Rstudio",
    description:
      "Proyecto universitario para la asignatura de desarrollo web usando metodologías ágiles. Landing page para la empresa Rstudio, desarrollado con HTML, CSS y JavaScript, desplegado en Vercel",
    image: "/proyect2.webp",
    github: "https://github.com/KLI31/Desarrollo-web/blob/main/index.js",
    link: "https://headphone-shop-seven.vercel.app/",
    tags: [TAGS.Html, TAGS.Css, TAGS.JavaScript],
  },
  {
    name: "Prueba tecnica desarrollador frontend y  mobile",
    description:
      "Prueba tecnica para el cargo como desarrollador mobile y frontend app de noticias y pagina de tareas",
    image: "/project3.webp",
    github: "https://github.com/KLI31/PruebaTecnica-Fox-Analytics.git",
    tags: [TAGS.React, TAGS.ReactNative, TAGS.Tailwind, TAGS.JavaScript],
  },
  {
    name: "KristCar",
    description:
      "Kriscar es un rentacar que permite a los usuarios alquilar vehículos de manera sencilla y rápida",
    image: "/project4.webp",
    github: "https://github.com/KLI31/KristCar-Rental",
    link: "https://krist-car.vercel.app/",
    tags: [
      TAGS.React,
      TAGS.Tailwind,
      TAGS.TypeScript,
      TAGS.Next,
      TAGS.Neon,
      TAGS.Stripe,
      TAGS.Prisma,
    ],
  },
];

export const EXPERIENCIE = [
  {
    date: "Marzo 2024 - Mayo 2024",
    title: "Frontend Developer",
    company: "Coinsenda",
    description:
      "Trabajé en el desarrollo y mejora de una página de criptomonedas. Durante mi práctica, contribuí a la creación de nuevas funcionalidades web y optimicé las existentes. Además, adquirí conocimientos en patrones de diseño, aplicándolos en el desarrollo de interfaces escalables y eficientes.",
    link: "/Carta.pdf",
  },
  {
    date: "Enero 2023 - Octubre-2023",
    title: "Desarrollador Frontend mobile",
    company: "Freelancer",
    description:
      "Responsable del diseño y desarrollo completo de una aplicación móvil utilizando React Native para una empresa privada. Desde la concepción de la idea hasta la implementación final, llevé a cabo todas las etapas del desarrollo, asegurando una solución robusta y funcional para el cliente.",
  },
  {
    date: "Febrero 2022 - Noviembre 2022",
    title: "Desarrollador Frontend",
    company: "Freelancer",
    description:
      "Desarrollé interfaces de usuario interactivas y optimizadas para diversas plataformas utilizando tecnologías como React y JavaScript. Colaboré en proyectos de desarrollo web, asegurando una experiencia de usuario fluida y diseño responsivo, cumpliendo con los objetivos de cada proyecto y garantizando la satisfacción del cliente.",
  },
];

export const EDUCATION = [
  {
    college: "Universidad de Córdoba",
    image: "/Unicordoba-logo.webp",
    degree: "Ingeniería de Sistemas",
    date: "Ene 2020 - Actualidad",
    description:
      "Actualmente cursando el 9° semestre de la carrera de Ingeniería de Sistemas en la Universidad de Córdoba. Enfocado en el desarrollo de software. Activo en la comunidad universitaria y participante en proyectos de investigación.",
  },
  {
    college: "PeakU",
    image: "/Logo-PeakU.webp",
    degree: "Bootcamp desarrollador fullstack",
    date: "Ago 2023 - Jun 2024",
    description:
      "Bootcamp intensivo de desarrollo web fullstack. Adquirí conocimientos en tecnologías frontend y backend, así como habilidades de trabajo en equipo y resolución de problemas. Desarrollé proyectos reales y adquirí experiencia en el mundo laboral.",
  },
  {
    college: "Universidad Nacional de Colombia",
    image: "/UNAL.webp",
    degree: "Diplomado en Desarrollo Web",
    date: "Ene 2022 - Dec 2022",
    description:
      "Diplomado en Desarrollo Web con énfasis en tecnologías frontend y backend. Adquirí conocimientos en HTML, CSS, JavaScript, Python, Git y metodologías ágiles.",
  },
  {
    college: "Evolve your English",
    image: "/Evolve-logo.webp",
    degree: "Curso de Inglés",
    date: "Feb 2021 - Feb 2022",
    description:
      "Curso de inglés avanzado en la academia Evolve your English. Adquirí habilidades de comunicación y comprensión en el idioma, así como tambien conocimientos en gramática y vocabulario.",
  },
];

export const STACK = [
  {
    name: "HTML",
    color: "#EF652A",
    icon: HTML,
  },
  {
    name: "CSS",
    color: "#30A9DC",
    icon: Css,
  },
  {
    name: "JavaScript",
    color: "#F0DB4F",
    icon: JavaScript,
  },
  {
    name: "React Js",
    color: "#61DAFB",
    icon: React,
  },
  {
    name: "React Native",
    color: "#61DAFB",
    icon: React,
  },
  {
    name: "Redux",
    color: "#764ABC",
    icon: Redux,
  },
  {
    name: "React Router",
    color: "#CA4245",
    icon: ReactRouter,
  },
  {
    name: "Node.js",
    color: "#68A063",
    icon: Node,
  },
  {
    name: "Tailwind CSS",
    color: "#38B2AC",
    icon: Tailwind,
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    icon: Firebase,
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: MongoDB,
  },
  {
    name: "VS Code",
    color: "#3DA9F2",
    icon: VsCode,
  },
  {
    name: "Figma",
    color: "#A95FFF",
    icon: Figma,
  },
  {
    name: "Git",
    color: "#F05032",
    icon: Git,
  },
  {
    name: "Gitlab",
    color: "#FCA326",
    icon: Gitlab,
  },
  {
    name: "Astro",
    color: "#FFAA00",
    icon: Astro,
  },
  {
    name: "Material UI",
    color: "#0081CB",
    icon: MaterialUI,
  },
  {
    name: "MySql",
    color: "#00758F",
    icon: MySql,
  },
  {
    name: "TypeScript",
    color: "#007ACC",
    icon: TypeScript,
  },
  {
    name: "Next.js",
    color: "#000000",
    icon: Next,
  },
  {
    name: "Nest.js",
    color: "#E0234E",
    icon: Nest,
  },
  {
    name: "Prisma",
    color: "#2D3748",
    icon: Prisma,
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: PostgreSql,
  },
  {
    name: "Neon",
    color: "#000000",
    icon: Neon,
  },
  {
    name: "Stripe",
    color: "#6772E5",
    icon: Stripe,
  },
  {
    name: "Docker",
    color: "#008fe2",
    icon: Docker,
  },
  {
    name: "Expo",
    color: "#000020",
    icon: Expo,
  },
];
