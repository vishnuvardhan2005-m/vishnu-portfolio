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
  <div className="group bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
    {/* Top animated gradient accent line on hover */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="flex items-center gap-3.5 mb-6">
      <div className="p-2.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-2xs">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{title}</h3>
    </div>

    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name} className="group/item">
          <div className="flex justify-between mb-1.5">
            <span className="text-sm font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors">{skill.name}</span>
            <span className="text-xs text-primary font-bold group-hover/item:scale-110 transition-transform">{skill.level}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden p-0.5 border border-slate-100">
            <div 
              className="bg-gradient-to-r from-blue-500 to-primary h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110" 
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
    <section id="skills" className="py-20 bg-slate-50/60">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
            Technical Expertise
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            My Skills
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
            Technologies, frameworks, and developer tools I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

