import { ScrollAnimation } from "@/animation/animation";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="2xl:h-[700px] lg:h-screen py-20 md:px-10 px-5">
      <div className="max-w-screen-xl mx-auto gap-5 flex justify-between items-center">
        <ScrollAnimation
          initial={{ opacity: 0, x: -50 }}
          className="md:w-1/2  flex flex-col gap-4 items-start  max-w-[600px]"
        >
          <h1 className="text-5xl  font-raleway text-blue-200 font-bold">
            <div className="text-2xl pb-3 font-raleway text-blue-200 font-bold">
              Crafting code, building solutions
            </div>
            Welcome to my digital portfolio.
          </h1>
          <p className="text-blue-200 text-lg">
            Hi, I&apos;m{" "}
            <span className="text-white font-bold"> Thathsara Dinuwan</span>, a
            software engineer specializing in mobile and full-stack development,
            building scalable solutions with clean, efficient code.
          </p>
          <div className=" flex gap-5 text-sm font-semibold">
            <button className="transition-all duration-200 bg-blue-200 rounded text-blue-800 px-4 py-2 mt-4 hover:bg-blue-400">
              Download CV
            </button>
            <button className="transition-all duration-200 bg-transparent border  rounded text-blue-200 hover:bg-blue-200 hover:text-blue-800 px-4 py-2 mt-4">
              Let&apos;s talk
            </button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="hidden md:block w-1/2 max-w-[600px] object-cover rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/pexels-olly-846741.jpg"
            alt="hero"
            className="w-full rounded-lg"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
