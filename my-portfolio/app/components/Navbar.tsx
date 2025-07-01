"use client";
import React, { useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-0 left-0 w-full bg-gradient-to-b from-[#0f0f0f] to-[#0b0918] text-white py-4 px-12 shadow-lg justify-between items-center">
        <div className="text-lg font-bold">Namita <span className="text-white">|| Web Developer</span></div>

        <div className="flex items-center space-x-6 font-semibold">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link relative px-4 py-2 text-white after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-indigo-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              {link.name}
            </a>
          ))}
          
          {/* Desktop Social Icons */}
        </div>
         <div className="flex gap-2">
                 <a
                href="https://www.linkedin.com/in/namita-mh"
                target="_blank"
                rel="noopener noreferrer">
                <FiLinkedin
                  size={24}
                  className="inline-block mr-4 text-black hover:text-black px-1 transition-colors fill-black bg-white "
                />
              </a>
              <a
                href="https://github.com/Namiiii-sys"
                target="_blank"
                rel="noopener noreferrer">
                <FiGithub
                  size={24}
                  className="inline-block mr-4 bg-white rounded-full px-1 pt-1 text-gray-800 fill-black "
                />
              </a>
               
            </div>
      </div>

      {/* Mobile Top Row */}
      <div className="md:hidden py-4 px-6 flex justify-end fixed top-0 left-0 w-full bg-[#0f0f0f] shadow-lg z-0">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className="" />
          ) : (
            <FiMenu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Side Panel */}
     {/* Mobile Side Panel */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-3/5 bg-gradient-to-b from-[#0f0f0f] to-[#100e2f] z-40 shadow-lg text-white px-6 py-8">
          {/* Profile Info */}
          <div className="flex flex-col items-start p-6 mb-6">
            {/* <Image
              src={profilePic}
              alt="Namita Mehra"
              width={80}
              height={80}
              className="rounded-full border border-white mb-2"
            /> */}
            <h1 className="text-lg font-bold">Namita Mehra</h1>
            <p className="text-sm text-gray-400">Frontend Developer ✨</p>

          </div>
            <FiX
              size={24}
              className="absolute text-white top-10 right-4 cursor-pointer"
              onClick={() => setIsOpen(false)}/>
          <div className="space-y-5 p-4 mt-10 font-semibold">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:text-indigo-800 rounded transition-all"
              >
                {link.name}
              </a>
            ))}

            <div className="flex justify-start p-4 mt-30 place-items-baseline">
                 <a
                href="https://www.linkedin.com/in/namita-mh"
                target="_blank"
                rel="noopener noreferrer">
                <FiLinkedin
                  size={24}
                  className="inline-block mr-4 text-black hover:text-black px-1 transition-colors fill-black bg-white "
                />
              </a>
              <a
                href="https://github.com/Namiiii-sys"
                target="_blank"
                rel="noopener noreferrer">
                <FiGithub
                  size={24}
                  className="inline-block mr-4 bg-white rounded-full px-1 pt-1 text-gray-800 fill-black "
                />
              </a>
               
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
