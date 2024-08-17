import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-400 to-pink-300 text-white shadow-lg fixed w-full z-10 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wider cursor-pointer hover:scale-105 transition-transform duration-300">
          My Portfolio
        </h1>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 flex flex-col justify-center items-center w-8 h-6"
          >
            <span
              className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? 'transform rotate-45 translate-y-1' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-white my-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? 'transform -rotate-45 -translate-y-1' : ''
              }`}
            ></span>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 font-semibold tracking-wider">
          <li>
            <a
              href="#hero"
              className="hover:text-gray-100 hover:scale-105 transition-transform duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-100 hover:scale-105 transition-transform duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-100 hover:scale-105 transition-transform duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-100 hover:scale-105 transition-transform duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Transition
        show={isOpen}
        enter="transition-transform ease-out duration-300"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-transform ease-in duration-200"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
      >
        <ul className="md:hidden bg-gradient-to-r from-indigo-400 to-pink-300 p-4 h-screen space-y-14  text-center font-semibold ">
          <li>
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-gray-100 transition-transform duration-300 mt-16"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-gray-100 transition-transform duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-gray-100 transition-transform duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-gray-100 transition-transform duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </Transition>
    </nav>
  );
};

export default Navbar;
