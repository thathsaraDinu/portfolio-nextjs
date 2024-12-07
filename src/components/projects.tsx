"use client";
import React, { useEffect, useState } from "react";
import { ProjectItem } from "./projectitem";
import { ScrollAnimation } from "@/animation/animation";

interface GitHubProject {
  name: string;
  description: string;
  html_url: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false); // State to control showing all projects

  // Fetch projects from GitHub API
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/thathsaradinu/repos"
      );
      const data = await response.json();

      if (response.ok) {
        const filteredProjects = data.map((project: any) => ({
          name: project.name,
          description: project.description || "No description available",
          html_url: project.html_url,
          language: project.language,
        }));
        setProjects(filteredProjects);
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
          <ScrollAnimation
            initial={{ opacity: 0, y: 50 }}
            className="flex flex-col gap-2 text-center justify-center"
          >
            <div className="custom-top-topic">PROJECTS</div>
            <div className="custom-second-topic">My Projects</div>
            <div className="custom-third-topic">
              A few projects I&apos;ve worked on
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            initial={{ opacity: 0, y: 50 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-3 md:px-0"
          >
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
              projectsToShow.map((project: any) => {
                // Constructing the image URL for each project from GitHub
                const imageUrl = `https://raw.githubusercontent.com/<your-github-username>/${project.name}/main/project-image.jpg`;
                return (
                  <ProjectItem
                    key={project.name}
                    title={project.name}
                    description={project.description || "No description"}
                    link={project.html_url}
                    imageUrl={imageUrl}
                    language={project.language} // The language used in the project
                  />
                );
              })}
          </ScrollAnimation>
        </div>

        {/* View All Button */}
        <ScrollAnimation>
          <button
            className="transition-all duration-200 bg-blue-200 rounded text-blue-800 px-4 py-2 mt-4 hover:bg-blue-400 font-semibold text-sm"
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
