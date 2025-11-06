
import React, { useState } from 'react';
import { Page } from '../types';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`group relative font-medium text-charcoal-black dark:text-cream-white pb-1 transition-colors duration-300 hover:text-soft-gold dark:hover:text-soft-gold ${
        isActive ? 'text-soft-gold' : ''
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-[1px] bg-soft-gold transform transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        } group-hover:scale-x-100`}
      ></span>
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNav = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };
  
  return (
    <header className="relative sticky top-0 z-50 transition-all duration-300 bg-cream-white/80 dark:bg-deep-olive/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => handleMobileNav('home')} className="text-2xl font-playfair font-bold tracking-wider text-charcoal-black dark:text-cream-white">
          Mayfa Couture
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
          <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About</NavLink>
          <NavLink page="shop" currentPage={currentPage} setCurrentPage={setCurrentPage}>Custom Abayas</NavLink>
        </nav>
        <div className="flex items-center">
           <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal-black dark:text-soft-gold hover:bg-sage-green/20 dark:hover:bg-soft-gold/10 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
            <div className="relative w-6 h-6">
                <SunIcon className={`absolute transition-all duration-500 transform ${isDarkMode ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <MoonIcon className={`absolute transition-all duration-500 transform ${isDarkMode ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
            </div>
          </button>
          
          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal-black dark:text-cream-white hover:bg-sage-green/20 dark:hover:bg-soft-gold/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden absolute top-full left-0 w-full bg-cream-white/95 dark:bg-deep-olive/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col items-center space-y-6 py-8">
          <NavLink page="home" currentPage={currentPage} setCurrentPage={handleMobileNav}>Home</NavLink>
          <NavLink page="about" currentPage={currentPage} setCurrentPage={handleMobileNav}>About</NavLink>
          <NavLink page="shop" currentPage={currentPage} setCurrentPage={handleMobileNav}>Custom Abayas</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
