"use client"

import React, { useEffect, useRef, useState, useMemo, memo } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { ScrollAnimation } from "@/animation/scroll-animation";
import { useTheme } from "@/context/theme-context";

ChartJS.register(ArcElement, Tooltip, Legend);

// Define skill type
interface Skill {
  name: string;
  level: number;
  description: string;
}

const skills: Skill[] = [
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

const chartOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context) => {
          const level = context.raw as number;
          return ` ${level}%`;
        },
      },
    },
  },
  interaction: {
    mode: "nearest",
    intersect: false,
  },
  cutout: "60%", // Adjust inner radius here (e.g., "50%", "70%", or a pixel value like 50)
};

type SkillsProps = object;

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section id="skills" className="md:scroll-mt-navbar py-20 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        {/* Title Section */}
        <ScrollAnimation className="flex flex-col justify-center items-center gap-2">
          <div className="custom-top-topic dark:text-lime-200">SKILLS</div>
          <div className="custom-second-topic dark:text-blue-400">
            My Expertise
          </div>
          <div className="custom-third-topic dark:text-blue-100">
            Tools and Technologies I Use
          </div>
        </ScrollAnimation>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <MemoizedSkillChart key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillChartProps {
  skill: Skill;
}

const SkillChart: React.FC<SkillChartProps> = ({ skill }) => {
  const { theme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = chartRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const themeColor = theme == "dark" ? "#66a9ff" : "#002f6b";

  const generateChartData = useMemo(
    () => ({
      labels: [skill.name],
      datasets: [
        {
          data: [skill.level, 100 - skill.level],
          backgroundColor: [themeColor, "rgba(0, 0, 0, 0)"],
          hoverBackgroundColor: [themeColor, "rgba(0, 0, 0, 0)"],
          borderWidth: 0,
        },
      ],
    }),
    [skill.level, skill.name, themeColor]
  );

  return (
    <div
      ref={chartRef}
      className="flex flex-col items-center justify-center p-2 rounded-lg"
    >
      <h3 className="text-sm font-semibold text-center mb-5 dark:text-white text-blue-950">
        {skill.name}
      </h3>
      <div className="w-32 h-32 mb-5">
        {hasAnimated && (
          <Doughnut data={generateChartData} options={chartOptions} />
        )}
      </div>
      <p className="text-center dark:text-white text-blue-950 text-sm leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
};

const MemoizedSkillChart = memo(SkillChart);

export default Skills;
