import React from "react";
import { ScrollAnimation } from "@/animation/animation";

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            saepe quasi architecto recusandae aperiam hic molestiae, iusto
            cupiditate ipsam voluptas, quas maxime sequi sed? Quas, nemo, id
            ipsam voluptatibus exercitationem ipsa fuga iste culpa voluptas
            blanditiis aperiam dicta sint sunt veritatis, autem aut fugiat
            ullam!
          </div>
          <button className="transition-all duration-200 bg-blue-200 rounded text-blue-800 px-4 py-2 mt-4 hover:bg-blue-400 text-sm font-semibold border hover:border-blue-800">
            Know more
          </button>
          <hr className="max-w-screen-xl mx-auto h-2 border-white bg-white" />
        </ScrollAnimation>
        <ScrollAnimation initial={{ opacity: 0, x: 50 }}>
          <img
            src="/images/pexels-olly-846741.jpg"
            alt="about"
            className="w-full hidden lg:block object-cover rounded-lg max-w-[400px]"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
