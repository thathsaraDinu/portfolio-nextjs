import React from "react";
import { ProjectItem } from "./projectitem";

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
    <>
      <div className="flex flex-col items-center gap-10 py-20 px-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center max-w-screen-xl text-start gap-10">
          <div className="flex flex-col gap-2 text-center justify-center">
            <div className="custom-top-topic">
              PROJECTS
            </div>
            <div className="custom-second-topic">
              My Projects
            </div>
            <div className="custom-third-topic">
              A few projects I've worked on
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <>
              {projects.map((project) => (
                <ProjectItem key={project.title} {...project} />
              ))}
            </>
          </div>
          <div>
            <button className="bg-slate-200 rounded text-slate-800 px-4 py-2 mt-4 hover:bg-slate-300">
              View all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
