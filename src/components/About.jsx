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
const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);
const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);

export default function About() {
  const [openIndex, setOpenIndex] = useState(0);

  const expTechnologies = [
    'React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'Node.js', 
    'Express.js', 'MongoDB', 'Firebase Authentication', 'JWT', 
    'REST APIs', 'Git', 'GitHub', 'Vercel', 'Render'
  ];

  const responsibilities = [
    "Developed and maintained a full-stack MERN application using React.js (Vite), Node.js, Express.js, and MongoDB.",
    "Designed and implemented a Learning Management System (LMS) with Learning Paths, Modules, Lessons, Quizzes, and user progress tracking.",
    "Built a Blog CMS for administrators to create, edit, publish, and manage SEO-friendly blog content.",
    "Integrated Firebase Authentication with Google Sign-In and unified authentication across the application.",
    "Developed role-based access control (RBAC) for Admin, Editor, and Learner modules.",
    "Created responsive and reusable UI components using React, Tailwind CSS, and modern JavaScript (ES6+).",
    "Designed and integrated RESTful APIs for frontend-backend communication.",
    "Implemented JWT-based authentication, protected routes, and secure API access.",
    "Optimized application performance through code splitting, lazy loading, and efficient state management.",
    "Worked extensively with Git and GitHub for version control, feature development, and collaborative workflows.",
    "Participated in debugging, testing, and resolving production issues to improve application stability.",
    "Contributed to application deployment and configuration on Vercel (frontend) and Render (backend)."
  ];

  const items = [
    {
      title: 'Work Experience',
      badge: 'Current Role',
      icon: <Briefcase />,
      content: (
        <div className="space-y-6">
          {/* Main Role Header Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm hover:border-primary/40 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200/80 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-900">Web Developer Intern</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                    Present
                  </span>
                </div>
                <div className="flex items-center text-primary font-medium text-base mt-1">
                  <BuildingIcon />
                  <span>RoboMonk Technologies Pvt. Ltd.</span>
                </div>
              </div>
              <div className="flex items-center text-slate-500 text-sm bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs self-start md:self-auto">
                <CalendarIcon />
                <span>March 2026 – Present</span>
              </div>
            </div>

            {/* Key Project Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 hover:shadow-sm transition-all">
                <div className="font-semibold text-slate-800 text-sm flex items-center gap-2 mb-1">
                  <span className="p-1 rounded bg-blue-50 text-blue-600">🎓</span> LMS Platform
                </div>
                <p className="text-xs text-slate-600">Learning paths, modules, quizzes & progress tracking system.</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200 hover:shadow-sm transition-all">
                <div className="font-semibold text-slate-800 text-sm flex items-center gap-2 mb-1">
                  <span className="p-1 rounded bg-purple-50 text-purple-600">📝</span> Blog CMS
                </div>
                <p className="text-xs text-slate-600">Admin publishing dashboard for managing SEO-optimized blogs.</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200 hover:shadow-sm transition-all">
                <div className="font-semibold text-slate-800 text-sm flex items-center gap-2 mb-1">
                  <span className="p-1 rounded bg-amber-50 text-amber-600">🔒</span> Auth & RBAC
                </div>
                <p className="text-xs text-slate-600">Firebase Google Sign-In, JWT protected routes & role permissions.</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200 hover:shadow-sm transition-all">
                <div className="font-semibold text-slate-800 text-sm flex items-center gap-2 mb-1">
                  <span className="p-1 rounded bg-emerald-50 text-emerald-600">🚀</span> Performance & Cloud
                </div>
                <p className="text-xs text-slate-600">Code splitting, lazy loading, deployed on Vercel & Render.</p>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                Key Responsibilities & Achievements
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed bg-white/70 p-2.5 rounded-md border border-slate-100 hover:border-slate-300 transition-colors">
                    <CheckCircle />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {expTechnologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 text-xs font-medium bg-white text-slate-700 rounded-md border border-slate-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Professional Summary',
      icon: <User />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed text-sm">
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
            <h4 className="font-semibold text-slate-900">Bachelor of Technology in CSE</h4>
            <p className="text-slate-600 text-sm mt-1">NRI Institute of Technology, Vijayawada • 2023 - 2027</p>
            <p className="text-primary font-medium text-sm mt-2">CGPA: 8.43</p>
          </div>
        </div>
      )
    },
    {
      title: 'Achievements',
      icon: <Award />,
      content: (
        <ul className="list-disc list-inside space-y-3 text-slate-600 text-sm">
          <li>Won <span className="text-slate-900 font-medium">2nd prize</span> in the Hyper Web Hackathon (120 teams competing).</li>
          <li>Secured <span className="text-slate-900 font-medium">1st prize</span> in a Technical Quiz conducted at the college level.</li>
        </ul>
      )
    },
    {
      title: 'Certifications',
      icon: <CertificateIcon />,
      content: (
        <ul className="list-disc list-inside space-y-3 text-slate-600 text-sm">
          <li>React.js: By simplilearn.com</li>
          <li>Git: By Let's Upgrade</li>
          <li>Python: By Udemy</li>
        </ul>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
            Career & Background
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            About Me
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
            Discover my work experience, technical education, achievements, and core qualifications.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg ${openIndex === index ? 'bg-primary text-white shadow-sm' : 'bg-slate-100 text-slate-600 group-hover:text-primary group-hover:bg-primary/10'} transition-all`}>
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>{item.title}</span>
                    {item.badge && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 sm:p-6 pt-2 border-t border-slate-100 mx-2 sm:mx-4">
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

