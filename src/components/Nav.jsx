import React, { useState } from 'react';
import { FaBars, FaFilm } from 'react-icons/fa'; // Importamos los iconos de React Icons
import { Link } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-900 shadow-lg p-3">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link
          to="/"
          className="text-white text-2xl font-semibold hover:text-red-500 transition duration-300"
        >
          <div className="flex justify-center items-center gap-3"><FaFilm /> MrPelis.com </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-xl font-semibold hover:text-red-500 transition duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/pelis"
            className="text-white text-xl font-semibold hover:text-red-500 transition duration-300"
          >
            Películas
          </Link>
          <Link
            to="/series"
            className="text-white text-xl font-semibold hover:text-red-500 transition duration-300"
          >
            Series
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-zinc-800 py-4`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link
              to="/"
              className="text-white text-xl font-semibold hover:text-red-500 transition duration-300"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/pelis"
              className="text-white text-xl font-semibold hover:text-red-500 transition duration-300"
              onClick={toggleMenu}
            >
              Películas
            </Link>
          </li>
          <li>
            <Link
              to="/series"
              className="text-white text-xl font-semibold hover:text-red-500 transition duration-300"
              onClick={toggleMenu}
            >
              Series
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
