import React from "react";
import { ScrollAnimation } from "@/animation/scroll-animation";

const About: React.FC = () => {
  return (
    <section id="about" className="md:scroll-mt-navbar py-20 md:px-10 px-5">
      <div className="flex justify-center items-center lg:gap-0 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center max-w-[600px] md:w-full text-center gap-5 ">
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
          <ScrollAnimation
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
          >
            <div className=" text-blue-950 dark:text-white">
              I’m Thathsara Dinuwan, a 23-year-old software engineering student
              at the Sri Lanka Institute of Technology. I specialize in
              full-stack development with a passion for Flutter, Node.js, and
              Next.js. I’m skilled in building both mobile and web apps, using
              languages like Java, JavaScript, Python, and Dart. Always eager to
              learn and explore new technologies, I aim to create impactful
              solutions and enhance user experiences. Feel free to connect!
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
