import About from "@/components/about";
import { Contact } from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="bg-[url('/images/back.svg')] bg-cover ">
      <div className="font-inter">
        <NavBar />
        <Hero />
        <hr className="max-w-screen-xl mx-auto" />
        <About />
        <hr className="max-w-screen-xl mx-auto" />
        <Skills />
        <hr className="max-w-screen-xl mx-auto" />
        <Education />
        <hr className="max-w-screen-xl mx-auto" />
        <Projects />
        <hr className="max-w-screen-xl mx-auto" />
        <Contact />
        <hr className="max-w-screen-xl mx-auto" />
        <Footer />
      </div>
    </div>
  );
}
