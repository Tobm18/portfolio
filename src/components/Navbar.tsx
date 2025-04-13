"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Définir les hauteurs de la navbar
  const NAVBAR_HEIGHT_DESKTOP = 72; // en pixels
  const NAVBAR_HEIGHT_MOBILE = 64; // en pixels
  
  useEffect(() => {
    // Vérifier si l'écran est en mode mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier initialement
    checkMobile();
    
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    
    // Mettre à jour la variable CSS pour scroll-padding-top
    const updateNavbarHeight = () => {
      const navbarHeight = window.innerWidth >= 768 ? NAVBAR_HEIGHT_DESKTOP : NAVBAR_HEIGHT_MOBILE;
      document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    };
    
    // Initialiser la hauteur
    updateNavbarHeight();
    
    // Événements
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      checkMobile();
      updateNavbarHeight();
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${sticky ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className={`container mx-auto px-4 flex justify-between items-center ${isMobile ? 'h-[64px]' : 'h-[72px]'}`}>
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="h-8 w-auto dark:invert"
          />
        </Link>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 transition">À propos</Link>
          <Link href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 transition">Projets</Link>
          <Link href="#experience" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 transition">Expérience</Link>
          <Link href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 transition">Contact</Link>
          <ThemeToggle />
        </nav>
        
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button 
            className="ml-4 text-gray-800 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>À propos</Link>
            <Link href="#projects" className="text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>Projets</Link>            
            <Link href="#experience" className="text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>Expérience</Link>
            <Link href="#contact" className="text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}