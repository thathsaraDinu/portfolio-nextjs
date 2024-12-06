import { NavBar } from "./navbar";
import Image from "next/image";

export function Hero() {
  return (
    <div className="2xl:h-[700px] lg:h-screen  ">
      <div className="max-w-screen-xl mx-auto py-24 px-5  flex justify-between items-center">
        <div className="  flex flex-col gap-4 items-start  max-w-[600px]">
          <h1 className="text-5xl  font-raleway text-blue-200 font-bold">
            Welcome to<br></br> my digital humble abode
          </h1>
          <p className="text-blue-200 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, animi
            quia accusamus totam accusantium aut consequatur omnis?
            Reprehenderit, ipsam molestiae.
          </p>
          <div className=" flex gap-5 text-sm font-semibold">
            <button className="transition-all duration-200 bg-blue-200 rounded text-blue-800 px-4 py-2 mt-4 hover:bg-blue-400">
              Download CV
            </button>
            <button className="transition-all duration-200 bg-transparent border  rounded text-blue-200 hover:bg-blue-200 hover:text-blue-800 px-4 py-2 mt-4">
              Let's talk
            </button>
          </div>
        </div>
        <img
          src="/images/pexels-olly-846741.jpg" // Correct path for local images
          alt="hero"
          className="hidden md:block w-1/2 max-w-[600px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
