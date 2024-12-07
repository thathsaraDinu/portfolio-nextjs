import React from "react";
import { ScrollAnimation } from "@/animation/animation";
import LottieComponent from "@/animation/lottie";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:px-10 px-5">
      <div className="flex justify-center items-center lg:gap-10 max-w-screen-xl mx-auto">
        <ScrollAnimation
          initial={{
            opacity: 0,
            x: -50,
          }}
          className="flex flex-col items-start max-w-[500px]   text-start gap-5 "
        >
          <div className="flex flex-col gap-2">
            <div className="custom-top-topic text-left">ABOUT ME</div>
            <div className="custom-second-topic text-left">Know who am I</div>
            <div className="custom-third-topic text-left">
              My Journey in few words
            </div>
          </div>
          <div className=" text-white ">
            I’m Thathssara Dinuwan, a 23-year-old software engineering student
            at the Sri Lanka Institute of Technology. I specialize in full-stack
            development with a passion for Flutter, Node.js, and Next.js. I’m
            skilled in building both mobile and web apps, using languages like
            Java, JavaScript, Python, and Dart. Always eager to learn and
            explore new technologies, I aim to create impactful solutions and
            enhance user experiences. Feel free to connect!
          </div>
          <button className="transition-all text-sm font-semibold duration-200 bg-blue-100 rounded text-blue-800 hover:text-blue-950 px-4 py-2 mt-4 hover:bg-blue-300">
            Know more
          </button>
          <hr className="max-w-screen-xl mx-auto h-2 border-white bg-white" />
        </ScrollAnimation>
        <ScrollAnimation initial={{ opacity: 0, x: 50 }}>
          <LottieComponent height={500} width={500} />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
