"use client";
import { ScrollAnimation } from "@/animation/scroll-animation";
import Lottie from "lottie-react";
import animation from "@/assets/laptopanimation.json";

export default function HeroContent() {
  const handleOpenPdf = () => {
    const pdfUrl = "/Thathsara Dinuwan CV.pdf"; // Replace with the actual URL to your CV PDF
    const newTab = window.open(pdfUrl, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      alert("Please allow pop-ups to open the PDF in a new tab.");
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto gap-5 flex justify-between items-center">
      <ScrollAnimation
        initial={{ opacity: 0, x: -50 }}
        className="md:w-1/2  flex flex-col gap-5 items-start max-w-[600px]"
      >
        <div className="flex flex-col gap-3 font-raleway dark:text-blue-200 text-blue-950 font-bold">
          <div className="text-xl">Crafting code, building solutions</div>
          <div className="text-4xl">Welcome to my digital portfolio.</div>
        </div>
        <p className="dark:text-blue-200 text-blue-950 text-lg">
          Hi, I&apos;m <span className="font-bold"> Thathsara Dinuwan</span>, a
          software engineer specializing in mobile and full-stack development,
          building scalable solutions with clean, efficient code.
        </p>
        <div className=" flex gap-5 text-sm font-semibold">
          <button
            onClick={handleOpenPdf}
            className="transition-all flex items-center gap-2 duration-200 px-4 py-2 mt-4 rounded dark:bg-slate-100 bg-blue-950  dark:text-blue-950 text-blue-100  dark:hover:bg-blue-300 hover:bg-blue-800"
          >
            <span>Download CV</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              className="fill-slate-100 dark:fill-blue-950 "
            >
              <path
                d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <a href="https://wa.me/94704151942" target="_blank">
            <button className="transition-all duration-200 px-4 py-2 mt-4 rounded dark:bg-slate-950 bg-slate-100 border dark:border-white border-black dark:text-blue-100 text-blue-950 dark:hover:bg-slate-100 hover:bg-blue-950 dark:hover:text-blue-950 hover:text-blue-100 ">
              Contact Me
            </button>
          </a>
        </div>
        <div className="flex gap-10 pt-5 md:px-5 justify-center items-center w-full md:w-auto">
          <a
            href="https://wa.me/94704151942"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition-all duration-200"
          >
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-blue-950 dark:fill-white "
                d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
              ></path>
            </svg>
          </a>
          <a
            href="http://www.linkedin.com/in/thathsara-dinuwan-6872bb2ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition-all duration-200"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-950 dark:fill-white "
            >
              <path
                d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/thathsaraDinu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition-all duration-200"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-950 dark:fill-white "
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        initial={{ opacity: 0, x: 50 }}
        className="md:w-1/2 hidden md:block"
      >
        <Lottie
          loop={true}
          autoplay={true}
          animationData={animation}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          className="max-w-[550px]"
        />
      </ScrollAnimation>
    </div>
  );
}
