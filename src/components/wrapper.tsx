import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ThemeContext from "@/context/theme-context";
import { useContext } from "react";

export default function Wrapper() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark:bg-[url('/images/back.svg')]  bg-gray-200 bg-fixed bg-center bg-no-repeat bg-cover dark:bg-slate-900">
      <div className="font-inter">
        <NavBar toggleTheme={toggleTheme} />

        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Hero theme={theme} />

        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <About />

        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Skills theme={theme} />

        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Education />

        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Projects />

        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Contact theme={theme} />

        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Footer />
      </div>
    </div>
  );
}
