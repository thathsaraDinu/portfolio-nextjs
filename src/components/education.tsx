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
              <svg
                height={50}
                width={50}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.211 17.211"
                className="fill-slate-900 dark:fill-white"
              >
                <path d="M14.148,7.781l-5.579,3.327L3.097,7.781l-0.455,2.841c0.002-0.004,0.006-0.007,0.011-0.013 c-0.065,0.109-0.102,0.222-0.102,0.337c0,1.003,4.418,4.094,5.821,4.094c1.404,0,6.323-3.091,6.323-4.094 c0-0.109-0.036-0.214-0.092-0.532L14.148,7.781z"></path>{" "}
                <path d="M17.211,4.873L8.635,2.17l-7.66,2.443C0.867,4.63,0.765,4.658,0.684,4.706l0,0l0,0 c-0.098,0.058-0.165,0.142-0.17,0.266C0.473,5.468,0,11.17,0,11.17l0.514,1.708l0.477-1.708L0.789,5.294l7.823,4.813L17.211,4.873 z M8.015,5.118H0.783l0.756-0.413h6.385C8.007,4.56,8.203,4.458,8.431,4.458c0.304,0,0.55,0.181,0.55,0.403 c0,0.223-0.246,0.404-0.55,0.404C8.261,5.267,8.115,5.207,8.015,5.118z"></path>
              </svg>

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
