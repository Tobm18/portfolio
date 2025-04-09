import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "Une plateforme de commerce électronique complète avec panier, paiement et gestion de compte.",
      image: "/projects/project1.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description: "Une application permettant d'organiser et de suivre vos tâches avec des fonctionnalités de glisser-déposer.",
      image: "/projects/project2.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
    },
    {
      id: 3,
      title: "Portfolio Personnel",
      description: "Un site web portfolio moderne et réactif présentant mes compétences et projets.",
      image: "/projects/project3.jpg",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/username/project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez quelques-uns de mes projets récents. Chaque projet est une occasion d&apos;apprendre et de me perfectionner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white z-10">
                  <p>Image de projet</p>
                </div>
                {/* Replace with actual project images */}
                {/* <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
                  >
                    Démo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}