"use client";

import { useState } from "react";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  const links = ["home", "about", "contact"];

  return (
    <>
      {/* mobile responsive */}
      <div id="responsive" className="sm:hidden">
        <div className="w-full flex flex-col justify-start ">
          <div className=" bg-transparent h-full text-blue-200 p-4 flex justify-between items-center w-full ">
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
        <div className=" mx-auto bg-blue-100 ">
          {menuOpen && (
            <div className="flex flex-col items-end">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${links[index]}`}
                  className="transition-all duration-200 text-blue-100 p-3 w-full hover:bg-blue-800 bg-blue-900 text-end"
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
        className="hidden sm:flex justify-between px-5 bg-slate-950 sticky top-0 z-100"
      >
        <div className=" bg-transparent h-full  text-blue-200  flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <div className="text-xl font-bold">Logo</div>
          <div className="flex items-center  ">
            {menuItems.map((item, index) => (
              <a
                className="transition-all duration-200 group px-4 py-4 text-white "
                key={index}
                href={`#${links[index]}`}
              >
                {item}
                <hr className="transition-all duration-200 w-0 bg-white group-hover:w-full"></hr>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
