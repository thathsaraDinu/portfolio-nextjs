import React from "react";
import { ProjectItem } from "./projectitem";
import { ScrollAnimation } from "@/animation/animation";

const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-5 ">
      <div className="flex flex-col items-center gap-10 max-w-screen-xl mx-auto">
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <>
              {projects.map((project) => (
                <ProjectItem key={project.title} {...project} />
              ))}
            </>
          </ScrollAnimation>
          <ScrollAnimation>
            <button className="transition-all duration-200 bg-blue-200 rounded text-blue-800 px-4 py-2 mt-4 hover:bg-blue-400 font-semibold text-sm">
              View all
            </button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Projects;
