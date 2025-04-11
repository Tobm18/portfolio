import Image from 'next/image'
import Navbar from './Navbar'
import NetworkBackground from './NetworkBackground'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <NetworkBackground />
      <Navbar />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <div className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
            Réseaux & DevOps
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Bonjour, je suis <span className="text-primary-600 dark:text-primary-500">Tom BALLESTER</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            Étudiant en BUT-2 Réseaux & Télécommunications | Apprenti DevOps
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Passionné par les technologies des réseaux et la cybersécurité, je développe mes compétences en alternance chez ProBTP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Me contacter
            </a>
            <a 
              href="#projects" 
              className="btn-secondary"
            >
              Voir mes projets
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center relative">
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-primary-500/20 dark:ring-primary-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 dark:opacity-10"></div>
            <Image 
              src="/profile-photo.jpg" 
              alt="Tom BALLESTER" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute w-20 h-20 bg-yellow-400 dark:bg-yellow-500 rounded-lg -top-4 right-20 flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div>
          <div className="absolute w-16 h-16 bg-primary-500 dark:bg-primary-600 rounded-full -bottom-2 left-24 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}