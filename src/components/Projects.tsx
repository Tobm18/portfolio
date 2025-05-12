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
  demoLink?: string;
  codeLink?: string;
  pdfLink?: string;
  category: 'web' | 'reseaux' | 'ecriture';
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'web' | 'reseaux' | 'ecriture'>('web');
  const bookRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // États pour le nouveau système de livre
  const [pageStates, setPageStates] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false
  });
  
  // Référence pour le tooltip global
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // State pour contrôler le contenu et la visibilité du tooltip
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: '',
    x: 0,
    y: 0
  });

  // Fonction pour gérer l'affichage du tooltip avec position ajustée
  const handleShowTooltip = (e: React.MouseEvent, text: string) => {
    // Récupérer les dimensions de la fenêtre
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Position initiale du curseur
    let x = e.clientX + 10;
    let y = e.clientY - 30;
    
    // Estimer la largeur du tooltip (on peut ajuster ces valeurs)
    const estimatedTooltipWidth = text.length * 7; // ~7px par caractère
    const estimatedTooltipHeight = 30; // hauteur approximative
    
    // Ajuster horizontalement si nécessaire
    if (x + estimatedTooltipWidth > windowWidth - 20) {
      x = Math.max(10, windowWidth - estimatedTooltipWidth - 20);
    }
    
    // Ajuster verticalement si nécessaire
    if (y < 10) {
      y = e.clientY + 20; // Afficher en dessous du curseur si trop haut
    } else if (y + estimatedTooltipHeight > windowHeight - 10) {
      y = windowHeight - estimatedTooltipHeight - 10;
    }
    
    setTooltip({
      visible: true,
      text,
      x,
      y
    });
  };

  // Fonction pour masquer le tooltip
  const handleHideTooltip = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };
  
  // Fonction pour suivre la position de la souris quand le tooltip est visible
  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltip.visible) {
      // Appliquer la même logique d'ajustement
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      let x = e.clientX + 10;
      let y = e.clientY - 30;
      
      const estimatedTooltipWidth = tooltip.text.length * 7;
      const estimatedTooltipHeight = 30;
      
      if (x + estimatedTooltipWidth > windowWidth - 20) {
        x = Math.max(10, windowWidth - estimatedTooltipWidth - 20);
      }
      
      if (y < 10) {
        y = e.clientY + 20;
      } else if (y + estimatedTooltipHeight > windowHeight - 10) {
        y = windowHeight - estimatedTooltipHeight - 10;
      }
      
      setTooltip(prev => ({
        ...prev,
        x,
        y
      }));
    }
  };

  // Effet pour détecter la largeur de la fenêtre côté client
  useEffect(() => {
    // Définir la largeur initiale
    setWindowWidth(window.innerWidth);
    
    // Fonction pour mettre à jour la largeur lors du redimensionnement
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Effet pour gérer les événements tactiles et masquer le tooltip
  useEffect(() => {
    // Fonction pour masquer le tooltip lors d'un toucher sur l'écran
    const handleTouchStart = () => {
      if (tooltip.visible) {
        handleHideTooltip();
      }
    };
    
    // Ajouter l'écouteur d'événement tactile au document
    document.addEventListener('touchstart', handleTouchStart);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [tooltip.visible]); // Dépend de l'état de visibilité du tooltip
  
  // Calculer si aucune page n'est retournée
  const noFlippedPages = !Object.values(pageStates).some(state => state);
  
  // Calculer si toutes les pages sont retournées
  const allPagesFlipped = Object.values(pageStates).every(state => state);
  
  // Logique pour déterminer la classe CSS à appliquer
  const bookPositionClass = (noFlippedPages) ? 'no-flipped-page' : (allPagesFlipped ? 'all-flipped-page' : 'has-flipped-page');
  
  // Fonction pour retourner une page du livre
  const togglePage = (page: 'page1' | 'page2' | 'page3' | 'page4' | 'page5') => {
    const newPageStates = {
      ...pageStates,
      [page]: !pageStates[page]
    };
    
    setPageStates(newPageStates);
    
    // Log pour le débogage
    const noPages = !Object.values(newPageStates).some(state => state);
    const allPages = Object.values(newPageStates).every(state => state);
    
    if (noPages) {
      console.log("Aucune page retournée - livre centré (fermé)");
    } else if (allPages) {
      console.log("Toutes les pages retournées - livre centré (ouvert)");
    } else {
      console.log("Certaines pages retournées - livre décalé");
    }
  };

  const projects: Project[] = [
    // Projets Réseaux
    {
      id: 1,
      title: "SAE-21: Réseau d'entreprise",
      description: "Réalisation d'un réseau d'entreprise sur packet tracer dans le cadre d'un projet à l'université. Ce projet en autonomie étalé sur 2 mois, avait pour objectif de construire le réseau d'une entreprise type PME, en utilisant plusieurs technologies dont un ASA Cisco pour toucher au concept de firewall, une DMZ, un serveur DHCP, DNS, différents VLANs, switch de niveau 3 et protocole de routage dynamique EIGRP.",
      image: "/projects/network/sae21.jpg",
      tags: ["Packet Tracer", "Firewall", "DMZ", "DHCP", "DNS", "VLANs"],
      pdfLink: "/projects/network/SAE-21_Consigne.pdf",
      category: "reseaux"
    },
    {
      id: 2,
      title: "SAE-33: Infrastructure réseau complexe",
      description: "Réalisation d'une infrastructure réseau d'entreprise sécurisée, modélisée sur Packet Tracer puis déployée physiquement dans le cadre d'un projet universitaire. Ce travail autonome de deux mois et demis m'a permis de développer une expertise en conception réseau et implémentation de mécanismes de protection, notamment le DHCP snooping et d'autres contre-mesures avancées contre les attaques réseau courantes.",
      image: "/projects/network/sae33.jpg",
      tags: ["Packet Tracer", "Sécurité", "Infrastructure", "Segmentation", "Routage", "VLANs"],
      pdfLink: "/projects/network/SAE-33_Consigne.pdf",
      category: "reseaux"
    },
    
    // Projets Web
    {
      id: 4,
      title: "Ski Club Pégomas",
      description: "Création et maintenance du site web du club U.S. Ski et Montagne - Pegomas. Le site est réalisé avec PHP et Bootstrap, je le gère depuis 2021.",
      image: "/projects/web/skiclub.jpg",
      tags: ["PHP", "Bootstrap", "JavaScript"],
      demoLink: "https://skietmontagnepegomas.com/",
      codeLink: undefined,
      category: "web"
    },
    {
      id: 5,
      title: "R2C - Thales Alenia Space",
      description: "Création d'une application web pour Thales Alenia Space permettant de recenser et trier les bonnes pratiques lors des tests d'avionique.",
      image: "/projects/web/r2c.jpg",
      tags: ["PHP", "MySQL", "JavaScript"],
      demoLink: undefined,
      codeLink: "https://github.com/ROAD-TO-CANNES/R2C",
      category: "web"
    },
    {
      id: 6,
      title: "Bourse aux Skis",
      description: "Application web pour la gestion de la bourse aux skis de Pégomas. Permet d'enregistrer les articles, traiter les ventes et gérer les retours.",
      image: "/projects/web/bourseskis.jpg",
      tags: ["React", "Express.js", "MongoDB"],
      demoLink: "https://bourse.skietmontagnepegomas.com/",
      codeLink: undefined,
      category: "web"
    },
    {
      id: 7,
      title: "Mon Portfolio",
      description: "Ce portfolio, à la base réalisé dans le cadre d'un projet universitaire, a pour objectif de présenter mes compétences, mes créations et mon parcours.",
      image: "/projects/web/portfolio.jpg",
      tags: ["React", "Next.js", "Tailwind CSS"],
      demoLink: "https://tballester.uca-project.online/",
      codeLink: "https://github.com/Tobm18/portfolio",
      category: "web"
    },
    {
      id: 8,
      title: "La Plongée",
      description: "Création d'un site vitrine dans le cadre d'un projet universitaire qui présente la plongée sous marine, une passion commune avec mes amis.",
      image: "/projects/web/plongee.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://plongee.uca-project.online/",
      codeLink: "https://github.com/Tobm18/Projet_site_web_plongee",
      category: "web"
    },
  ];

  // Filtrer les projets en fonction de l'onglet actif
  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-10 md:py-20 bg-gray-50 dark:bg-gray-800" onMouseMove={handleMouseMove}>
      {/* Tooltip global */}
      <div 
        ref={tooltipRef}
        className={`global-tooltip ${tooltip.visible ? 'visible' : ''}`}
        style={{ 
          left: `${tooltip.x + 10}px`, 
          top: `${tooltip.y - 30}px` 
        }}
      >
        {tooltip.text}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Découvrez quelques-uns de mes projets récents. Chaque projet est une occasion d&apos;apprendre et de me perfectionner.
          </p>
          
          {/* Système d'onglets */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            <button 
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveTab('reseaux')}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === 'reseaux' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Réseaux
            </button>
            <button 
              onClick={() => setActiveTab('ecriture')}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === 'ecriture' 
                  ? 'bg-blue-600 text-white' 
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
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Guide de survie R&T</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Dans le cadre d&apos;un projet universitaire nous avons été amenés à écrire un &quot;Guide de survie&quot;. 
                Ce projet qui se présente sous la forme d&apos;un livret est écrit avec une touche d&apos;humour 
                et beaucoup de conseils pour les futurs étudiants en première année du BUT R&T.
              </p>
            </div>
            
            <div className="book-container">
              <p className="book-guide-text block text-center mb-2 italic text-sm">
                Touchez les pages pour feuilleter
              </p>
              <div 
                className={`book ${bookPositionClass}`} 
                ref={bookRef}
              >
                <div className="pages">
                  <div 
                    className={pageStates.page1 ? "page1-flipped" : "page1-default"} 
                    style={{ backgroundImage: `url(${pageStates.page1 ? '/projects/book/page2.png' : '/projects/book/page1.png'})` }}
                  >
                    <label onClick={() => togglePage('page1')}></label>
                  </div>
                  <div 
                    className={pageStates.page2 ? "page2-flipped" : "page2-default"} 
                    style={{ backgroundImage: `url(${pageStates.page2 ? '/projects/book/page4.png' : '/projects/book/page3.png'})` }}
                  >
                    <label onClick={() => togglePage('page2')}></label>
                  </div>
                  <div 
                    className={pageStates.page3 ? "page3-flipped" : "page3-default"} 
                    style={{ backgroundImage: `url(${pageStates.page3 ? '/projects/book/page6.png' : '/projects/book/page5.png'})` }}
                  >
                    <label onClick={() => togglePage('page3')}></label>
                  </div>
                  <div 
                    className={pageStates.page4 ? "page4-flipped" : "page4-default"} 
                    style={{ backgroundImage: `url(${pageStates.page4 ? '/projects/book/page8.png' : '/projects/book/page7.png'})` }}
                  >
                    <label onClick={() => togglePage('page4')}></label>
                  </div>
                  <div 
                    className={pageStates.page5 ? "page5-flipped" : "page5-default"} 
                    style={{ backgroundImage: `url(${pageStates.page5 ? '/projects/book/page10.png' : '/projects/book/page9.png'})` }}
                  >
                    <label onClick={() => togglePage('page5')}></label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Télécharger le PDF */}
            <a 
              href="/projects/Guide_de_survie_R&T.pdf" 
              download
              className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center transition-colors"
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
                <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-600"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-500"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="flex py-6 px-8 space-x-6 snap-x" style={{ width: "fit-content" }}>
                {filteredProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="card hover:scale-100 md:hover:scale-105 group flex-shrink-0 snap-start bg-white dark:bg-gray-900 shadow-[0px_0px_10px_3px_rgba(0,_0,_0,_0.1)] hover:shadow-[0px_0px_15px_5px_rgba(0,_0,_0,_0.15)] dark:shadow-[0px_0px_10px_3px_rgba(0,_0,_0,_0.3)] dark:hover:shadow-[0px_0px_15px_5px_rgba(0,_0,_0,_0.4)] transition-all duration-300" 
                    style={{ width: windowWidth <= 768 ? "300px" : "365px" }}
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
                            {project.demoLink ? (
                              <a 
                                href={project.demoLink} 
                                target='_blank' 
                                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-sm text-center hover:bg-blue-700 transition-colors"
                              >
                                Démo
                              </a>
                            ) : (
                              <div 
                                className="flex-1 px-3 py-2 bg-blue-600/50 text-white rounded text-sm text-center cursor-not-allowed"
                                onMouseEnter={(e) => handleShowTooltip(e, "La démo n'est pas disponible pour ce projet")}
                                onMouseLeave={handleHideTooltip}
                              >
                                Démo
                              </div>
                            )}
                            
                            {project.codeLink ? (
                              <a 
                                href={project.codeLink} 
                                target='_blank' 
                                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded text-sm text-center hover:bg-gray-700 transition-colors"
                              >
                                Code
                              </a>
                            ) : (
                              <div 
                                className="flex-1 px-3 py-2 bg-gray-800/50 text-white rounded text-sm text-center cursor-not-allowed"
                                onMouseEnter={(e) => handleShowTooltip(e, "Le code n'est pas accessible pour ce projet")}
                                onMouseLeave={handleHideTooltip}
                              >
                                Code
                              </div>
                            )}
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
                          <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded">
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