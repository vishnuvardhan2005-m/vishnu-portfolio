
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        
        {/* Profile Image Circle */}
        <div className="mb-8 relative">
          <img 
            src={profileImg} 
            alt="Musunuru Vishnu Vardhan" 
            className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-slate-900">
          MUSUNURU VISHNU VARDHAN
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-textSecondary mb-8 font-light max-w-2xl">
          MERN Stack Developer | Full Stack Developer
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToProjects}
            className="px-8 py-3 bg-primary text-white rounded-lg font-medium shadow-soft hover:bg-primaryHover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
          </button>
          
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 bg-white border border-border text-textSecondary rounded-lg font-medium hover:border-primary hover:text-primary hover:bg-white shadow-sm transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
