"use client";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  const links = ["home", "about", "skills", "education", "projects", "contact"];

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

  return (
    <>
      {/* mobile responsive */}
      <div id="responsive" className="sm:hidden">
        <div className="w-full flex flex-col justify-start">
          <div className="bg-transparent h-full text-blue-200 p-4 flex justify-between items-center w-full">
            <div className="flex items-center">
              <div className="text-xl font-bold">Logo</div>
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
                <a
                  key={index}
                  href={`#${links[index]}`}
                  className={`transition-all duration-200 p-4 w-full hover:bg-slate-950 bg-transparent ${
                    selectedItem === links[index]
                      ? "text-blue-500 bg-gray-800"
                      : "text-blue-100"
                  }`}
                  onClick={() => handleItemClick(links[index])}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* desktop */}
      <nav
        id="desktop"
        className="hidden sm:flex justify-between px-5 bg-slate-950 bg-opacity-95 sticky top-0 z-50"
      >
        <div className="bg-transparent h-full text-blue-200 flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <div className="text-xl font-bold">Logo</div>
          <div className="flex items-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${links[index]}`}
                className={`transition-all duration-200 group px-5 py-3 text-white ${
                  selectedItem === links[index] ? "bg-gray-800" : ""
                }`}
                onClick={() => handleItemClick(links[index])}
              >
                {item}
                <hr className="transition-all duration-200 w-0 bg-white group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
