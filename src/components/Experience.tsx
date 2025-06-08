"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function Experience() {
  useEffect(() => {
    // Animation pour faire apparaître les cartes d'expérience
    const experienceCards = document.querySelectorAll(".experience-card");
    
    const handleScroll = () => {
      experienceCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        
        if (isVisible) {
          setTimeout(() => {
            card.classList.add("in-view");
          }, index * 200); // Ajouter un délai progressif pour chaque carte
        }
      });
    };
    
    // Vérifier au chargement et au défilement
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="py-10 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Expérience Professionnelle</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mon expertise et mes compétences techniques développées au fil de mes expériences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* ProBTP - Expérience détaillée */}
          <div className="experience-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 translate-y-5">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                <Image src="/img/pro_btp.avif" alt="ProBTP" width={40} height={40} className="rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DevOps chez ProBTP</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Septembre 2024 - Présent</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                En tant qu&apos;apprenti DevOps chez ProBTP, j&apos;interviens sur plusieurs domaines essentiels :
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Migration des wikis d&apos;entreprise vers SharePoint avec automatisation des processus</li>
                <li>Développement d&apos;outils internes pour la gestion et l&apos;optimisation des ressources</li>
                <li>Mise en place de systèmes de surveillance des licences logicielles</li>
                <li>Participation aux cycles CI/CD et à l&apos;amélioration continue des processus</li>
              </ul>
            </div>
          </div>
          
          {/* Instant-System - Expérience détaillée */}
          <div className="experience-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 translate-y-5">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                <Image src="/img/logo_Instant_system.png" alt="Instant-System" width={40} height={40} className="rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Technicien Informatique chez Instant-System</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Octobre 2022 - Août 2023</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                Chez Instant-System, j&apos;ai eu l&apos;opportunité de développer mes compétences techniques en :
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Gestion et maintenance du parc informatique</li>
                <li>Gestion de la sécurisation des systèmes</li>
                <li>Configuration et déploiement de postes de travail</li>
                <li>Support technique et assistance aux collaborateurs</li>
              </ul>
            </div>
          </div>
          
          {/* Mission Locale - Expérience détaillée */}
          <div className="experience-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 translate-y-5">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                <Image src="/img/logo_mlpg.png" alt="Mission Locale" width={40} height={40} className="rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Développeur Web à la Mission Locale</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Février 2022</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                Lors de mon stage à la Mission Locale du Pays de Grasse, j&apos;ai contribué au développement du site web :
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Amélioration de l&apos;interface utilisateur</li>
                <li>Intégration de nouveaux contenus et fonctionnalités</li>
                <li>Optimisation pour une meilleure expérience utilisateur</li>
                <li>Travail en équipe avec les responsables de communication</li>
              </ul>
            </div>
          </div>
          
          {/* CSTB - Expérience détaillée */}
          <div className="experience-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 translate-y-5">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                <Image src="/img/logo_CSTB.jpeg" alt="CSTB" width={40} height={40} className="rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Stage d&apos;observation au CSTB</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Décembre 2018</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                Au Centre Scientifique et Technique du Bâtiment à Sophia-Antipolis, j&apos;ai pu observer le travail de l&apos;équipe de développement web :
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Découverte des méthodologies de travail en équipe</li>
                <li>Initiation aux technologies web utilisées en environnement professionnel</li>
                <li>Compréhension des enjeux du développement d&apos;applications métier</li>
                <li>Sensibilisation aux bonnes pratiques de programmation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Compétences Développées</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">DevOps</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">CI/CD</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">SharePoint</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Support Technique</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Gestion de Parc</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Développement Web</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Automatisation</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Résolution de problèmes</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-card.in-view {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.6s ease;
        }
      `}</style>
    </section>
  );
}