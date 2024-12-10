import dynamic from "next/dynamic";

// Import the immidiate components statically
const NavBar = dynamic(() => import("@/components/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const About = dynamic(() => import("@/components/about"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

// Dynamically import the non-immidiate components
const Skills = dynamic(() => import("@/components/skills") ,{ssr: false});
const Education = dynamic(() => import("@/components/education"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });

export default function Wrapper() {
  return (
    <div className="bg-gray-200 bg-fixed bg-center bg-no-repeat bg-cover dark:bg-[url('/images/background.svg')] dark:bg-slate-950 dark:bg-fixed dark:bg-center dark:bg-no-repeat dark:bg-cover">
      <div className="font-inter">
        {/* Always load NavBar and Hero */}
        <NavBar />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Hero />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <About />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Skills />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Education /> {/* Loaded immediately */}
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Projects />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Contact />
        <hr className="max-w-screen-xl mx-auto dark:border-white border-black" />
        <Footer /> {/* Loaded immediately */}
      </div>
    </div>
  );
}
