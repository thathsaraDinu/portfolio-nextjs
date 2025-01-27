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
                My Journey in few words
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}>
            <div className=" text-blue-950 dark:text-white text-lg">
              I’m{" "}
              <span className="font-bold text-blue-900 dark:text-blue-300">
                {" "}
                Thathsara Dinuwan
              </span>
              , a 23-year-old third-year Software Engineering undergraduate at
              the Sri Lanka Institute of Information Technology (SLIIT). I’m
              proficient in both full-stack web development and mobile
              application development, with the help of the proficiency in MERN
              Stack, Next.js and Flutter.
              <br />
              <br />
              <div>
                {" "}
                Always eager to learn and explore new technologies, I aim to
                create impactful solutions and enhance user experiences. Feel
                free to connect!
              </div>
            </div>
            {/* <button className="transition-all text-sm font-semibold duration-200 rounded py-2 px-4 mt-4 dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800">
            Know more
          </button> */}
          </ScrollAnimation>
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
