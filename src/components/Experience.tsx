"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function Experience() {
  // Fonction pour animer les éléments de la timeline lorsqu'ils sont visibles
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    
    const handleScroll = () => {
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = 
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        
        if (isVisible) {
          item.classList.add("in-view");
        }
      });
    };
    
    // Vérifier au chargement, au défilement et au redimensionnement
    window.addEventListener("load", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);
    
    // Nettoyage des écouteurs d'événements
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Parcours</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Mon parcours professionnel et académique au fil du temps.
          </p>
        </div>
        
        <div className="timeline relative max-w-4xl mx-auto">
          {/* Ligne verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 md:bg-gradient-to-b md:from-transparent md:via-blue-600/60 md:to-transparent dark:md:via-blue-600/60 bg-gray-300 dark:bg-gray-700 md:z-0"></div>
          
          {/* Expériences */}
          <div className="timeline-container">
            {/* ProBTP */}
            <div className="timeline-item mb-16 relative opacity-0 translate-y-5 transition-all duration-800 delay-300 group">
              <div className="timeline-dot absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:bg-blue-700 group-hover:scale-110 md:translate-y-2"></div>
              
              <div className="timeline-content bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-5/12 md:ml-0 ml-8 md:mr-auto relative hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 md:border-l-4 md:border-r-0 border-transparent hover:border-l-blue-600 md:hover:border-l-blue-600 hover:shadow-xl">
                <div className="hidden md:block absolute right-[-16px] top-2 w-0 h-0 border-solid border-transparent border-l-[16px] border-l-white dark:border-l-gray-900 z-[1]"></div>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                    <Image src="/img/pro_btp.avif" alt="ProBTP" width={40} height={40} className="rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">ProBTP</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-5 inline-flex items-center relative">
                      <span className="absolute left-0 w-3.5 h-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      09/2023 - Aujourd&apos;hui
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Apprenti DevOps en contrat d&apos;apprentissage chez ProBTP à Cagnes-sur-Mer. 
                  Mes missions incluent la migration des wikis vers SharePoint, la surveillance des licences logicielles et le développement d&apos;outils internes.
                </p>
              </div>
            </div>
            
            {/* IUT Nice Côte d'Azur */}
            <div className="timeline-item mb-16 relative opacity-0 translate-y-5 transition-all duration-800 delay-300 group">
              <div className="timeline-dot absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:bg-blue-700 group-hover:scale-110 md:translate-y-2"></div>
              
              <div className="timeline-content bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-5/12 md:ml-auto ml-8 md:mr-0 relative hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 md:border-r-4 md:border-l-0 border-transparent hover:border-l-blue-600 md:hover:border-r-blue-600 hover:shadow-xl">
                <div className="hidden md:block absolute left-[-16px] top-2 w-0 h-0 border-solid border-transparent border-r-[16px] border-r-white dark:border-r-gray-900 z-[1]"></div>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                    <Image src="/img/logo-iut.png" alt="IUT Nice Côte d'Azur" width={40} height={40} className="rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">IUT Nice Côte d&apos;Azur</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-5 inline-flex items-center relative">
                      <span className="absolute left-0 w-3.5 h-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      09/2023 - Aujourd&apos;hui
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Étudiant en BUT-2 Réseaux et Télécommunications, parcours cybersécurité, à l&apos;université Nice Côte d&apos;Azur à Biot.
                </p>
              </div>
            </div>
            
            {/* Instant-System */}
            <div className="timeline-item mb-16 relative opacity-0 translate-y-5 transition-all duration-800 delay-300 group">
              <div className="timeline-dot absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:bg-blue-700 group-hover:scale-110 md:translate-y-2"></div>
              
              <div className="timeline-content bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-5/12 md:ml-0 ml-8 md:mr-auto relative hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 md:border-l-4 md:border-r-0 border-transparent hover:border-l-blue-600 md:hover:border-l-blue-600 hover:shadow-xl">
                <div className="hidden md:block absolute right-[-16px] top-2 w-0 h-0 border-solid border-transparent border-l-[16px] border-l-white dark:border-l-gray-900 z-[1]"></div>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                    <Image src="/img/logo_Instant_system.png" alt="Instant-System" width={40} height={40} className="rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Instant-System</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-5 inline-flex items-center relative">
                      <span className="absolute left-0 w-3.5 h-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      10/2022 - 08/2023
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Apprenti technicien informatique en contrat d&apos;apprentissage chez Instant-System à Biot.
                </p>
              </div>
            </div>
            
            {/* 2iTech Academy */}
            <div className="timeline-item mb-16 relative opacity-0 translate-y-5 transition-all duration-800 delay-300 group">
              <div className="timeline-dot absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:bg-blue-700 group-hover:scale-110 md:translate-y-2"></div>
              
              <div className="timeline-content bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-5/12 md:ml-auto ml-8 md:mr-0 relative hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 md:border-r-4 md:border-l-0 border-transparent hover:border-l-blue-600 md:hover:border-r-blue-600 hover:shadow-xl">
                <div className="hidden md:block absolute left-[-16px] top-2 w-0 h-0 border-solid border-transparent border-r-[16px] border-r-white dark:border-r-gray-900 z-[1]"></div>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                    <Image src="/img/logo_2itech.png" alt="2iTech Academy" width={40} height={40} className="rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">2iTech Academy</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-5 inline-flex items-center relative">
                      <span className="absolute left-0 w-3.5 h-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      10/2022 - 08/2023
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Étudiant en TSSR (Technicien Supérieur Système et Réseaux) à 2iTech Academy à Sophia-Antipolis.
                </p>
              </div>
            </div>
            
            {/* Lycée */}
            <div className="timeline-item mb-16 relative opacity-0 translate-y-5 transition-all duration-800 delay-300 group">
              <div className="timeline-dot absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:bg-blue-700 group-hover:scale-110 md:translate-y-2"></div>
              
              <div className="timeline-content bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-5/12 md:ml-0 ml-8 md:mr-auto relative hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 md:border-l-4 md:border-r-0 border-transparent hover:border-l-blue-600 md:hover:border-l-blue-600 hover:shadow-xl">
                <div className="hidden md:block absolute right-[-16px] top-2 w-0 h-0 border-solid border-transparent border-l-[16px] border-l-white dark:border-l-gray-900 z-[1]"></div>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                    <Image src="/img/logo_lycee.png" alt="Lycée Alexis de Tocqueville" width={40} height={40} className="rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Lycée Alexis de Tocqueville</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-5 inline-flex items-center relative">
                      <span className="absolute left-0 w-3.5 h-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      06/2022
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Passage du baccalauréat STI2D au lycée Alexis de Tocqueville à Grasse, obtenu avec mention assez bien.
                </p>
              </div>
            </div>
            
            {/* Mission Locale */}
            <div className="timeline-item mb-16 relative opacity-0 translate-y-5 transition-all duration-800 delay-300 group">
              <div className="timeline-dot absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:bg-blue-700 group-hover:scale-110 md:translate-y-2"></div>
              
              <div className="timeline-content bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-5/12 md:ml-auto ml-8 md:mr-0 relative hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 md:border-r-4 md:border-l-0 border-transparent hover:border-l-blue-600 md:hover:border-r-blue-600 hover:shadow-xl">
                <div className="hidden md:block absolute left-[-16px] top-2 w-0 h-0 border-solid border-transparent border-r-[16px] border-r-white dark:border-r-gray-900 z-[1]"></div>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                    <Image src="/img/logo_mlpg.png" alt="Mission Locale" width={40} height={40} className="rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Mission Locale du Pays de Grasse</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-5 inline-flex items-center relative">
                      <span className="absolute left-0 w-3.5 h-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      02/2022
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Stage en tant que développeur web à la Mission Locale du Pays de Grasse pour aider au développement du site.
                </p>
              </div>
            </div>
            
            {/* CSTB */}
            <div className="timeline-item relative opacity-0 translate-y-5 transition-all duration-800 delay-300 group">
              <div className="timeline-dot absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:bg-blue-700 group-hover:scale-110 md:translate-y-2"></div>
              
              <div className="timeline-content bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-5/12 md:ml-0 ml-8 md:mr-auto relative hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 md:border-l-4 md:border-r-0 border-transparent hover:border-l-blue-600 md:hover:border-l-blue-600 hover:shadow-xl">
                <div className="hidden md:block absolute right-[-16px] top-2 w-0 h-0 border-solid border-transparent border-l-[16px] border-l-white dark:border-l-gray-900 z-[1]"></div>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                    <Image src="/img/logo_CSTB.jpeg" alt="CSTB" width={40} height={40} className="rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">CSTB</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-5 inline-flex items-center relative">
                      <span className="absolute left-0 w-3.5 h-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      12/2018
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Stage d&apos;observation au CSTB à Sophia-Antipolis au pôle développement web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-item.in-view {
          opacity: 1;
          transform: translateY(0);
          transition-duration: 1.2s;
        }
      `}</style>
    </section>
  );
}