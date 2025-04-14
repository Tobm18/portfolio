export default function Skills() {
  const networkSkills = [
    { name: "Protocoles IP", level: 85 },
    { name: "Configuration de routeurs/switchs", level: 80 },
    { name: "VLANs", level: 80 },
    { name: "TCP/IP", level: 85 },
    { name: "Sécurisation réseau", level: 75 },
    { name: "Dépannage réseau", level: 70 },
  ];
  
  const devOpsSkills = [
    { name: "Docker", level: 75 },
    { name: "CI/CD", level: 70 },
    { name: "SharePoint", level: 80 },
    { name: "Scripting", level: 75 },
    { name: "Git", level: 80 },
    { name: "Nexus", level: 65 },
  ];
  
  const webSkills = [
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 65 },
  ];

  return (
    <section id="skills" className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Network Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Réseaux</h3>
            <div className="space-y-5">
              {networkSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* DevOps Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">DevOps</h3>
            <div className="space-y-5">
              {devOpsSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Web Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Web</h3>
            <div className="space-y-5">
              {webSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}