"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

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
    <section id="skills" className="w-full py-16 md:py-20">
      <div className="mx-auto w-full max-w-screen-xl px-5">
        <ScrollAnimation>
          <div className="mb-10 flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-primary">
              SKILLS
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">My Expertise</h2>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
              Technologies and tools I use to build web applications, backend
              services, and mobile applications.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.title}>
              <SkillSet category={category} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
