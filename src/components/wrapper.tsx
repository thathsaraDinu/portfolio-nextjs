import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Wrapper() {
  
  return (
    <div className="dark:bg-[url('/images/back.svg')] bg-[url('/images/elementor-placeholder-image.webp')] dark:bg-white bg-fixed bg-center bg-no-repeat bg-cover bg-slate-900">
     
        <div className="font-inter">
          <NavBar />

          <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
          <Hero />

          <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
          <About />

          <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
          <Skills />

          <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
          <Education />

          <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
          <Projects />

          <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
          <Contact />

          <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
          <Footer />
        </div>
    
    </div>
  );
}
