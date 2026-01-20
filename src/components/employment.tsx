import { ScrollAnimation } from "@/animation/scroll-animation";

export default function Employment() {
  return (
    <section id="employment" className="md:scroll-mt-navbar py-20 md:px-10 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <ScrollAnimation className="flex flex-col justify-center items-center gap-2">
          <div className="custom-top-topic dark:text-lime-200">EMPLOYMENT</div>
          <div className="custom-second-topic dark:text-blue-400">
            Professional Journey
          </div>
          <div className="custom-third-topic dark:text-blue-100">
            My Work Experience
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
                viewBox="0 0 24 24"
                className="fill-slate-900 dark:fill-white"
              >
                <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5 0H9V4h6v2z"/>
              </svg>

              <div className="w-[2px] h-full dark:bg-blue-300 bg-blue-800"></div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5">
              <div className="py-2 px-4 transition-all text-base font-semibold duration-200 rounded-lg dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800">
                Mar 2025 - Sep 2025
              </div>
              <div className="text-lg font-semibold dark:text-white text-blue-950">
                Software Engineer Intern
              </div>
              <div className="body-text text-base dark:text-blue-100 text-blue-900">
                Kingteza Software Solutions
              </div>
              <div className="body-text text-base dark:text-white text-blue-900">
                • Worked on frontend development using React, Vite, and Next.js with libraries like Ant Design, Charts, and Auth0
                <br />
                • Developed backend services primarily using NestJS with PostgreSQL, Prisma ORM, and MongoDB
                <br />
                • Integrated cloud services including Firebase and AWS for scalable application deployment
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
