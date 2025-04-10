"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import "../styles/BookStyles.css"; 

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  pdfLink?: string;
  category: 'web' | 'reseaux' | 'ecriture';
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'web' | 'reseaux' | 'ecriture'>('web');
  const [currentPage, setCurrentPage] = useState(0); // 0 = couverture, 1, 2, 3... = pages internes
  const [isFlipping, setIsFlipping] = useState(false);
  const totalPages = 10; // Nombre total de pages dans le livre
  const bookRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    // Projets Réseaux
    {
      id: 1,
      title: "SAE-21: Réseau d'entreprise",
      description: "Réalisation d'un réseau d'entreprise sur packet tracer dans le cadre d'un projet à l'université. Ce projet en autonomie étalé sur 2 mois, avait pour objectif de construire le réseau d'une entreprise type PME, en utilisant plusieurs technologies dont un ASA Cisco pour toucher au concept de firewall, une DMZ, un serveur DHCP, DNS, différents VLANs, switch de niveau 3 et protocole de routage dynamique EIGRP.",
      image: "/projects/network/sae21.jpg",
      tags: ["Packet Tracer", "Firewall", "DMZ", "DHCP", "DNS", "VLANs"],
      pdfLink: "/SAE-21_PDF.pdf",
      category: "reseaux"
    },
    {
      id: 2,
      title: "SAE-33: Infrastructure réseau complexe",
      description: "Réalisation d'un réseau d'entreprise avancé sur packet tracer dans le cadre d'un projet universitaire. Ce projet en autonomie étalé sur 2 mois, visait à approfondir mes compétences en construisant une infrastructure réseau complète pour une PME, avec implémentation de sécurité avancée via ASA Cisco, segmentation réseau en zones distinctes, services centralisés et routage dynamique EIGRP optimisé.",
      image: "/projects/network/sae33.jpg",
      tags: ["Packet Tracer", "ASA Cisco", "Sécurité Réseau", "Routage", "EIGRP", "VLANs"],
      pdfLink: "/SAE-21_PDF.pdf",
      category: "reseaux"
    },
    
    // Projets Web
    {
      id: 4,
      title: "Ski Club Pégomas",
      description: "Création et maintenance du site web du club U.S. Ski et Montagne - Pegomas. Le site est réalisé avec PHP et Bootstrap, je le gère depuis 2021.",
      image: "/projects/web/skiclub.jpg",
      tags: ["PHP", "Bootstrap", "MySQL"],
      demoLink: "https://skiclub-pegomas.fr/",
      codeLink: "https://github.com/Tobm18",
      category: "web"
    },
    {
      id: 5,
      title: "R2C - Thales Alenia Space",
      description: "Création d'une application web pour Thales Alenia Space permettant de recenser et trier les bonnes pratiques lors des tests d'avionique.",
      image: "/projects/web/r2c.jpg",
      tags: ["PHP", "MySQL", "Bootstrap"],
      demoLink: "#",
      codeLink: "https://github.com/Tobm18",
      category: "web"
    },
    {
      id: 6,
      title: "La Plongée",
      description: "Création d'un site vitrine dans le cadre d'un projet universitaire qui présente la plongée sous marine, une passion commune avec mes amis.",
      image: "/projects/web/plongee.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://tballester.uca-project.online/plongee/",
      codeLink: "https://github.com/Tobm18",
      category: "web"
    },
    {
      id: 7,
      title: "Bourse aux Skis",
      description: "Application web pour la gestion de la bourse aux skis de Pégomas. Permet d'enregistrer les articles, traiter les ventes et gérer les retours.",
      image: "/projects/web/bourseskis.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "https://bourseauxskis-pegomas.fr/",
      codeLink: "https://github.com/Tobm18",
      category: "web"
    },
    {
      id: 8,
      title: "Premier Portfolio",
      description: "Création de mon site personnel dans le cadre d'un projet universitaire. Ce portfolio présente mes compétences, mes créations et mon parcours.",
      image: "/projects/web/portfolio.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://tballester.uca-project.online/",
      codeLink: "https://github.com/Tobm18/portfolio",
      category: "web"
    },
    
    // Projets d'Écriture
    {
      id: 9,
      title: "Guide de Survie R&T",
      description: "Un guide complet pour les étudiants en Réseaux et Télécommunications.",
      image: "/projects/writing1.jpg",
      tags: ["Documentation", "Pédagogie", "Technique"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "ecriture"
    },
    {
      id: 10,
      title: "Documentation Technique",
      description: "Documentation détaillée pour l'utilisation des outils internes.",
      image: "/projects/writing2.jpg",
      tags: ["SharePoint", "Wiki", "Procédures"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
      category: "ecriture"
    },
    {
      id: 11,
      title: "Articles Techniques",
      description: "Série d'articles sur les bonnes pratiques en DevOps et réseaux.",
      image: "/projects/writing3.jpg",
      tags: ["Blog", "Tutoriels", "Conseils"],
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
        ) : activeTab === 'reseaux' ? (
          // Nouveau style pour les projets réseau
          <div className="max-w-6xl mx-auto">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden shadow-xl mb-10 transition-all hover:shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Image à gauche sur desktop, en haut sur mobile */}
                  <div className="md:col-span-2 relative h-64 md:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Badge "Projet Réseau" */}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Projet Réseau
                    </div>
                  </div>
                  
                  {/* Contenu à droite sur desktop, en bas sur mobile */}
                  <div className="md:col-span-3 p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{project.title}</h3>
                    
                    {/* Grid pour les tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Bouton de téléchargement PDF avec icône */}
                    {project.pdfLink && (
                      <a 
                        href={project.pdfLink}
                        download
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Télécharger la consigne
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Barre colorée en bas avec mention "Packet Tracer" */}
                <div className="bg-blue-600 dark:bg-blue-800 py-2 px-8 flex justify-between items-center">
                  <span className="text-white font-medium">Technologies utilisées: Packet Tracer</span>
                  
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-400 mr-1"></span>
                    <span className="text-white text-sm">Projet complété</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Conteneur avec défilement horizontal
          <>
            <div className="flex justify-between items-center px-2 mb-2">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">Faites défiler pour voir plus →</p>
              <div className="flex space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary-300 dark:bg-primary-700"></span>
                <span className="w-2 h-2 rounded-full bg-primary-400 dark:bg-primary-600"></span>
                <span className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-500"></span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="flex py-6 px-8 space-x-6 snap-x" style={{ width: "fit-content" }}>
                {filteredProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="card hover:scale-100 md:hover:scale-105 group flex-shrink-0 snap-start bg-white dark:bg-gray-900 shadow-[0px_0px_10px_3px_rgba(0,_0,_0,_0.1)] hover:shadow-[0px_0px_15px_5px_rgba(0,_0,_0,_0.15)] dark:shadow-[0px_0px_10px_3px_rgba(0,_0,_0,_0.3)] dark:hover:shadow-[0px_0px_15px_5px_rgba(0,_0,_0,_0.4)] transition-all duration-300" 
                    style={{ width: "320px" }}
                  >
                    {/* Image du projet avec ratio 16:9 */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        sizes="320px"
                        className="object-contain transition-transform"
                        priority={project.id <= 3}
                      />
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
                      {/* Affichage complet du texte (sans line-clamp) */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
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
            </div>
          </>
        )}
      </div>
    </section>
  );
}