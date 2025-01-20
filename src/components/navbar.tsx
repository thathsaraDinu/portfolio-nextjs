"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

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

  const { theme, setTheme } = useTheme();

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
                className="  hover:bg-gray-300 p-1 rounded-md dark:hover:bg-gray-800"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <></>
                )}
                <span className="sr-only">Toggle theme</span>
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
              className="  hover:bg-gray-300 p-1 rounded-md dark:hover:bg-gray-800"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <></>
              )}
              <span className="sr-only">Toggle theme</span>
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
