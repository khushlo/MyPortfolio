"use client";
import React, { CSSProperties, useState } from "react";

export default function Navbar({ extraStyle }: { extraStyle?: CSSProperties }) {
  const [activeLink, setActiveLink] = useState<string | null>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md" style={extraStyle}>
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
        <div className="text-xl font-bold">MyPortfolio</div>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row`}
        >
          {["Home", "About", "Services", "Projects", "Blog", "Contact"].map(
            (link) => (
              <li key={link} className="text-center md:text-left">
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block px-3 ${
                    isMenuOpen ? "" : "py-2"
                  } md:py-2 rounded-md transition-colors duration-300 ${
                    activeLink === link
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                  }`}
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    font: '600 14px/60px "Rubik", sans-serif',
                    textTransform: "uppercase",
                  }}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
