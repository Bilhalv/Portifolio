"use client";

import Image from "next/image";
import i18next from "i18next";
import { useEffect, useState } from "react";
import {
  GitHub,
  LinkedIn,
  Mail,
  Home as HomeIcon,
  AccountTree as ProjectsIcon,
  Info as AboutIcon,
  HomeRepairService as ExperienceIcon,
  School as EducationIcon,
  Code as SkillsIcon,
  ContactMail as ContactIcon,
  LightMode,
  DarkMode,
} from "@mui/icons-material";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const menuItems = [
    {
      name: i18next.language !== "pt" ? "Home" : "Inicio",
      id: "title",
      icon: <HomeIcon />,
    },
    {
      name: i18next.language !== "pt" ? "Projects" : "Projetos",
      id: "projects",
      icon: <ProjectsIcon />,
    },
    {
      name: i18next.language !== "pt" ? "About" : "Sobre",
      id: "about",
      icon: <AboutIcon />,
    },
    {
      name: i18next.language !== "pt" ? "Experience" : "Experiencia",
      id: "experience",
      icon: <ExperienceIcon />,
    },
    {
      name: i18next.language !== "pt" ? "Education" : "Educação",
      id: "education",
      icon: <EducationIcon />,
    },
    {
      name: i18next.language !== "pt" ? "Skills" : "Habilidades",
      id: "skills",
      icon: <SkillsIcon />,
    },
    {
      name: i18next.language !== "pt" ? "Contact" : "Contato",
      id: "contact",
      icon: <ContactIcon />,
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const sections = menuItems.map(({ id }) => ({
        id,
        element: document.getElementById(id),
      }));

      const activeSection = sections.find(
        ({ element }) =>
          element &&
          element.offsetTop <= window.scrollY + 75 &&
          window.scrollY + 75 < element.offsetTop + element.offsetHeight
      );

      if (activeSection) {
        setActiveSection(activeSection.id);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 75;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeChange = () => {
    const newMode = !isDarkMode; // Calculate the new mode
    setIsDarkMode(newMode); // Update state
    document.body.classList.toggle("dark", newMode); // Apply the correct class based on the new mode
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
      {/* Sticky Header */}
      <nav className="sticky top-5 px-6 py-4 rounded-3xl bg-gradient-to-r from-white to-purple-100/75 dark:from-gray-800 dark:to-purple-900/75 z-50 shadow-lg">
        <ul className="flex justify-center sm:gap-12 gap-2 md:gap-6">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="transition-transform transform hover:scale-105"
            >
              <button
                onClick={() => handleScroll(item.id)}
                className={`text-lg transition-colors duration-300 flex flex-col items-center ${
                  activeSection === item.id
                    ? "font-extrabold text-purple-600"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <div>{item.icon}</div>
                <div className="mt-2 hidden md:block">{item.name}</div>
              </button>
            </li>
          ))}
          <li className="flex items-center justify-center">
            <button
              className="flex items-center justify-between w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full transition-colors duration-300"
              onClick={handleModeChange}
            >
              <span
                className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  isDarkMode ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {isDarkMode ? (
                  <DarkMode fontSize="small" />
                ) : (
                  <LightMode fontSize="small" />
                )}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full max-w-6xl">
        {/* Title Section */}
        <section
          id="title"
          className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left"
        >
          <h1 className="text-5xl font-bold">Pedro Bilhalva Oliveira</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {i18next.language !== "pt"
              ? "Analysis and Development Student | Tech Enthusiast"
              : "Estudante de Análise e Desenvolvimento de Sistemas | Entusiasta de Tecnologia"}
          </p>
        </section>

        {/* Featured Project Gallery */}
        <section id="projects" className="w-full">
          <h2 className="text-3xl font-semibold mb-6">
            {i18next.language !== "pt"
              ? "Featured Projects"
              : "Projetos Principais"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              className="group relative border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden sm:size-80 size-60 transition-transform shadow-lg hover:shadow-xl hover:scale-105"
              href="https://github.com/FeirasProjeto/Minha-Feira"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Card Container */}
              <div className="relative w-full h-full">
                {/* Front Side */}
                <div className="flex items-center justify-center h-full">
                  <img
                    src="/Minha-Feira.png"
                    alt="Minha Feira - Aplicativo Web"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                    Minha Feira
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    A web application that allows users to view markets and
                    their locations, register new markets, and make available
                    schedules and detailed information about vendors to the
                    public.
                  </p>
                </div>
              </div>
            </a>
            {/* Placeholder for Future Projects */}
            <div className="flex items-center justify-center w-full h-full text-4xl font-bold text-gray-400 dark:text-gray-600">
              {i18next.language !== "pt" ? "More soon..." : "Mais em breve..."}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full mt-12">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <div className="flex flex-col sm:flex-row gap-8">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {i18next.language !== "pt"
                ? "Olá! I am a student passionate about technology, always seeking new frameworks and opportunities to grow. Currently pursuing a degree in System Analysis and Development at UniSenac, I specialize in web programming, databases, and algorithms. My experience spans roles in IT assistance, website development, and process automation."
                : "Olá! Sou um estudante apaixonado por tenologia, sempre buscando novos frameworks e novas oportunidades para crescer. Atualmente estou cursando Análise e desenvolvimento de sistemas na UniSenac, e especializo em programação web, bancos de dados e algoritmos. Minha experiência abrange cargos de assistente técnico, desenvolvimento de sites e automação de processos."}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full mt-12">
          <h2 className="text-3xl font-semibold mb-4">
            {i18next.language !== "pt" ? "Experience" : "Experiência"}
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-medium">
                {i18next.language !== "pt"
                  ? "IT Assistant"
                  : "Assistente de TI"}
              </h3>
              <p className="text-sm text-gray-600">
                ASSTBM | 2023 - Current | Pelotas, RS, Brazil
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  {i18next.language !== "pt"
                    ? "Technical assistance"
                    : "Assistência técnica"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Website development"
                    : "Desenvolvimento de sites"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Document digitization"
                    : "Digitalização de documentos"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Process automation"
                    : "Automação de processos"}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">
                {i18next.language !== "pt"
                  ? "IT Assistant and Social Media"
                  : "Assistente de TI e Redes Sociais"}
              </h3>
              <p className="text-sm text-gray-600">
                SP Motos | 2023 - 2024 | Pelotas, RS, Brazil
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  {i18next.language !== "pt"
                    ? "Technical assistance"
                    : "Assistência técnica"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Website development"
                    : "Desenvolvimento de sites"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Document digitization"
                    : "Digitalização de documentos"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Process automation"
                    : "Automação de processos"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Social media management"
                    : "Gestão de redes sociais"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full mt-12">
          <h2 className="text-3xl font-semibold mb-4">
            {i18next.language !== "pt" ? "Education" : "Educação"}
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-medium">
                {i18next.language !== "pt"
                  ? "Technologist in System Analysis and Development"
                  : "Tecnólogo em Análise e Desenvolvimento de Sistemas"}
              </h3>
              <p className="text-sm text-gray-600">
                UniSenac | Pelotas, RS, Brazil | Expected Completion: 2025
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  {i18next.language !== "pt"
                    ? "Database (MySQL and MongoDB)"
                    : "Banco de dados (MySQL e MongoDB)"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Web Programming (React.js and TailwindCSS)"
                    : "Programação web (React.js e TailwindCSS)"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Algorithms and Data Structures (Python)"
                    : "Algoritmos e estruturas de dados (Python)"}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">
                {i18next.language !== "pt"
                  ? "Front End Beginner"
                  : "Iniciante em Front End"}
              </h3>
              <p className="text-sm text-gray-600">
                Ada Tech - Santander Coders | 2024
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  {i18next.language !== "pt"
                    ? "Static Front End (HTML and CSS)"
                    : "Front End estático (HTML e CSS)"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Programming Logic (JS)"
                    : "Lógica de programação (JS)"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Object-Oriented Programming (JS)"
                    : "Programação orientada a objetos (JS)"}
                </li>
                <li>
                  {i18next.language !== "pt"
                    ? "Dynamic Front End (JS DOM)"
                    : "Front End dinâmico (JS DOM)"}
                </li>
                <li>Angular I & II</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full mt-12">
          <h2 className="text-3xl font-semibold mb-4">
            {i18next.language !== "pt" ? "Skills" : "Habilidades"}
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-2xl font-medium mb-2">
                <span className="md:hidden">
                  {i18next.language !== "pt" ? "Programming" : "Programação"}
                </span>
                {i18next.language !== "pt" ? "Languages" : "Linguagens"}
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/python.svg"
                    alt="Python"
                  />
                  Python
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/javascript.svg"
                    alt="JavaScript"
                  />
                  JavaScript
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/typescript.svg"
                    alt="TypeScript"
                  />
                  TypeScript
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">
                {i18next.language !== "pt"
                  ? "Frameworks & Libraries"
                  : "Bibliotecas e Frameworks"}
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/react.svg"
                    alt="React.js"
                  />
                  React.js
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/next.svg"
                    alt="Next.js"
                  />
                  Next.js
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/react.svg"
                    alt="React Native"
                  />
                  React Native
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">
                {i18next.language !== "pt"
                  ? "Tools & Platforms"
                  : "Ferramentas e Plataformas"}
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/mysql.svg"
                    alt="MySQL"
                  />
                  MySQL
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/figma.svg"
                    alt="Figma"
                  />
                  Figma
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/vscode.svg"
                    alt="VS Code"
                  />
                  VS Code
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">Personal Attributes</h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/proactivity.svg"
                    alt="Proactivity"
                  />
                  {i18next.language !== "pt" ? "Proactivity" : "Proatividade"}
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/charisma.svg"
                    alt="Charisma"
                  />
                  {i18next.language !== "pt" ? "Charisma" : "Carisma"}
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-2 size-6  dark:invert dark:saturate-100 transition-colors"
                    src="/creativity.svg"
                    alt="Creativity"
                  />
                  {i18next.language !== "pt" ? "Creativity" : "Creatividade"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full mt-12">
          <h2 className="text-3xl font-semibold mb-4">
            {i18next.language !== "pt" ? "Get in Touch" : "Entre em Contato"}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {i18next.language !== "pt"
              ? "Feel free to reach out for collaboration or just a friendly chat."
              : "Estou aberto para colaborações ou também para bater um papo."}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:pedrobilhalvaoliveira@gmail.com"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail />
            </a>
            <a
              href="https://linkedin.com/in/pedrobilhalva"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/bilhalv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <GitHub />
            </a>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 mt-12">
        <p>
          &copy; {new Date().getFullYear()} Pedro Bilhalva Oliveira.{" "}
          {i18next.language !== "pt"
            ? "All rights reserved."
            : "Todos os direitos reservados."}
        </p>
      </footer>
    </div>
  );
}
