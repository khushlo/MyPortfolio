"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  {/*     font: 500 14px / 100px "Rubik", sans-serif;
    text-transform: uppercase;*/}
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">MyPortfolio</div>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`px-3 py-2 rounded-md transition-colors duration-300  ${
                  activeLink === link
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500'
                }`}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  font: '540 14px/60px "Rubik", sans-serif',
                  textTransform: 'uppercase',
                }}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
