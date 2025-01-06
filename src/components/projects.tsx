"use client";

import React, { useState } from "react";
import { ScrollAnimation } from "@/animation/scroll-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const allProjects = [
    {
      name: "Movie Verse App",
      description:
        "A website with responsive and theme-based design to view all about your favorite movies. Made using tmdb-api.",
      html_url:
        "https://raw.githubusercontent.com/thathsaradinu/movie-verse-web-app/main/project-image.webp",
      techs: ["TypeScript", "Tailwind CSS"],
      technology: "Next.js",
      githubUrl: "https://github.com/thathsaraDinu/Movie-verse-web-app",
      webUrl: "https://movieverseweb.vercel.app/",
    },
    {
      name: "Smart HealthCare web app",
      description:
        "healthcare web app, for book and manage appointments, manage doctors and analysis and documentation of the hospital stats with role based access.",
      html_url:
        "https://raw.githubusercontent.com/thathsaradinu/smart-healthcare-system/main/project-image.webp",
      techs: ["JavaScript", "Tailwind CSS"],
      technology: "MERN",
      githubUrl: "https://github.com/thathsaraDinu/smart-healthcare-system",
      webUrl: "https://smart-healthcare-system.vercel.app/",
    },
    {
      name: "ShopEase E-commerce mobile app",
      description:
        "ShopEase New York is an online shopping mobile app with product catalog, shopping cart, product wishlist and user authentication using firebase-auth.",
      html_url:
        "https://raw.githubusercontent.com/thathsaradinu/ShopEase-e-commerce-app-flutter/main/project-image.webp",
      techs: ["Dart", "Firebase"],
      technology: "Flutter",
      githubUrl:
        "https://github.com/thathsaraDinu/ShopEase-e-commerce-app-flutter",
      webUrl: "",
    },
    {
      name: "Shopiflow shopping mall web app",
      description:
        "A fully responsive web app for shopping mall management with virtual queue for customers, product management, promotion management and shop management.",
      html_url:
        "https://raw.githubusercontent.com/thathsaradinu/shopiflow-shopping-mall-application/main/project-image.webp",
      techs: ["JavaScript", "Tailwind CSS"],
      technology: "MERN",
      githubUrl:
        "https://github.com/thathsaraDinu/shopiflow-shopping-mall-application",
      webUrl: "https://shopiflow-shopping-mall-application.vercel.app/",
    },
    {
      name: "WasteWise waste management mobile app",
      description:
        "healthcare web app, for book and manage appointments, manage doctors and analysis and documentation of the hospital stats with role based access.",
      html_url:
        "https://raw.githubusercontent.com/thathsaradinu/wastewise-waste-management-android-app-flutter/main/project-image.webp",
      techs: ["Dart", "Firebase"],
      technology: "Flutter",
      githubUrl:
        "https://github.com/thathsaraDinu/wastewise-waste-management-android-app-flutter",
      webUrl: "",
    },
    {
      name: "Galaxy Glide Android Game",
      description:
        "An android game to control a space-ship and avoid being hit by meteors.",
      html_url:
        "https://raw.githubusercontent.com/thathsaradinu/GalaxyGlideAndroidGame/main/project-image.webp",
      techs: ["Kotlin"],
      technology: "Android Studio",
      githubUrl: "https://github.com/thathsaraDinu/GalaxyGlideAndroidGame",
      webUrl: "",
    },
  ];

  // Calculate the number of projects to show based on the "showAll" state
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 3); // Show 4 projects initially

  return (
    <section id="projects" className="py-20 md:px-10 px-5 ">
      <div className="flex flex-col items-center gap-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center max-w-screen-xl text-start gap-10">
          <ScrollAnimation className="flex flex-col gap-2 text-center justify-center">
            <div className="custom-top-topic dark:text-lime-200">PROJECTS</div>
            <div className="custom-second-topic dark:text-blue-400">
              My Creations
            </div>
            <div className="custom-third-topic dark:text-blue-100">
              Recent Work
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-0">
            {projectsToShow.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 50 },
                    animate: (index: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1 * index, duration: 0.5 },
                    }),
                  }}
                  custom={index}
                  viewport={{ once: true }}
                  initial="initial"
                  whileInView="animate" // Animate when in view
                  className="dark:bg-slate-800 bg-slate-300  border dark:border-slate-600 border-slate-400 relative  col-span-1 dark:text-blue-100 text-blue-950 rounded-md shadow-md z-10 "
                >
                  <Image
                    className="h-[200px] rounded-t-md object-cover"
                    alt="project_image"
                    src={project.html_url}
                    width={600}
                    height={150}
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop in case the fallback image is also invalid
                      target.src = "images/no_image_placeholder.png"; // Fallback image
                    }}
                  />
                  <div className="flex flex-col justify-between items-start gap-8 px-3 py-4">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg w-full text-center dark:text-blue-300 text-blue-800  font-bold line-clamp-2">
                        {project.name}
                      </h2>
                      <p className="text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-5 text-sm justify-center w-full">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white dark:text-black flex items-center gap-2 border dark:border-slate-200 border-slate-800 px-3 py-2 rounded-md dark:bg-slate-200 bg-slate-900 font-semibold"
                      >
                        <Github size={20} />
                        <span>GitHub</span>
                      </Link>
                      {project.webUrl === "" ? <></> : (
                        <Link
                          href={project.webUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white dark:text-black flex items-center gap-2 border dark:border-slate-200 border-slate-800 px-3 py-2 rounded-md dark:bg-slate-200 bg-slate-900 font-semibold"
                        >
                          <Globe size={20} />
                          <span>Demo</span>
                        </Link>
                      )}
                    </div>
                    <div className="flex justify-center w-full flex-wrap gap-2">
                      <div
                        className={`${
                          project.technology == null ? "hidden" : ""
                        } text-xs dark:text-slate-900 text-slate-100 px-2 py-1 rounded-full dark:bg-blue-400 bg-blue-700 font-semibold`}
                      >
                        {project.technology}
                      </div>
                      {project.techs.map((tech) => (
                        <div
                          key={tech}
                          className={`${
                            project.technology == null ? "hidden" : ""
                          } text-xs dark:text-slate-900 text-slate-100 px-2 py-1 rounded-full dark:bg-slate-400 bg-slate-700 font-semibold`}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View All Button */}
        <ScrollAnimation initial={{ opacity: 0, y: 50 }}>
          <button
            className="transition-all text-sm font-semibold duration-200  px-4 py-2 mt-4 rounded dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800"
            onClick={() => setShowAll((prevState) => !prevState)} // Toggle the showAll state
          >
            {showAll ? "View less" : "View all"}
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
