// Icons
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const ServerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);
const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const PenToolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
);

const SkillCard = ({ title, icon, skills }) => (
  <div className="bg-white p-6 rounded-lg border border-border shadow-soft hover:shadow-card transition-all duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-primary/10 rounded-md text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-text">{title}</h3>
    </div>
    <div className="space-y-5">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-textSecondary">{skill.name}</span>
            <span className="text-xs text-primary font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: 'Web Technologies',
      icon: <CodeIcon />,
      skills: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: <ServerIcon />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 75 }
      ]
    },
    {
      title: 'Programming',
      icon: <DatabaseIcon />, 
      skills: [
        { name: 'JavaScript', level: 75 },
        { name: 'Python', level: 70 }
      ]
    },
    {
      title: 'Tools & AI',
      icon: <PenToolIcon />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Figma & Canva', level: 80 },
        { name: 'N8N Automation', level: 60 },
        { name: 'Gemini API', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
