// BurgerMenu.js
import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Barre de navigation */}
      <nav className="pt-3 pr-4">
        <div className="flex items-center justify-between">

          {/* Bouton du menu burger */}
          <button className="text-white focus:outline-none lg:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Liens de navigation */}
          <div className="hidden lg:flex gap-10">
            <a href="#season" className="text-white" onClick={toggleMenu}>
              Seasons
            </a>
            <a href="#cast" className="text-white" onClick={toggleMenu}>
              Cast
            </a>
          </div>
        </div>
      </nav>

      {/* Menu burger (visible sur les petits écrans) */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75" onClick={toggleMenu}>
          <div className="flex items-center justify-end p-4">
            {/* Bouton pour fermer le menu burger */}
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          {/* Liens du menu burger */}
          <div className="flex flex-col items-center space-y-4">
            <a href="#season" className="text-white" onClick={toggleMenu}>
              Seasons
            </a>
            <a href="#cast" className="text-white" onClick={toggleMenu}>
              Cast
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;