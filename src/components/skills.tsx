"use client";

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
import { useTheme } from "next-themes";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

// Define skill type
interface Skill {
  name: string;
  level: number;
  svg?: string;
}

const backend: Skill[] = [
  {
    name: "node.js",
    level: 100,
    svg: "nodejs-original",
  },
  {
    name: "spring-boot",
    level: 100,
    svg: "springboot-original",
  },
  {
    name: "nest.js",
    level: 100,
    svg: "nestjs-original",
  },
];

const tools: Skill[] = [
  {
    name: "git",
    level: 100,
    svg: "git-original",
  },
  {
    name: "aws",
    level: 100,
    svg: "aws-original",
  },
  {
    name: "postman",
    level: 100,
    svg: "postman-original",
  },
];

const frontend: Skill[] = [
  {
    name: "react",
    level: 100,
    svg: "react-original",
  },
  {
    name: "next.js",
    level: 100,
    svg: "next-original",
  },
  {
    name: "flutter",
    level: 100,
    svg: "flutter-original",
  },
];

const databases: Skill[] = [
  {
    name: "mongodb",
    level: 100,
    svg: "mongodb-original",
  },
  {
    name: "firebase",
    level: 100,
    svg: "firebase-original",
  },
  {
    name: "postgresql",
    level: 100,
    svg: "postgresql-original",
  },
];

const chartOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
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
    intersect: true,
    axis: "xy", // ensures tooltips appear on hover over either axis
  },
  cutout: "70%", // Adjust inner radius here (e.g., "50%", "70%", or a pixel value like 50)
};

type SkillSetProps = {
  title: string;
  skills?: Skill[];
  skillType: string;
};

const Skills = () => {
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
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <SkillSet title="Frontend" skills={frontend} skillType="Frontend" />
          <SkillSet title="Backend" skills={backend} skillType="Backend" />
          <SkillSet title="Databases" skills={databases} skillType="Databases" />
          <SkillSet title="Tools" skills={tools} skillType="Tools" />
        </div>

        {/* Skills Section */}
      </div>
    </section>
  );
};

const SkillSet: React.FC<SkillSetProps> = ({
  title,
  skills,
  skillType,
}: SkillSetProps) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-lg text-black dark:text-white font-semibold">
        {title}
      </h1>
      <hr className="dark:border-white w-1/4 border-black"></hr>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {skills?.map((skill: Skill) => (
          <MemoizedSkillChart key={skill.name} skill={skill} skillType={skillType} />
        ))}
      </div>
    </div>
  );
};

interface SkillChartProps {
  skill: Skill;
  skillType: string;
}

const SkillChart: React.FC<SkillChartProps> = ({ skill, skillType }) => {
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
  // Determine theme color based on skill type and current theme
  let themeColor = "";
  if (skillType === "Frontend") {
    themeColor = theme == "dark" ? "#368dff" : "#004eb5";
  } else if (skillType === "Backend") {
    themeColor = theme == "dark" ? "#ff4545" : "#e30000";
  } else if (skillType === "Databases") {
    themeColor = theme == "dark" ? "#00ff55" : "#00c000";
  }
  else if (skillType === "Tools") {
    themeColor = theme == "dark" ? "#ffff00" : "#e2cb00";
  }

  const generateChartData = useMemo(
    () => ({
      labels: [skill.name],
      datasets: [
        {
          data: [skill.level, 100 - skill.level],
          backgroundColor: [ themeColor, "rgba(0, 0, 0, 0)"],
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
      <div className="w-32 h-32 mb-5">
        {hasAnimated && (
          <div className="relative">
            <div>
              <Doughnut data={generateChartData} options={chartOptions}/>
              <div className="absolute inset-0 -z-10 flex justify-center items-center">
                <Image
                  src={`/icons/${skill.svg}.svg`}
                  alt={skill.name}
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MemoizedSkillChart = memo(SkillChart);

export default Skills;
