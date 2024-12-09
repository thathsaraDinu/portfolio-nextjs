import { useContext } from "react";
import dynamic from "next/dynamic";
import ThemeContext from "@/context/theme-context";

// Lazy load the components that are not immediately visible on page load
const About = dynamic(() => import("@/components/about"));
const Contact = dynamic(() => import("@/components/contact"));
const Projects = dynamic(() => import("@/components/projects"));
const Skills = dynamic(() => import("@/components/skills"));
const Hero = dynamic(() => import("@/components/hero"));
const NavBar = dynamic(() => import("@/components/navbar"));

// Footer and Education are loaded immediately
import Footer from "@/components/footer";
import Education from "@/components/education";

export default function Wrapper() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundImage: theme == "dark" ? `url('images/background.svg')` : "",
      }}
      className="bg-gray-200 bg-fixed bg-center bg-no-repeat bg-cover dark:bg-slate-900"
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
