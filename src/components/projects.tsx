"use client"

import React, { useEffect, useState } from "react";
import { ScrollAnimation } from "@/animation/scroll-animation";
import { motion } from "framer-motion";
import Image from "next/image";

interface GitHubProject {
  name: string;
  description: string;
  html_url: string;
  language: string; // Add the language property
  updated_at: string; // Add the updated_at property
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false); // State to control showing all projects

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/thathsaradinu/repos"
      );
      const data = await response.json();

      if (response.ok) {
        // Sort projects by the updated_at date (most recent first)
        const sortedProjects = data
          .map((project: GitHubProject) => ({
            name: project.name,
            description: project.description || "No description available",
            html_url: project.html_url,
            language: project.language,
            updated_at: project.updated_at, // Include the updated_at field
          }))
          .sort((a: GitHubProject, b: GitHubProject) => {
            const dateA = new Date(a.updated_at);
            const dateB = new Date(b.updated_at);
            return dateB.getTime() - dateA.getTime(); // Sort in descending order
          });

        setProjects(sortedProjects);
      } else {
        throw new Error("Failed to fetch projects");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Calculate the number of projects to show based on the "showAll" state
  const projectsToShow = showAll ? projects : projects.slice(0, 4); // Show 4 projects initially

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
              Things I&apos;ve Built
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-3 md:px-0">
            {/* Render loading state */}
            {loading && (
              <div className="flex justify-center items-center col-span-full">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
              </div>
            )}

            {/* Render error state */}
            {error && (
              <div className="flex justify-center flex-col items-center col-span-full">
                <div className="text-red-500 font-semibold">{error}</div>
                <button
                  className="transition-all duration-200  rounded text-red-300 p-1 mt-4 hover:text-red-500 font-semibold text-sm"
                  onClick={() => {
                    setLoading(true);
                    setError(null);
                    fetchProjects();
                  }}
                >
                  Retry
                </button>
              </div>
            )}

            {/* Render fetched projects */}
            {!loading &&
              !error &&
              projectsToShow.map((project: GitHubProject, index: number) => {
                const newLocal = `https://raw.githubusercontent.com/thathsaraDinu/${project.name}/main/project-image.jpg`;
                // Constructing the image URL for each project from GitHub
                const imageUrl = newLocal;
                return (
                  <motion.div
                    key={project.name}
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
                    className="dark:bg-slate-800 bg-slate-300  border dark:border-slate-600 border-slate-400 relative h-[350px] col-span-1 dark:text-blue-100 text-blue-950 rounded-md shadow-md z-10 "
                  >
                    <a
                      className="flex flex-col h-full w-full"
                      href={project.html_url}
                      target="_blank"
                    >
                      <Image
                        className="h-[150px] rounded-t-md object-cover"
                        alt="project_image"
                        src={imageUrl}
                        width={400}
                        height={150}
                      />
                      <div className="flex flex-col justify-between items-start gap-3 px-3 py-2">
                        <div className="flex flex-col gap-2">
                          <h2 className="text-lg dark:text-blue-300 text-blue-800  font-bold line-clamp-2">
                            {project.name}
                          </h2>
                          <p className="text-sm line-clamp-3">
                            {project.description}
                          </p>
                        </div>
                        <div
                          className={`absolute ${
                            project.language == null ? "hidden" : ""
                          } left-0 bottom-0 text-sm dark:text-slate-900 text-slate-100 px-2 py-1 rounded-full dark:bg-slate-400 bg-slate-700 font-semibold m-4`}
                        >
                          {project.language}
                        </div>
                      </div>
                    </a>
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
