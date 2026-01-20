import dynamic from "next/dynamic";
import ParticlesComponent from "@/components/particles";

// Import the immidiate components statically
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

// Dynamically import the non-immidiate components
const Skills = dynamic(() => import("@/components/skills"));
const Education = dynamic(() => import("@/components/education"));
const Employment = dynamic(() => import("@/components/employment"));
const Projects = dynamic(() => import("@/components/projects"));

export default function Home() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <NavBar />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <Hero />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <About />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <Skills />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <Employment />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <Education />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <Projects />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <Contact />
      <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
      <Footer />
    </div>
  );
}
