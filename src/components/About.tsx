export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Je m&apos;appelle Tom Ballester, un développeur web passionné et étudiant en informatique. Je suis spécialisé dans la création d&apos;applications web modernes et performantes qui offrent une excellente expérience utilisateur.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Mon parcours dans le développement web a commencé par une curiosité pour le code et s&apos;est transformé en une passion pour créer des solutions web élégantes et fonctionnelles. J&apos;aime résoudre des problèmes complexes et transformer des idées en réalité grâce à la programmation.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            En dehors du développement, je m&apos;intéresse à [vos autres centres d&apos;intérêt] et je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir dans le domaine de la technologie.
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Éducation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Formation actuelle en informatique <br />
                [Nom de l&apos;école/université]
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Expérience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                [Poste] - [Entreprise] <br />
                [Années d&apos;expérience]
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Objectifs</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Développer des applications web innovantes et devenir un expert en développement full-stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}