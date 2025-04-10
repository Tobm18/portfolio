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
            Je m&apos;appelle Tom Ballester, étudiant en BUT-2 Réseaux et Télécommunications à l&apos;université Nice Côte d&apos;Azur, dans le parcours cybersécurité. Actuellement en alternance, je me spécialise dans le DevOps et les technologies des réseaux.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            J&apos;ai choisi l&apos;alternance car c&apos;est une expérience très enrichissante qui permet d&apos;appliquer ce que l&apos;on voit en cours dans un cadre professionnel très différent. Cela m&apos;a permis de développer rapidement mes compétences techniques et professionnelles.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Passionné par la technologie et l&apos;informatique, je m&apos;intéresse particulièrement aux domaines du réseau, du développement web et de la cybersécurité.
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Formation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                BUT-2 Réseaux et Télécommunications <br />
                Parcours cybersécurité <br />
                Université Nice Côte d&apos;Azur
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Alternance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Apprenti DevOps - ProBTP <br />
                <span className="text-sm italic">Protection sociale pour les professionnels du BTP</span>
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Missions</h3>
              <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
                <li>Migration des wikis vers SharePoint</li>
                <li>Surveillance des licences logicielles</li>
                <li>Outil de purge pour serveur Nexus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}