import htmllogo from './assets/icons/html.svg'
import css from './assets/icons/CSS.svg'
import javascript from './assets/icons/javascript.svg'
import bootstrap from './assets/icons/bootstrap.svg'
import clangugae from './assets/icons/c.svg'
import cpplang from './assets/icons/cpp.svg'
import express from './assets/icons/express.svg'
import git from './assets/icons/git.svg'
import github from './assets/icons/github.svg'
import mongodb from './assets/icons/mongodb.svg'
import mysql from './assets/icons/mysql.svg'
import nextjs from './assets/icons/nextjs.svg'
import node from './assets/icons/node.svg'
import postman from './assets/icons/postman.svg'
import postgresql from './assets/icons/postgresql.svg'
import python from './assets/icons/python.svg'
import react from './assets/icons/react.svg'
import typescript from './assets/icons/typescript.svg'
import tailwind from './assets/icons/tailwind.svg'
import vercel from './assets/icons/vercel.svg'
import vscode from './assets/icons/vscode.svg'
import fitlife from'./assets/icons/fitlife.png'
import logo from './assets/icons/image.png'
import password from './assets/icons/password.png'
import language from './assets/icons/language.png'
import currency from './assets/icons/currency.png'
import recipe from './assets/icons/recipe.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmllogo },
      { name: 'CSS', logo: css },
      { name: 'React JS', logo: react },
      { name: 'Next JS', logo: nextjs },
      { name: 'Tailwind CSS', logo: tailwind },
      { name: 'Bootstrap', logo: bootstrap },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: node },
      { name: 'Express JS', logo: express },
      { name: 'MySQL', logo: mysql },
      { name: 'MongoDB', logo: mongodb },
      { name: 'PostgreSQL', logo: postgresql },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: clangugae },
      { name: 'C++', logo: cpplang },
      { name: 'Python', logo: python },
      { name: 'JavaScript', logo: javascript },
      { name: 'TypeScript', logo: typescript },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: github },
      { name: 'VS Code', logo: vscode },
      { name: 'Postman', logo: postman },
      { name: 'Vercel', logo: vercel },
    ],
  },
];

export const projects=[
  {
    id:0,
    title:'FitLife-AI Powered Health Analytics Platform',
    description:
"A full-stack fitness tracking platform that helps users monitor workouts, nutrition, and daily progress. Built with the MERN stack, it features secure authentication, real-time data updates, and a clean dashboard for an engaging user experience.",
    image:fitlife,
    tags:["MongoDB","Express","React","Node","JWT","REST API","Tailwind","OAuth"],
    github:"https://github.com/Himanshu-bhadu/FitLife---Fitness-Tracker",
    webapp:"https://fit-life-fitness-tracker.vercel.app",
  },
  {
    id:1,
    title:'VisionAI — Text-to-Image Generator',
    description:"An AI-powered web application that generates images from text prompts using modern APIs. Designed with a responsive UI and optimized backend for fast request handling.",
    image:logo,
    tags:["MongoDB","Express.Js","React.js","Node.js","Tailwind","AI API","Async Requests"],
    github:"https://github.com/Himanshu-bhadu/AI-TEXT-IMAGE-GENERATION",
    webapp:"https://ai-text-image-generation.vercel.app/",
  },
  {
    id:2,
    title:'Recipe Finder',
    description:"A responsive recipe discovery platform that allows users to search meals in real-time using external APIs. Implemented dynamic filtering, optimized API calls, and a clean UI to enhance browsing experience.",
    image:recipe,
    tags:["React","API Integration","JavaScript","Tailwind","Responsive UI","Async Data"],
    github:"https://github.com/Himanshu-bhadu/Recipe-webapp",
    webapp:"https://recipe-webapp-beryl.vercel.app/",
  },
  {
    id:3,
    title:'Language Translator',
    description:"A real-time language translator that converts text across multiple languages with integrated text-to-speech and copy features. Focused on usability and performance.",
    image:language,
    tags:["HTML","CSS","React.js","JavaScript","API  Integration","Tailwind","Async JS","Speech"],
    github:"https://github.com/Himanshu-bhadu/Recipe-webapp",
    webapp:"https://language-translator-hazel-two.vercel.app/",
  },
    {
    id:4,
    title:'Currency Convertor',
    description:"A real-time currency conversion tool powered by live exchange rate APIs. Engineered for accuracy and speed with optimized fetch logic and a minimal, user-friendly interface.",
    image:currency,
    tags:["React","Exchange Rate API","Async JS","Hooks","Tailwind","Responsive Design"],
    github:"https://github.com/Himanshu-bhadu/Currency-Convertor",
    webapp:"https://currency-convertor-six-weld.vercel.app/",
  },
  {
    id:5,
    title:'Password Generator',
    description:"A customizable password generator enabling users to create highly secure passwords with adjustable strength parameters. Built with a focus on performance, randomness, and usability.",
    image:password,
    tags:["React","State Management","JavaScript","Security","Tailwind"],
    github:"https://github.com/Himanshu-bhadu/Password-Generator",
    webapp:"https://password-generator-three-ivory-33.vercel.app/",
  },
]