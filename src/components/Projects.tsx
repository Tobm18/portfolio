"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import "../styles/BookStyles.css"; 

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: 'web' | 'reseaux' | 'ecriture';
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'web' | 'reseaux' | 'ecriture'>('web');
  const [currentPage, setCurrentPage] = useState(0); // 0 = couverture, 1, 2, 3... = pages internes
  const [isFlipping, setIsFlipping] = useState(false);
  const totalPages = 10; // Nombre total de pages dans le livre
  const bookRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    // Projets Web
    {
      id: 1,
      title: "E-commerce Website",
      description: "Une plateforme de commerce électronique complète avec panier, paiement et gestion de compte.",
      image: "/projects/project1.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "web"
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description: "Une application permettant d'organiser et de suivre vos tâches avec des fonctionnalités de glisser-déposer.",
      image: "/projects/project2.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "web"
    },
    {
      id: 3,
      title: "Portfolio Personnel",
      description: "Un site web portfolio moderne et réactif présentant mes compétences et projets.",
      image: "/projects/project3.jpg",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "web"
    },
    
    // Projets Réseaux
    {
      id: 4,
      title: "Système de Monitoring Réseau",
      description: "Outil de surveillance réseau permettant d'analyser le trafic et de détecter les anomalies en temps réel.",
      image: "/projects/project4.jpg",
      tags: ["Python", "SNMP", "Docker", "Grafana"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "reseaux"
    },
    {
      id: 5,
      title: "VPN Sécurisé",
      description: "Mise en place d'une solution VPN d'entreprise avec authentification à deux facteurs.",
      image: "/projects/project5.jpg",
      tags: ["OpenVPN", "Linux", "Cybersecurity"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "reseaux"
    },
    {
      id: 6,
      title: "Configuration SDN",
      description: "Implémentation d'un réseau défini par logiciel pour une infrastructure cloud.",
      image: "/projects/project6.jpg",
      tags: ["OpenFlow", "OpenDaylight", "NetConf"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "reseaux"
    },
    
    // Projets Écriture
    {
      id: 7,
      title: "Blog Tech",
      description: "Une série d'articles techniques sur les dernières tendances en développement web.",
      image: "/projects/project7.jpg",
      tags: ["Markdown", "Technical Writing", "SEO"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "ecriture"
    },
    {
      id: 8,
      title: "Documentation API",
      description: "Documentation complète et guides d'utilisation pour une API RESTful.",
      image: "/projects/project8.jpg",
      tags: ["OpenAPI", "Swagger", "Technical Writing"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "ecriture"
    },
    {
      id: 9,
      title: "Tutoriels de Programmation",
      description: "Série de tutoriels pas-à-pas pour apprendre le développement web moderne.",
      image: "/projects/project9.jpg",
      tags: ["Education", "JavaScript", "React"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "ecriture"
    },
  ];

  // Fonction améliorée pour tourner les pages
  const flipPage = (forward: boolean) => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    
    if (forward && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (!forward && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    
    // Durée de l'animation de rotation
    setTimeout(() => {
      setIsFlipping(false);
    }, 1000);
  };

  // Filtrer les projets en fonction de l'onglet actif
  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Découvrez quelques-uns de mes projets récents. Chaque projet est une occasion d&apos;apprendre et de me perfectionner.
          </p>
          
          {/* Système d'onglets */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            <button 
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === 'web' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveTab('reseaux')}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === 'reseaux' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Réseaux
            </button>
            <button 
              onClick={() => setActiveTab('ecriture')}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === 'ecriture' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Écriture
            </button>
          </div>
        </div>
        
        {/* Projets filtrés ou livre interactif */}
        {activeTab === 'ecriture' ? (
          <div className="flex flex-col items-center">
            {/* Livre interactif 3D amélioré */}
            <div 
              className="relative max-w-4xl w-full mx-auto perspective-1200"
              style={{ height: '500px' }}
            >
              <div 
                ref={bookRef}
                className="book-container absolute inset-0 flex justify-center items-center"
              >
                {/* Ajout d'un élément pour la reliure du livre */}
                <div className={`book-spine ${currentPage > 0 ? 'book-opened' : ''}`}></div>
                
                {/* Couverture du livre avec effet 3D amélioré */}
                <div 
                  className={`book-cover absolute inset-0 bg-primary-800 rounded-lg shadow-2xl transform transition-all duration-1000 ${
                    currentPage > 0 ? 'rotate-y-180 opacity-0' : 'z-50'
                  }`}
                  onClick={() => currentPage === 0 && flipPage(true)}
                  style={{ 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)', 
                    transformStyle: 'preserve-3d' 
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-primary-700 to-primary-900 rounded-lg book-cover-texture">
                    <div className="text-center text-white transform translate-z-5">
                      <h3 className="text-2xl font-bold mb-4 shadow-text">Guide de survie R&T</h3>
                      <p className="mb-8">Cliquez pour ouvrir</p>
                      <button 
                        className="px-6 py-2 bg-white text-primary-900 rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Ouvrir
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pages du livre avec effet 3D amélioré */}
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  const isEvenPage = pageNumber % 2 === 0;
                  
                  const isVisible = pageNumber <= currentPage;
                  const isCurrentlyFlipping = pageNumber === currentPage || pageNumber === currentPage - 1;
                  
                  const isRightPage = isEvenPage;
                  const isLeftPage = !isEvenPage;
                  const isPageOpen = pageNumber <= currentPage;
                  
                  if (Math.abs(pageNumber - currentPage) > 3 && pageNumber !== 1) return null;
                  
                  return (
                    <div 
                      key={pageNumber}
                      className={`absolute book-page ${isRightPage ? 'book-page-right' : 'book-page-left'} ${
                        isCurrentlyFlipping && isFlipping ? (isPageOpen ? 'flipping-right' : 'flipping-left') : ''
                      } ${isVisible ? '' : 'hidden'}`}
                      style={{ 
                        zIndex: isCurrentlyFlipping ? 100 : totalPages - Math.abs(pageNumber - currentPage),
                        transform: isPageOpen && isRightPage ? 'rotateY(-180deg)' : 
                                  !isPageOpen && isLeftPage ? 'rotateY(0deg)' : '',
                      }}
                      onClick={() => {
                        if (isRightPage && pageNumber > currentPage) {
                          flipPage(true);
                        }
                        else if (isLeftPage && pageNumber <= currentPage) {
                          flipPage(false);
                        }
                      }}
                    >
                      <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg book-page-content">
                        <div className={`absolute inset-0 ${isRightPage ? 'bg-white' : 'bg-gray-100'} dark:bg-gray-800 p-4 flex items-center justify-center`}>
                          {/* Contenu de secours qui sera visible si l'image ne charge pas */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 p-4 z-0">
                            <div className="text-center">
                              <h3 className="text-lg font-semibold mb-2">Page {pageNumber}</h3>
                              <p className="text-sm mb-4">Contenu de la page {pageNumber}</p>
                            </div>
                          </div>
                          
                          <Image 
                            src={`/projects/book/page${pageNumber}.png`} 
                            alt={`Page ${pageNumber}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 80vw"
                            className="object-cover z-10"
                            priority={Math.abs(pageNumber - currentPage) < 2}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          
                          {/* Ajout d'un effet d'ombre sur la pliure */}
                          <div className={`page-fold-shadow ${isCurrentlyFlipping && isFlipping ? 'active' : ''} ${isRightPage ? 'right' : 'left'}`}></div>
                          <span className="absolute bottom-2 right-2 bg-white/70 dark:bg-gray-800/70 px-2 py-1 text-xs rounded z-20">
                            {pageNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Contrôles du livre */}
            <div className="mt-8 flex justify-center items-center space-x-8">
              <button 
                onClick={() => flipPage(false)}
                disabled={currentPage <= 0 || isFlipping}
                className={`p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors ${
                  currentPage <= 0 || isFlipping ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="text-gray-900 dark:text-white font-medium">
                Page {currentPage === 0 ? 'Couverture' : currentPage} / {totalPages}
              </div>
              
              <button 
                onClick={() => flipPage(true)}
                disabled={currentPage >= totalPages || isFlipping}
                className={`p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors ${
                  currentPage >= totalPages || isFlipping ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Télécharger le PDF */}
            <a 
              href="/Guide_de_survie_R&T.pdf" 
              download
              className="mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger le livret complet (PDF)
            </a>
          </div>
        ) : (
          // Le reste du code pour les autres onglets...
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="card group">
                {/* Contenu de la carte de projet... */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary-600/70 flex items-center justify-center">
                    <p className="text-white text-lg font-medium">Image de projet</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2">
                        <a href={project.demoLink} className="flex-1 px-3 py-2 bg-primary-600 text-white rounded text-sm text-center">
                          Démo
                        </a>
                        <a href={project.codeLink} className="flex-1 px-3 py-2 bg-gray-800 text-white rounded text-sm text-center">
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}