export default function Skills() {
  const frontendSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
    { name: "MySQL", level: 60 },
    { name: "MongoDB", level: 65 },
    { name: "API Development", level: 75 },
  ];
  
  const toolsSkills = [
    { name: "Git", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 65 },
    { name: "Docker", level: 50 },
    { name: "Webpack", level: 55 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
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
          
          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Backend</h3>
            <div className="space-y-5">
              {backendSkills.map((skill) => (
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
          
          {/* Tools Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Outils</h3>
            <div className="space-y-5">
              {toolsSkills.map((skill) => (
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