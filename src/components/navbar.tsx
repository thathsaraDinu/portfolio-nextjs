"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const menuItems = ["About", "Skills", "Education", "Projects", "Contact"];

  const links = ["about", "skills", "education", "projects", "contact"];

  const handleItemClick = (item: string) => {
    // Scroll to the section with smooth animation
    const section = document.getElementById(item);
    section?.scrollIntoView({
      behavior: "smooth", // Smooth scroll
      block: "start", // Align the top of the section with the top of the viewport
    });

    // Add a delay to change the selected item after scroll
    setTimeout(() => {
      setSelectedItem(item); // Update the selected item after the scroll completes
    }, 500); // Adjust this delay (in milliseconds) to match your scroll animation time
  };

  // Function to set the selected section based on scroll position
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setSelectedItem(entry.target.id); // Set the selected item when the section is in view
      }
    });
  };

  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    });

    // Observe each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const { toggleTheme } = useTheme();

  return (
    <>
      {/* mobile responsive */}
      <nav id="responsive" className="md:hidden dark:bg-slate-950 bg-slate-100">
        <div className="w-full flex flex-col justify-start">
          <div className="bg-transparent h-full dark:text-blue-200 px-4 text-blue-950 flex justify-between items-center w-full">
            <div className="flex p-2 gap-10 items-center">
              <Link href="/#home">
                <Image
                  src="/icons/logo.webp"
                  alt="logo"
                  className="block dark:hidden"
                  width={100}
                  priority
                  height={32}
                />

                <Image
                  src="/icons/logo-dark.webp"
                  className="hidden dark:block"
                  alt="logo"
                  width={100}
                  priority
                  height={32}
                />
              </Link>

              <button
                onClick={toggleTheme}
                className="  hover:bg-gray-300 p-1 rounded-md dark:hover:bg-gray-800"
              >
                <svg
                  className="fill-blue-900 block dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  height={25}
                  width={25}
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>

                <svg
                  className="fill-yellow-300 hidden dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  height={25}
                  width={25}
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="cursor-pointer flex justify-end"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          {menuOpen && (
            <div className="flex flex-col items-start">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/#${links[index]}`}
                  className={`transition-all duration-200 p-4 w-full dark:hover:bg-slate-950 hover:bg-slate-300 bg-transparent ${
                    selectedItem === links[index]
                      ? "dark:text-blue-500 dark:bg-gray-800 bg-slate-100 text-blue-800"
                      : "dark:text-blue-100 text-blue-950"
                  }`}
                  onClick={() => handleItemClick(links[index])}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* desktop */}
      <nav
        id="desktop"
        className="hidden scroll-mt-navbar md:flex justify-between px-5 backdrop-blur-sm dark:bg-slate-950 bg-slate-100 bg-opacity-50 dark:bg-opacity-50 sticky top-0 z-50"
      >
        <div className="bg-transparent h-full dark:text-blue-200 text-blue-950 gap-2 flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <div className="flex gap-10 h-full items-center">
            <Link href="/#home">
              <Image
                src="/icons/logo.webp"
                alt="logo"
                className="block dark:hidden"
                width={100}
                height={32}
                priority
              />

              <Image
                src="/icons/logo-dark.webp"
                className="hidden dark:block"
                alt="logo"
                width={100}
                height={32}
                priority
              />
            </Link>

            <button
              onClick={toggleTheme}
              className=" hover:bg-gray-300 p-1 rounded-md dark:hover:bg-gray-800 group"
            >
              <svg
                className="fill-blue-900 block dark:hidden transform group-hover:rotate-[360deg] transition-all duration-500 ease-in-out"
                fill="currentColor"
                viewBox="0 0 20 20"
                height={25}
                width={25}
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>

              <svg
                className="fill-yellow-300 hidden dark:block group-hover:rotate-[360deg] transition-all duration-500 ease-in-out"
                fill="currentColor"
                viewBox="0 0 20 20"
                height={25}
                width={25}
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center font-semibold">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={`/#${links[index]}`}
                className={`transition-all duration-200 group px-5 py-3 dark:text-blue-100 text-blue-950 dark:hover:text-blue-600 hover:text-blue-600 ${
                  selectedItem === links[index]
                    ? "dark:text-slate-900 bg-gray-200"
                    : ""
                }`}
                onClick={() => handleItemClick(links[index])}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
