import React from "react";
import { ScrollAnimation } from "@/animation/scroll-animation";

const About: React.FC = () => {
  return (
    <section id="about" className="md:scroll-mt-navbar py-20 md:px-10 px-5">
      <div className="flex justify-center items-center lg:gap-0 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center max-w-[700px] md:w-full text-center gap-5 ">
          <ScrollAnimation>
            <div className="flex flex-col gap-2">
              <div className="custom-top-topic  dark:text-lime-200">
                ABOUT ME
              </div>
              <div className="custom-second-topic  dark:text-blue-400">
                Know who am I
              </div>
              <div className="custom-third-topic  dark:text-blue-100">
                My self in few words
              </div>
            </div>
          </ScrollAnimation>

          <div className="text-blue-950 dark:text-white text-lg">
  <ScrollAnimation initial={{ opacity: 0, x: 0, y: 50 }}>
    I&apos;m a recent graduate of the Sri Lanka Institute of Information Technology
    (SLIIT), where I completed my Bachelor of Science (Hons) in Information Technology,
    specializing in Software Engineering.
  </ScrollAnimation>

  <br />

  <ScrollAnimation initial={{ opacity: 0, x: 0, y: 50 }}>
    I am a full-stack developer focused on building modern, scalable web applications
    using Next.js, Node.js, and TypeScript. I have hands-on experience with PostgreSQL,
    Prisma ORM, and cloud services such as Firebase and AWS, gained through academic
    projects and my internship at Kingteza Software Solutions.
  </ScrollAnimation>

  <br />

  <ScrollAnimation initial={{ opacity: 0, x: 0, y: 50 }}>
    I enjoy solving real-world problems through software engineering, building
    user-friendly and high-performance systems, and continuously learning new technologies.
    I&apos;m always eager to collaborate, contribute, and grow as a developer.
    Feel free to connect with me!
  </ScrollAnimation>
</div>
          {/* <button className="transition-all text-sm font-semibold duration-200 rounded py-2 px-4 mt-4 dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800">
            Know more
          </button> */}
        </div>
        {/* <ScrollAnimation
          className="md:block hidden w-1/3"
          initial={{ opacity: 0, x: 50 }}
        >
          <></>
        </ScrollAnimation> */}
      </div>
    </section>
  );
};

export default About;
