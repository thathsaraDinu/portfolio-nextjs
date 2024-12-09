import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2"; // Use Doughnut instead of Pie
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useInView } from "react-intersection-observer"; // Hook for scroll-based detection

// Register Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend);

// Skills Data
const skills = [
  {
    name: "Flutter",
    level: 85,
    description:
      "Proficient in building cross-platform apps, state management, and integrating Firebase.",
  },
  {
    name: "React",
    level: 85,
    description:
      "Skilled in hooks, state management, component lifecycle, and building scalable web applications.",
  },
  {
    name: "Node.js",
    level: 75,
    description:
      "Knowledgeable in server-side development, Express.js, and RESTful APIs.",
  },
  {
    name: "MongoDB",
    level: 75,
    description:
      "Experienced in database design, querying, and working with aggregation pipelines.",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    description:
      "Adept at creating responsive designs, custom utility classes, and optimizing CSS for modern web apps.",
  },
];

// Chart Options
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      enabled: true, // Enable tooltips
      callbacks: {
        label: (context: { raw: unknown }) => {
          const level = context.raw;
          return ` ${level}%`; // Custom tooltip content
        },
      },
    },
  },
  interaction: {
    mode: "nearest" as const, // Nearest point on hover
    intersect: false, // Tooltip appears even if not directly on the slice
  },
  cutout: "70%", // Creates a donut chart effect
};

const Skills = ({ theme }: { theme: string }) => {
  return (
    <section id="skills" className="py-20 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        {/* Title Section */}
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="custom-top-topic dark:text-lime-200">SKILLS</div>
          <div className="custom-second-topic dark:text-blue-400">
            My Expertise
          </div>
          <div className="custom-third-topic dark:text-blue-100">
            Tools and Technologies I Use
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <SkillChart theme={theme} key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Single Skill Chart Component
const SkillChart: React.FC<{
  skill: { name: string; level: number; description: string };
  theme: string;
}> = ({ skill, theme }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Fire when 20% of the component is visible
  });

  const SINGLE_COLOR = theme === "light" ? "#002f6b" : "#66a9ff";

  const generateChartData = useMemo(
    () => ({
      labels: [skill.name], // No labels
      datasets: [
        {
          data: [skill.level, 100 - skill.level],
          backgroundColor: [SINGLE_COLOR, "rgba(0, 0, 0, 0)"], // Use the single color for the skill
          hoverBackgroundColor: [SINGLE_COLOR, "rgba(0, 0, 0, 0)"], // Hover effect with the same color
          borderWidth: 0, // Remove the border from the donut chart
        },
      ],
    }),
    [skill, SINGLE_COLOR]
  );

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-2 rounded-lg"
    >
      <h3 className="text-sm font-semibold text-center mb-5 dark:text-white text-blue-950">
        {skill.name}
      </h3>
      <div className="w-32 h-32 mb-5">
        {/* Render the chart only when inView is true */}
        {inView && <Doughnut data={generateChartData} options={chartOptions} />}
      </div>
      <p className="text-center dark:text-white text-blue-950 text-sm leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
};

export default Skills;
