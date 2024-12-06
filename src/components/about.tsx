import React from "react";
import Skills from "./skills";

const About: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:gap-10 py-20 px-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start max-w-[500px]   text-start gap-5 ">
          <div className="flex flex-col gap-2">
            <div className="custom-top-topic">ABOUT ME</div>
            <div className="custom-second-topic">Know who am I</div>
            <div className="custom-third-topic">My Journey in few words</div>
          </div>
          <div className=" font-thin text-white ">
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
        </div>
        <div>
          <img
            src="/images/pexels-olly-846741.jpg"
            alt="about"
            className="w-full hidden lg:block object-cover rounded-lg max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
