import { useContext } from "react";
import dynamic from "next/dynamic";
import ThemeContext from "@/context/theme-context";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";

// Dynamically import the components
const Skills = dynamic(() => import("@/components/skills"));
const Education = dynamic(() => import("@/components/education"));
const Projects = dynamic(() => import("@/components/projects"));
const Contact = dynamic(() => import("@/components/contact"));

export default function Wrapper() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-gray-200 bg-fixed bg-center bg-no-repeat bg-cover dark:bg-[url('/images/background.svg')] dark:bg-slate-950 dark:bg-fixed dark:bg-center dark:bg-no-repeat dark:bg-cover">
      <div className="font-inter">
        {/* Always load NavBar and Hero */}
        <NavBar toggleTheme={toggleTheme} />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Hero theme={theme} />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <About />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Skills theme={theme} />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Education /> {/* Loaded immediately */}
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Projects />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Contact theme={theme} />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Footer /> {/* Loaded immediately */}
      </div>
    </div>
  );
}
