import htmllogo from './assets/icons/html.svg'
import css from './assets/icons/CSS.svg'
import js from './assets/icons/temp.svg'
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
import agrimarketImg from './assets/agrimarket.png'
import chatappImg from './assets/chatapp.png'
import mentalHealthImg from './assets/icons/mentalhealth.png'
import scikitlearn from './assets/icons/scikitlearn.svg'
import pandas from './assets/icons/pandas.svg'
import numpy from './assets/icons/numpy.svg'
import mllogo from './assets/icons/machinelearning.svg'

export const experiences = [
  {
    id: 0,
    role: "IKS Research Intern",
    company: "National Institute of Technology Silchar",
    duration: "July 2026 – August 2026",
    location: "India",
    type: "Research Internship",
    description: [
      "Selected for a research project under the IKS Division, Ministry of Education, analyzing Indian classical and folk music to study Raag origins and acoustic characteristics.",
      "Preprocessed and curated 50+ classical and folk audio recordings, experimenting with signal-processing and machine-learning approaches for tonic (Sa) detection across diverse musical styles.",
      "Evaluated and refined models through audio cleaning, feature modification, and parameter tuning, achieving 80%+ accuracy on selected datasets for tonic estimation.",
    ],
    skills: ["Machine Learning", "Python", "Signal Processing", "Audio Analysis", "Feature Engineering", "Scikit-Learn"],
  },
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "AnserTech",
    duration: "April 2026 – July 2026",
    location: "Remote",
    type: "Internship",
    description: [
      "Developing a Next.js and React web app with a Django backend to boost engagement and performance.",
      "Engineered an Admin Page featuring a complete UI redesign, interactive actions, and data editing capabilities.",
      "Managed feature branches and code reviews via Git Pull Requests in a collaborative team environment.",
    ],
    skills: ["Next.js", "React", "Django", "Python", "JavaScript", "Git", "REST APIs", "Tailwind CSS"],
  },
];

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
      { name: 'PostgreSQL', logo: postgresql },
      { name: 'MongoDB', logo: mongodb },
      { name: 'MySQL', logo: mysql },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Scikit-Learn', logo: scikitlearn },
      { name: 'Pandas', logo: pandas },
      { name: 'NumPy', logo: numpy },
      { name: 'Machine Learning', logo: mllogo },
      { name: 'Python', logo: python },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: python },
      { name: 'JavaScript', logo: js },
      { name: 'TypeScript', logo: typescript },
      { name: 'C', logo: clangugae },
      { name: 'C++', logo: cpplang },
    ],
  },
  {
    title: 'Tools & Platforms',
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
    id: 0, // update to match your sequence
    title: "AgriMarket",
    description:
      "A full-stack agricultural SaaS marketplace connecting Indian farmers directly with buyers for fresh produce sales and farm equipment rentals. Features AI Kishan (streaming Groq LLaMA-3 crop advisor with freemium paywall), Razorpay checkout & subscriptions, a farmer dashboard for order and inventory tracking, role-based NextAuth authentication, and multilingual support across 5 Indian languages.",
    image: agrimarketImg,
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "NextAuth.js",
      "Groq AI",
      "Razorpay",
    ],
    github: "https://github.com/Himanshu-bhadu/AgroMarket",
    webapp: "https://agri-market-tku7-rust.vercel.app/",
  },
  {
    id: 1,
    title: "Mental Health Tracker",
    description:
      "A machine-learning-powered wellness platform predicting personalized mental health scores (0–10) from lifestyle habits, screen time, and stress levels. Features an end-to-end scikit-learn Random Forest regression pipeline tuned with RandomizedSearchCV, served via a FastAPI backend with Pydantic validation and an interactive real-time score gauge frontend deployed on Render.",
    image: mentalHealthImg,
    tags: [
      "Machine Learning",
      "Python",
      "Scikit-Learn",
      "FastAPI",
      "Pandas",
      "Random Forest",
      "Pydantic",
      "Render",
    ],
    github: "https://github.com/Himanshu-bhadu/mental-health-tracker",
    webapp: "https://mental-health-tracker-1-hj76.onrender.com/",
  },
  {
    id: 2,
    title: "ChatApp",
    description:
      "A real-time messaging and peer-to-peer video calling web application powered by Socket.io and WebRTC with STUN/TURN relay support. Includes live online and last-seen presence indicators, friend connection requests, per-connection chat history privacy toggles, httpOnly JWT authentication, and responsive dark/light modes.",
    image: chatappImg,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/Himanshu-bhadu/chat-application", // verify exact repo slug
    webapp: "#", // replace with your Vercel URL once deployed
  },
  {
    id: 3,
    title:'FitLife-AI Powered Health Analytics Platform',
    description:
"A full-stack fitness tracking platform that helps users monitor workouts, nutrition, and daily progress. Built with the MERN stack, it features secure authentication, real-time data updates, and a clean dashboard for an engaging user experience.",
    image:fitlife,
    tags:["MongoDB","Express","React","Node","JWT","REST API","Tailwind","OAuth"],
    github:"https://github.com/Himanshu-bhadu/FitLife---Fitness-Tracker",
    webapp:"https://fit-life-fitness-tracker.vercel.app",
  },
  {
    id: 4,
    title:'VisionAI — Text-to-Image Generator',
    description:"An AI-powered web application that generates images from text prompts using modern APIs. Designed with a responsive UI and optimized backend for fast request handling.",
    image:logo,
    tags:["MongoDB","Express.Js","React.js","Node.js","Tailwind","AI API","Async Requests"],
    github:"https://github.com/Himanshu-bhadu/AI-TEXT-IMAGE-GENERATION",
    webapp:"https://ai-text-image-generation.vercel.app/",
  },
  {
    id: 5,
    title:'Recipe Finder',
    description:"A responsive recipe discovery platform that allows users to search meals in real-time using external APIs. Implemented dynamic filtering, optimized API calls, and a clean UI to enhance browsing experience.",
    image:recipe,
    tags:["React","API Integration","JavaScript","Tailwind","Responsive UI","Async Data"],
    github:"https://github.com/Himanshu-bhadu/Recipe-webapp",
    webapp:"https://recipe-webapp-beryl.vercel.app/",
  },
  {
    id: 6,
    title:'Language Translator',
    description:"A real-time language translator that converts text across multiple languages with integrated text-to-speech and copy features. Focused on usability and performance.",
    image:language,
    tags:["HTML","CSS","React.js","JavaScript","API  Integration","Tailwind","Async JS","Speech"],
    github:"https://github.com/Himanshu-bhadu/Recipe-webapp",
    webapp:"https://language-translator-hazel-two.vercel.app/",
  },
    {
    id: 7,
    title:'Currency Convertor',
    description:"A real-time currency conversion tool powered by live exchange rate APIs. Engineered for accuracy and speed with optimized fetch logic and a minimal, user-friendly interface.",
    image:currency,
    tags:["React","Exchange Rate API","Async JS","Hooks","Tailwind","Responsive Design"],
    github:"https://github.com/Himanshu-bhadu/Currency-Convertor",
    webapp:"https://currency-convertor-six-weld.vercel.app/",
  },
  {
    id: 8,
    title:'Password Generator',
    description:"A customizable password generator enabling users to create highly secure passwords with adjustable strength parameters. Built with a focus on performance, randomness, and usability.",
    image:password,
    tags:["React","State Management","JavaScript","Security","Tailwind"],
    github:"https://github.com/Himanshu-bhadu/Password-Generator",
    webapp:"https://password-generator-three-ivory-33.vercel.app/",
  },
]