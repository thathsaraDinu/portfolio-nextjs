import { ScrollAnimation } from "@/animation/scroll-animation";
import Image from "next/image";
import Lottie from "lottie-react";
import animation from "@/assets/3monitors-and-phone-optimized.json";

type HeroType = {
  theme: string;
};

export default function Hero({ theme }: HeroType) {
  const handleOpenPdf = () => {
    const pdfUrl = "/Thathsara-Dinuwan-CV.pdf"; // Replace with the actual URL to your CV PDF
    const newTab = window.open(pdfUrl, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      alert("Please allow pop-ups to open the PDF in a new tab.");
    }
  };

  return (
    <section
      id="home"
      className=" lg:h-[calc(100vh-50px)] py-20 flex flex-col justify-center md:px-10 px-5"
    >
      <div className="max-w-screen-xl mx-auto gap-5 flex justify-between items-center">
        <ScrollAnimation
          initial={{ opacity: 0, x: -20 }}
          className="md:w-1/2  flex flex-col gap-5 items-start  max-w-[600px]"
        >
          <div className="flex flex-col gap-3 font-raleway dark:text-blue-200 text-blue-950 font-bold">
            <div className="text-2xl">
              Crafting code, building solutions
            </div>
            <div className="text-5xl">Welcome to my digital portfolio.</div>
          </div>
          <p className="dark:text-blue-200 text-blue-950 text-lg">
            Hi, I&apos;m{" "}
            <span className="font-bold">
              {" "}
              Thathsara Dinuwan
            </span>
            , a software engineer specializing in mobile and full-stack
            development, building scalable solutions with clean, efficient code.
          </p>
          <div className=" flex gap-5 text-sm font-semibold">
            <button
              onClick={handleOpenPdf}
              className="transition-all flex items-center gap-2 duration-200 px-4 py-2 mt-4 rounded dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800"
            >
              <span>Download CV</span>
              {theme == "light" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                      fill="#FFFFFF"
                    ></path>{" "}
                    <path
                      d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                      fill="#FFFFFF"
                    ></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                      fill="#1C274C"
                    ></path>{" "}
                    <path
                      d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                      fill="#1C274C"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
            <a href="https://wa.me/94704151942" target="_blank">
              <button className="transition-all duration-200 px-4 py-2 mt-4 rounded dark:bg-slate-950 bg-slate-100 border dark:border-white border-black dark:text-blue-100 text-blue-950 dark:hover:bg-slate-100 hover:bg-blue-950 dark:hover:text-blue-950 hover:text-blue-100 ">
                Let&apos;s talk
              </button>
            </a>
          </div>
          {theme == "light" ? (
            <div className="flex gap-10 pt-5 md:px-5 justify-center items-center w-full md:w-auto">
              <a
                href="https://wa.me/94704151942"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  src="icons/whatsapp-svgrepo-com.svg"
                />
              </a>
              <a
                href="http://www.linkedin.com/in/thathsara-dinuwan-6872bb2ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  src="icons/linkedin-svgrepo-com-black.svg"
                />
              </a>
              <a
                href="https://github.com/thathsaraDinu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  alt="GitHub"
                  width={28}
                  height={28}
                  src="icons/github-142-svgrepo-com-black.svg"
                />
              </a>
            </div>
          ) : (
            <div className="flex gap-10 pt-5 md:px-5 justify-center items-center w-full md:w-auto">
              <a
                href="https://wa.me/94704151942"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  src="icons/whatsapp-svgrepo-com-white.svg"
                />
              </a>
              <a
                href="http://www.linkedin.com/in/thathsara-dinuwan-6872bb2ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  src="icons/linkedin-svgrepo-com.svg"
                />
              </a>
              <a
                href="https://github.com/thathsaraDinu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  alt="GitHub"
                  width={28}
                  height={28}
                  src="icons/github-142-svgrepo-com.svg"
                />
              </a>
            </div>
          )}
        </ScrollAnimation>
        <ScrollAnimation
          initial={{ opacity: 0, x: 20 }}
          className="md:w-1/2 hidden md:block"
        >
          <Lottie
            loop={true}
            autoplay={true}
            animationData={animation}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid slice",
            }}
            height={400}
            width={400}
          ></Lottie>
        </ScrollAnimation>
      </div>
    </section>
  );
}
