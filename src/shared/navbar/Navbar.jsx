import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-10 w-full bg-gradient-to-r from-cyan-500 to-purple-500 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between px-6 py-4 rounded-lg md:w-[1280px] mx-auto">
        <div className="font-bold text-xl">
          <NavLink to="/">
            <div className="flex items-center gap-2">
              <img src="https://i.ibb.co/drZ2mGY/5920.jpg" alt="" className="w-8 h-8 rounded-full" />
              <p>Admission Online</p>
            </div>
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`md:flex md:items-center md:gap-5 md:mt-0 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="text-lg hover:text-white transition-colors duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colleges"
              activeClassName="text-white"
              className="text-lg hover:text-white transition-colors duration-300"
              onClick={() => {
                window.scrollTo({ top: 450, behavior: 'smooth' });
              }}
            >
              Colleges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admission"
              activeClassName="text-white"
              className="text-lg hover:text-white transition-colors duration-300"
              
            >
              Admission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCollege"
              activeClassName="text-white"
              className="text-lg hover:text-white transition-colors duration-300"
             
            >
              My College
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
