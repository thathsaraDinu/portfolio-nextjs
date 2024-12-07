"use client";
import { ScrollAnimation } from "@/animation/animation";
import Image from "next/image";

export default function Hero() {
  const handleDownload = async () => {
    const link = document.createElement("a");
    link.href = "/Thathsara-Dinuwan-CV.pdf"; // Replace with the actual path to the file you want to download
    link.download = "Thathsara-Dinuwan-CV.pdf"; // Optional: specify the name of the downloaded file
    link.click(); // Trigger the download
  };
  return (
    <section
      id="home"
      className=" lg:h-screen py-20 flex flex-col justify-center md:px-10 px-5"
    >
      <div className="max-w-screen-xl mx-auto gap-5 flex justify-between items-center">
        <ScrollAnimation
          initial={{ opacity: 0, x: -50 }}
          className="md:w-1/2  flex flex-col gap-5 items-start  max-w-[600px]"
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
            <button
              onClick={handleDownload}
              className="transition-all flex items-center gap-2 duration-200 bg-blue-100 rounded text-blue-800 hover:text-blue-950 px-4 py-2 mt-4 hover:bg-blue-300"
            >
              <span>Download CV</span>
              <Image
                src="/icons/download-minimalistic-svgrepo-com.svg"
                alt="download"
                className="inline-block"
                width={20}
                height={20}
              />
            </button>
            <button className="transition-all duration-200 bg-slate-950 border  rounded text-blue-200 hover:bg-blue-200 hover:text-blue-800 px-4 py-2 mt-4">
              Let&apos;s talk
            </button>
          </div>
          <div className="flex gap-10 pt-5 justify-center items-center w-full md:w-auto">
            <a
              href="https://wa.me/94704151942"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-2 transition-all duration-200"
            >
              <Image
                alt=" "
                width={10}
                height={10}
                className="w-8"
                src="/icons/whatsapp-svgrepo-com.svg"
              />
            </a>
            <a
              href="http://www.linkedin.com/in/thathsara-dinuwan-6872bb2ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-2 transition-all duration-200"
            >
              <Image
                alt="LinkedIn"
                width={10}
                height={10}
                className="w-10"
                src="/icons/linkedin-svgrepo-com.svg"
              />
            </a>
            <a
              href="https://github.com/thathsaraDinu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-2 transition-all duration-200"
            >
              <Image
                alt="GitHub"
                width={10}
                height={10}
                className="w-10"
                src="/icons/github-142-svgrepo-com.svg"
              />
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="hidden md:block w-1/2 max-w-[600px] object-cover rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/elementor-placeholder-image.webp"
            alt="hero"
            width={600}
            height={600}
            className=" rounded-lg"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
