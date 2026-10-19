"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/animation/scroll-animation";

interface Skill {
  name: string;
  svg: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React", svg: "react-original" },
      { name: "Next.js", svg: "next-original" },
      { name: "Flutter", svg: "flutter-original" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", svg: "nodejs-original" },
      { name: "NestJS", svg: "nestjs-original" },
      { name: "Spring Boot", svg: "springboot-original" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", svg: "postgresql-original" },
      { name: "MongoDB", svg: "mongodb-original" },
      { name: "Firebase", svg: "firebase-original" },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", svg: "git-original" },
      { name: "AWS", svg: "aws-original" },
      { name: "Postman", svg: "postman-original" },
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-5 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="relative h-12 w-12">
        <Image
          src={`/icons/${skill.svg}.svg`}
          alt={skill.name}
          fill
          sizes="48px"
          className="object-contain"
        />
      </div>

      <span className="text-center text-sm font-medium text-foreground">
        {skill.name}
      </span>
    </div>
  );
}

function SkillSet({ category }: { category: SkillCategory }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-lg font-semibold">{category.title}</h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {skillCategories.map((category) => (
            <ScrollAnimation key={category.title}>
              <SkillSet category={category} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
