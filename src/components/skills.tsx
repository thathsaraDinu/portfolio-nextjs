"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2"; // Use Doughnut instead of Pie
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend);

// Skills Data
const skills = [
  {
    name: "JavaScript",
    level: 90,
    description:
      "Experienced in ES6+, asynchronous programming, and DOM manipulation.",
  },
  {
    name: "TypeScript",
    level: 85,
    description: "Proficient in static typing, interfaces, and type inference.",
  },
  {
    name: "React",
    level: 80,
    description: "Skilled in hooks, state management, and component lifecycle.",
  },
  {
    name: "Node.js",
    level: 75,
    description:
      "Knowledgeable in server-side development, Express.js, and RESTful APIs.",
  },
  {
    name: "CSS",
    level: 70,
    description: "Adept at responsive design, Flexbox, and CSS Grid.",
  },
];

// Single color for the Donut Chart
const SINGLE_COLOR = "#4CAF50"; // Green color (change it as needed)

// Generate Donut Chart Data
const generateChartData = (skill) => ({
  labels: [skill.name], // No labels
  datasets: [
    {
      data: [skill.level, 100 - skill.level],
      backgroundColor: [SINGLE_COLOR, "rgba(0, 0, 0, 0)"], // Use the single color for the skill
      hoverBackgroundColor: [SINGLE_COLOR, "rgba(0, 0, 0, 0)"], // Hover effect with the same color
      borderWidth: 0, // Remove the border from the donut chart
    },
  ],
});

// Chart Options to hide the legend, show tooltips, and make it a donut
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      enabled: true, // Enable tooltips
      callbacks: {
        label: (context) => {
          // Custom tooltip content, showing the skill name and level
          const level = context.raw;
          return ` ${level}%`;
        },
      },
    },
  },
  interaction: {
    mode: "nearest", // Nearest point on hover
    intersect: false, // Tooltip appears even if not directly on the slice
  },
  // Add the cutout property to make it a donut chart
  cutout: "70%", // This creates a donut chart effect, adjust the value as needed
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-5 ">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="custom-top-topic">SKILLS</div>
          <div className="custom-second-topic">My Skills</div>
          <div className="custom-third-topic">
            Technologies I'm proficient in
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-2 rounded-lg"
            >
              <h3 className="text-sm font-semibold text-center mb-5 text-white">
                {skill.name}
              </h3>
              <div className="w-32 h-32 mb-5">
                <Doughnut
                  data={generateChartData(skill)} // Use Doughnut instead of Pie
                  options={chartOptions} // Apply the chart options
                />
              </div>
              <p className="text-center text-white text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
