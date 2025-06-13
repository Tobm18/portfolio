"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Définition des interfaces pour le typage
interface Skill {
  name: string;
  icon: string; // Emoji ou identifiant d'icône
  imageSrc?: string; // Chemin optionnel vers une image
  imageAlt?: string; // Texte alternatif pour l'image
}

interface Certification {
  title: string;
  year: string;
  icon?: string; // Optionnel maintenant
  imageSrc?: string; // Chemin vers l'image
  imageAlt?: string; // Texte alternatif pour l'image
  color: string;
  categories: string[]; // Liste des catégories auxquelles la certification est associée
  certificatePath?: string; // Chemin vers le PDF du certificat
}

interface SkillsCollection {
  [key: string]: Skill[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("web");
  const [showCertifications, setShowCertifications] = useState<boolean>(false);
  const skills: SkillsCollection = {
    web: [
      { name: "HTML/CSS", icon: "", imageSrc: "/skills/htmlcss.webp", imageAlt: "HTML5 et CSS3" },
      { name: "JavaScript", icon: "", imageSrc: "/skills/js.png", imageAlt: "JavaScript" },
      { name: "React", icon: "", imageSrc: "/skills/react.png", imageAlt: "React" },
      { name: "Node.js", icon: "", imageSrc: "/skills/node.png", imageAlt: "Node.js" },
      { name: "TypeScript", icon: "", imageSrc: "/skills/ts.webp", imageAlt: "TypeScript" },
      { name: "Next.js", icon: "▲", imageAlt: "Next.js" },
      { name: "PHP", icon: "", imageSrc: "/skills/php.png", imageAlt: "PHP" },
      { name: "Tailwindcss", icon: "", imageSrc: "/skills/tailwind.png", imageAlt: "TailwindCSS" },
    ],
    network: [
      { name: "Configuration de routeurs/switchs", icon: "", imageSrc: "/skills/router.png", imageAlt: "Routeurs et Switchs" },
      { name: "VLANs", icon: "🌐" },
      { name: "Sécurisation réseau", icon: "🔒" },
      { name: "Dépannage réseau", icon: "🔧" },
    ],
    system: [
      { name: "Windows Server", icon: "🪟", imageSrc: "/skills/windows.png", imageAlt: "Windows Server" },
      { name: "Linux", icon: "🐧", imageSrc: "/skills/linux.png", imageAlt: "Linux" },
      { name: "Docker", icon: "🐳", imageSrc: "/skills/docker.webp", imageAlt: "Docker" },
      { name: "Virtualisation", icon: "🔄", imageSrc: "/skills/vmware.png", imageAlt: "VMware" },
      { name: "Git", icon: "📊", imageSrc: "/skills/git.png", imageAlt: "Git" },
      { name: "Nexus", icon: "📦", imageSrc: "/skills/nexus.png", imageAlt: "Nexus" },
      { name: "Bash", icon: "🖥️", imageSrc: "/skills/bash.png", imageAlt: "Bash" },
      { name: "PowerShell", icon: "💠", imageSrc: "/skills/PowerShell.png", imageAlt: "PowerShell" },
    ],
    soft: [
      { name: "Travail en équipe", icon: "👥" },
      { name: "Communication", icon: "🗣️" },
      { name: "Résolution de problèmes", icon: "🧩" },
      { name: "Adaptabilité", icon: "🔄" },
      { name: "Autodidacte", icon: "📚" },
      { name: "Gestion de projet", icon: "📋" },
    ],
  };
  const certifications: Certification[] = [
    {
      title: "Certification Cisco CCNA V1",
      year: "2024",
      imageSrc: "/skills/cisco.png",
      imageAlt: "Logo Cisco CCNA",
      color: "yellow",
      categories: ["network"],
      certificatePath: "/skills/certif/CCNA1.pdf"
    },
    {
      title: "Certification Cisco CCNA V2",
      year: "2025",
      imageSrc: "/skills/cisco.png",
      imageAlt: "Logo Cisco CCNA",
      color: "yellow",
      categories: ["network"],
      certificatePath: "/skills/certif/CCNA2.pdf"
    },
  ];

  useEffect(() => {
    // Animation pour les éléments qui apparaissent lors du défilement
    const handleScroll = () => {
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll:not(.certification-section)");
      
      elementsToAnimate.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85;
        
        if (isVisible) {
          el.classList.add("animate-visible");
        }
      });
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset le state des certifications quand on change d'onglet
  useEffect(() => {
    setShowCertifications(false);
  }, [activeTab]);  // Fonction pour basculer l'affichage des certifications
  const toggleCertifications = () => {
    setShowCertifications(prev => {
      const newValue = !prev;
      // Si on affiche les certifications, faire un scroll vers elles après un délai pour laisser le temps à l'animation
      if (newValue) {
        setTimeout(() => {
          const certificationSection = document.querySelector('.certification-section');
          if (certificationSection) {
            const rect = certificationSection.getBoundingClientRect();
            const offsetTop = window.pageYOffset + rect.top;
            const windowHeight = window.innerHeight;
            const offset = 80; // Offset de 80px depuis le bas de l'écran
            
            // Calculer la position pour que la section apparaisse 80px plus haut que le bas de l'écran
            const targetPosition = offsetTop - windowHeight + rect.height + offset;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 100); // Délai court pour permettre au DOM de se mettre à jour
      }
      return newValue;
    });
  };

  // Fonction pour ouvrir le certificat dans un nouvel onglet
  const openCertificate = (certificatePath: string) => {
    window.open(certificatePath, '_blank');
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-4">Compétences</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un aperçu de mon expertise technique et de mes compétences professionnelles
          </p>
        </div>
        
        {/* Interface avec hexagones */}
        <div className="mb-16 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                className={`group relative h-28 w-28 md:h-32 md:w-32 transition-all duration-300 ${
                  activeTab === category ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => setActiveTab(category)}
              >
                <div className={`absolute inset-0 flex items-center justify-center clip-hexagon ${
                  activeTab === category 
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                }`}>
                  <div className="text-center">                    
                    <span className="block text-3xl mb-1">
                      {{
                        network: '🌐',
                        web: '💻',
                        system: '🖥️',
                        soft: '🤝'
                      }[category]}
                    </span>
                    <span className="text-sm font-medium">
                      {{
                        network: 'Réseaux',
                        web: 'Web',
                        system: 'Systèmes',
                        soft: 'Soft Skills',
                      }[category]}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Affichage des compétences */}
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-10">
            {/* Utilisation d'un conteneur flex au lieu d'une grille pour permettre un centrage flexible */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {/* Calcul dynamique de l'espace vide à ajouter au début pour centrer */}
              {skills[activeTab].length <= 3 && skills[activeTab].length > 0 && (
                <div className="hidden md:block" style={{ width: skills[activeTab].length === 1 ? '33.33%' : (skills[activeTab].length === 2 ? '16.66%' : '0') }}></div>
              )}
              
              {/* Affichage des compétences */}
              {skills[activeTab].map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    height: '160px',
                    width: 'calc(50% - 8px)', // Pour mobile (2 colonnes)
                    maxWidth: '240px',
                    minWidth: '160px',
                    flex: '1 0 auto',
                    margin: '4px',
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                    {skill.imageSrc ? (
                      <div className="relative h-12 w-12 mx-auto">
                        <Image 
                          src={skill.imageSrc}
                          alt={skill.imageAlt || skill.name}
                          fill
                          sizes="(max-width: 768px) 24px, 48px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-4xl">{skill.icon}</span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}            
            </div>
          </div>
        </div>
        
        {/* Bouton pour afficher les certifications */}
        {certifications.filter(cert => cert.categories.includes(activeTab)).length > 0 && (
          <div className="mt-12 text-center">
            <button 
              onClick={toggleCertifications}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {showCertifications ? (
                <>
                  Masquer les certifications
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  Voir les certifications
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
        
        {/* Certifications */}
        {certifications.filter(cert => cert.categories.includes(activeTab)).length > 0 && showCertifications && (
          <div className={`mt-12 certification-section ${showCertifications ? 'animate-visible' : 'opacity-0 translate-y-6'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 dark:text-white">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">              {certifications
                .filter(cert => cert.categories.includes(activeTab))
                .map((cert, index) => (
                  <div 
                    key={cert.title}
                    className="relative group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                    style={{
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`
                    }}
                    onClick={() => cert.certificatePath && openCertificate(cert.certificatePath)}
                  >
                    <div 
                      className={`absolute top-0 left-0 w-2 h-full ${cert.color !== 'yellow' ? 
                        (cert.color === 'green' ? 'bg-green-600' : cert.color === 'blue' ? 'bg-blue-600' : 'bg-indigo-600') : ''}`}
                      style={cert.color === 'yellow' ? { backgroundColor: '#FACC15' } : {}}
                    ></div>
                    <div className="p-6 pl-8">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full ${cert.color !== 'yellow' ? 
                            (cert.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' : cert.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-indigo-100 dark:bg-indigo-900/30') : ''} flex items-center justify-center`}
                          style={cert.color === 'yellow' ? { backgroundColor: '#facc1570' } : {}}
                        >
                          {cert.imageSrc ? (
                            <div className="relative h-8 w-8">
                              <Image
                                src={cert.imageSrc}
                                alt={cert.imageAlt || cert.title}
                                fill
                                sizes="32px"
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <span className="text-2xl">{cert.icon}</span>
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                          <div className="flex items-center justify-between">
                            <div className="inline-block py-1 px-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                              {cert.year}
                            </div>
                            {cert.certificatePath && (
                              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Voir le certificat
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`absolute bottom-0 left-0 w-0 h-1 ${cert.color !== 'yellow' ? 
                        (cert.color === 'green' ? 'bg-green-600' : cert.color === 'blue' ? 'bg-blue-600' : 'bg-indigo-600') : ''} group-hover:w-full transition-all duration-700`}
                      style={cert.color === 'yellow' ? { backgroundColor: '#FACC15' } : {}}
                    ></div>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}