import { useState } from 'react';

// Icons
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);
const GradCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
);
const Briefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const User = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const Award = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
);


export default function About() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
        title: 'Professional Summary',
        icon: <User />,
        content: (
          <div className="space-y-4">
            <p className="text-textSecondary leading-relaxed text-sm">
                Results-driven Web Developer with expertise in React.js, Node.js, and Express.js, 
                complemented by solid experience in MongoDB and Python for robust application development. 
                Proficient in creating responsive web designs using Bootstrap/Tailwind and leveraging design tools 
                like Figma and Canva. Strong knowledge of version control through Git. 
                Committed to delivering high-quality applications and passionate about continuous learning.
            </p>
          </div>
        )
    },
    {
      title: 'Education',
      icon: <GradCap />,
      content: (
        <div className="space-y-4">
          <div className="border-l-2 border-primary pl-4 py-1">
            <h4 className="font-semibold text-text">Bachelor of Technology in CSE</h4>
            <p className="text-textSecondary text-sm mt-1">Nri Institute of Technology, Vijayawada • 2023 - 2027</p>
            <p className="text-primary font-medium text-sm mt-2">CGPA: 8.43</p>
          </div>
        </div>
      )
    },
    {
      title: 'Achievements',
      icon: <Award />,
      content: (
        <ul className="list-disc list-inside space-y-3 text-textSecondary text-sm">
            <li>Won <span className="text-text font-medium">2nd prize</span> in the Hyper Web Hackathon (120 teams competing).</li>
            <li>Secured <span className="text-text font-medium">1st prize</span> in a Technical Quiz conducted at the college level.</li>
        </ul>
      )
    },
    {
      title: 'Certifications',
      icon: <Briefcase />,
      content: (
        <ul className="list-disc list-inside space-y-3 text-textSecondary text-sm">
            <li>React.js: By simplilearn.com</li>
            <li>Git: By Let's Upgrade</li>
            <li>Python: By Udemy</li>
        </ul>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          About Me
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-soft">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-secondary/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-md ${openIndex === index ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted group-hover:text-primary'} transition-colors`}>
                    {item.icon}
                  </div>
                  <span className={`font-medium text-lg ${openIndex === index ? 'text-primary' : 'text-textSecondary'}`}>{item.title}</span>
                </div>
                <ChevronDown className={`text-muted transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-2 border-t border-border mx-6">
                    {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
