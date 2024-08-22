import React from "./icons/React.astro";
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

export const TAGS = {
  React: {
    name: "React",
    class: "bg-blue-900",
    icon: React,
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
};

export const PROJECTS = [
  {
    name: "InMonteriaHouse",
    description:
      "Proyecto universitario para gestionar alquileres. Permite a usuarios buscar y reservar alojamiento en la ciudad, y a propietarios publicar y gestionar sus propiedades. Desarrollado desde cero con MERN Stack y Firebase",
    link: "https://inmonteriahouse.onrender.com",
    image: "../../public/assets/project1.webp",
    github: "https://github.com/KLI31/inMonteriaHouse",
    tags: [TAGS.React, TAGS.Node, TAGS.Tailwind, TAGS.Firebase, TAGS.MongoDB],
  },
  {
    name: "Landing Page Rstudio",
    description:
      "Proyecto universitario para la asignatura de desarrollo web usando metodologías ágiles. Landing page para la empresa Rstudio, desarrollado con HTML, CSS y JavaScript, desplegado en Vercel",
    image: "../../public/assets/proyect2.webp",
    github: "https://github.com/KLI31/Desarrollo-web/blob/main/index.js",
    link: "https://headphone-shop-seven.vercel.app/",
    tags: [TAGS.Html, TAGS.Css, TAGS.JavaScript],
  },
];

export const EXPERIENCIE = [
  {
    date: "Marzo 2024 - Mayo 2024",
    title: "Frontend Developer",
    company: "Coinsenda",
    description:
      "Trabajé en el desarrollo y mejora de una página de criptomonedas. Durante mi práctica, contribuí a la creación de nuevas funcionalidades web y optimicé las existentes. Además, adquirí conocimientos en patrones de diseño, aplicándolos en el desarrollo de interfaces escalables y eficientes.",
  },
  {
    date: "Febrero 2022 - Agosto-2022",
    title: "Desarrollador Frontend mobile",
    company: "Freelancer",
    image: "../../public/assets/freelancer.webp",
    description:
      "Responsable del diseño y desarrollo completo de una aplicación móvil utilizando React Native para una empresa privada. Desde la concepción de la idea hasta la implementación final, llevé a cabo todas las etapas del desarrollo, asegurando una solución robusta y funcional para el cliente.",
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
];
