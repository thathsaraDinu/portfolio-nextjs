import { NavBar } from "./navbar";
import Image from "next/image";

export function Hero() {
  return (
    <div className="2xl:h-[700px] lg:h-screen  bg-slate-800 font-inter">
      <NavBar />
      <div className="max-w-screen-xl mx-auto py-24 px-5  flex justify-between items-center">
        <div className="  flex flex-col gap-4 items-start  max-w-[600px]">
          <h1 className="text-5xl  font-raleway text-slate-200 font-bold">
            Welcome to<br></br> my digital humble abode
          </h1>
          <p className="text-slate-200 text-sm  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, animi
            quia accusamus totam accusantium aut consequatur omnis?
            Reprehenderit, ipsam molestiae.
          </p>
          <div className="flex gap-5 text-sm">
            <button className="bg-slate-200 rounded text-slate-800 px-4 py-2 mt-4 hover:bg-slate-300">
              Download CV
            </button>
            <button className="bg-transparent border  rounded text-slate-200 hover:bg-slate-200 hover:text-slate-800 px-4 py-2 mt-4">
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
