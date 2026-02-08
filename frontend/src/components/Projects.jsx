import { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

// Icons
const X = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const projectsData = [
  {
    id: 1,
    title: 'Style-Cart E-Commerce',
    description: 'A full-stack application with user and admin modules.',
    fullDescription: 'Designed and developed a full-stack application with user and admin modules. Implemented secure authentication, CRUD operations, and role-based access control. Features product management, cart functionality, and secure checkout.',
    image: project1,
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    liveLink: 'style-cart-lac.vercel.app',
    repoLink: 'https://github.com/vishnuvardhan2005-m/StyleCart.git'
  },
  {
    id: 2,
    title: 'Royal Touch Product Showcase',
    description: 'Responsive website for client product showcase.',
    fullDescription: 'Created a responsive website for a client to showcase the products in their shop. Features include a categorized product display and direct contact functionality through WhatsApp integration. Optimized for various devices.',
    image: project2,
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsiveness'],
    liveLink: 'https://vishnuvardhan2005-m.github.io/Royal-Touch/',
    repoLink: 'https://github.com/vishnuvardhan2005-m/Royal-Touch.git'
  },
  {
    id: 3,
    title: 'SweetHaven Online Store',
    description: 'Online store with real-time updates and management.',
    fullDescription: 'Developed an online store with cart, order management, and real-time updates. Ensured quality-focused development and adherence to defined processes. Built using modern serverless technologies for scalability.',
    image: project3,
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Firebase', 'Firestore'],
    liveLink: 'sweet-heaven-f568vaoge-vishnus-projects-b68462e2.vercel.app',
    repoLink: 'https://github.com/vishnuvardhan2005-m/sweet-heaven.git'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded-xl shadow-md transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium bg-black/60 backdrop-blur px-4 py-2 rounded-full text-sm">View Details</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-text group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-textSecondary text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="mt-auto">
                    <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 bg-background text-textSecondary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium border border-border"
                    >
                    View Project
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl animate-fade-in relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black/10 rounded-full hover:bg-red-500/10 hover:text-red-600 transition-colors z-10 text-text"
            >
              <X />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-full bg-secondary">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-text">{selectedProject.title}</h3>
                <p className="text-textSecondary mb-6 text-sm leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-secondary text-primary text-xs rounded-full border border-border font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={selectedProject.liveLink} className="flex-1 py-3 text-center bg-primary text-white rounded-lg hover:bg-primaryHover transition-colors font-medium text-sm shadow-soft">
                    Live Demo
                  </a>
                  <a href={selectedProject.repoLink} className="flex-1 py-3 text-center border border-border text-textSecondary rounded-lg hover:border-textSecondary hover:text-text transition-colors font-medium text-sm">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
