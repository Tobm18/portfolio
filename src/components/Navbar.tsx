"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  
  // Définir les hauteurs de la navbar
  const NAVBAR_HEIGHT_DESKTOP = 72; // en pixels
  const NAVBAR_HEIGHT_MOBILE = 64; // en pixels
  
  // Gérer l'ouverture/fermeture du menu avec animation
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Petit délai pour permettre au DOM de s'actualiser avant d'afficher l'animation
      setTimeout(() => setMenuVisible(true), 10);
    } else {
      setMenuVisible(false);
      // Attendre que l'animation de fermeture soit terminée avant de masquer complètement
      setTimeout(() => setIsOpen(false), 300);
    }
  };
  
  // Gérer la fermeture du menu avec animation
  const closeMenu = () => {
    setMenuVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };
  
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
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${sticky || isOpen ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className={`container mx-auto px-4 flex justify-between items-center ${isMobile ? 'h-[64px]' : 'h-[72px]'}`}>
        <Link 
          href="#top" 
          className="cursor-pointer" 
          onClick={() => isOpen && closeMenu()}
        >
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="h-8 w-auto dark:invert"
          />
        </Link>        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition">À propos</Link>
          <Link href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition">Projets</Link>
          <Link href="#parcours" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition">Parcours</Link>
          <Link href="#experience" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition">Expérience</Link>
          <Link href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition">Compétences</Link>
          <Link href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition">Contact</Link>
          <ThemeToggle />
        </nav>
        
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button 
            className="ml-4 text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
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
      
      {/* Mobile menu avec animation */}
      {isOpen && (
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuVisible 
              ? 'max-h-60 transform translate-y-0' 
              : 'max-h-0 transform -translate-y-5'
          }`}
        >          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-gray-800 dark:text-gray-200" onClick={closeMenu}>À propos</Link>
            <Link href="#projects" className="text-gray-800 dark:text-gray-200" onClick={closeMenu}>Projets</Link>            
            <Link href="#parcours" className="text-gray-800 dark:text-gray-200" onClick={closeMenu}>Parcours</Link>
            <Link href="#experience" className="text-gray-800 dark:text-gray-200" onClick={closeMenu}>Expérience</Link>
            <Link href="#skills" className="text-gray-800 dark:text-gray-200" onClick={closeMenu}>Compétences</Link>
            <Link href="#contact" className="text-gray-800 dark:text-gray-200" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}