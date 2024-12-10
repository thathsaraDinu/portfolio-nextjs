"use client";
import dynamic from "next/dynamic";

const HeroContent = dynamic(() => import("./hero-content"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="md:scroll-mt-navbar lg:h-[calc(100vh-50px)] py-20 flex flex-col justify-center md:px-10 px-5"
    >
      <HeroContent />
    </section>
  );
}
