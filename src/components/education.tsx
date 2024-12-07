import { ScrollAnimation } from "@/animation/animation";

export default function Education() {
  return (
    <section id="education" className="py-20 md:px-10 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <ScrollAnimation
          initial={{ opacity: 0, y: 50 }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <div className="custom-top-topic">EDUCATION</div>
          <div className="custom-second-topic">My Education</div>
          <div className="custom-third-topic">My academic background</div>
        </ScrollAnimation>

        <div className="flex flex-col md:px-10 items-start gap-10 ">
          <ScrollAnimation
            initial={{ opacity: 0, x: -50 }}
            className="flex gap-5 md:gap-10"
          >
            <div className="flex flex-col items-center justify-start gap-2">
              <img
                src="icons/graduate-cap-svgrepo-com.svg"
                className="min-h-10 min-w-10 w-10 h-10"
              ></img>
              <div className="w-[2px] h-full bg-blue-400"></div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5">
              <div className="py-2 px-4 transition-all text-base font-semibold duration-200 bg-blue-100 rounded-lg text-blue-800 hover:text-blue-950 hover:bg-blue-300">
                Jul 2022 - Present
              </div>
              <div className="text-lg font-semibold text-white">
                Bachelor of Science in Information Technology specializing in
                Software Engineering
              </div>
              <div className="text-base text-white">
                Sri Lanka Institute of Technology (SLIIT)
              </div>
              <div className="text-sm text-white">Malabe, Sri Lanka</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
