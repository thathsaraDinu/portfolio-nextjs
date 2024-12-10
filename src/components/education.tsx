import Image from "next/image";
import { ScrollAnimation } from "@/animation/scroll-animation";

export default function Education() {
  return (
    <section id="education" className="md:scroll-mt-navbar py-20 md:px-10 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <ScrollAnimation className="flex flex-col justify-center items-center gap-2">
          <div className="custom-top-topic dark:text-lime-200">EDUCATION</div>
          <div className="custom-second-topic dark:text-blue-400">
            Academic Journey
          </div>
          <div className="custom-third-topic dark:text-blue-100">
            My Learning Path
          </div>
        </ScrollAnimation>

        <div className="flex flex-col md:px-10 items-start gap-10 ">
          <ScrollAnimation
            initial={{ opacity: 0, x: -50 }}
            className="flex gap-5 md:gap-10"
          >
            <div className="flex flex-col items-center justify-start gap-2">
              <Image
                src="icons/graduate-cap-svgrepo-com-black.svg"
                width={30}
                height={30}
                alt="grad-hat"
                className="min-h-10 min-w-10 dark:hidden "
              ></Image>

              <Image
                src="icons/graduate-cap-svgrepo-com.svg"
                width={30}
                height={30}
                alt="grad-hat"
                className="min-h-10 min-w-10 hidden dark:block "
              ></Image>

              <div className="w-[2px] h-full dark:bg-blue-300 bg-blue-800"></div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5">
              <div className="py-2 px-4 transition-all text-base font-semibold duration-200 rounded-lg dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800">
                Jul 2022 - Present
              </div>
              <div className="text-lg font-semibold dark:text-white text-blue-950">
                Bachelor of Science in Information Technology specializing in
                Software Engineering
              </div>
              <div className="text-base dark:text-blue-100 text-blue-900">
                Sri Lanka Institute of Technology (SLIIT)
              </div>
              <div className="text-sm dark:text-white text-blue-900">
                Malabe, Sri Lanka
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
