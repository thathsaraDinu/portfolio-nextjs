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
    <div
      style={{
        backgroundImage: theme == "dark" ? `url('images/background.svg')` : "",
      }}
      className="bg-gray-200 md:scroll-mt-navbar bg-fixed bg-center bg-no-repeat bg-cover dark:bg-slate-900"
    >
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
