
import React, { useState, useEffect, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      return storedTheme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'shop':
        return <ShopPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
