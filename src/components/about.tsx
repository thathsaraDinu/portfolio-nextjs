import React from "react";
import { ScrollAnimation } from "@/animation/scroll-animation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:px-10 px-5">
      <div className="flex justify-center items-center lg:gap-0 max-w-screen-xl mx-auto">
        <ScrollAnimation
          initial={{
            opacity: 0,
            x: -50,
          }}
          className="flex flex-col items-start max-w-[600px] md:w-1/2   text-start gap-5 "
        >
          <div className="flex flex-col gap-2">
            <div className="custom-top-topic text-left dark:text-lime-200">
              ABOUT ME
            </div>
            <div className="custom-second-topic text-left dark:text-blue-400">
              Know who am I
            </div>
            <div className="custom-third-topic text-left dark:text-blue-100">
              My Journey in few words
            </div>
          </div>
          <div className=" text-blue-950 dark:text-white  ">
            I’m Thathssara Dinuwan, a 23-year-old software engineering student
            at the Sri Lanka Institute of Technology. I specialize in full-stack
            development with a passion for Flutter, Node.js, and Next.js. I’m
            skilled in building both mobile and web apps, using languages like
            Java, JavaScript, Python, and Dart. Always eager to learn and
            explore new technologies, I aim to create impactful solutions and
            enhance user experiences. Feel free to connect!
          </div>
          <button className="transition-all text-sm font-semibold duration-200 rounded py-2 px-4 mt-4 dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800">
            Know more
          </button>
          <hr className="max-w-screen-xl mx-auto h-2 border-white bg-white" />
        </ScrollAnimation>
        <ScrollAnimation
          className="md:block hidden w-1/2"
          initial={{ opacity: 0, x: 50 }}
        >
          <DotLottieReact
            src="images/blue-shirt-coding.lottie"
            loop
            autoplay
            className="w-full h-full" // Adjust height as per your design needs
          />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
