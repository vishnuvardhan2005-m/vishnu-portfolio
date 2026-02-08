import { useState, useEffect } from 'react';

// Icons as inline SVGs for zero-dependency reliability
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId.replace('#', ''));
    setIsOpen(false);
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight text-slate-900 group">
          VISHNU VARDHAN
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors nav-link ${
                activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'text-textSecondary hover:text-text'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-text" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-card border-t border-border p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-left text-sm font-medium tracking-wide py-3 px-4 rounded-lg transition-colors ${
                 activeSection === link.href.substring(1) ? 'bg-primary/5 text-primary font-semibold' : 'text-textSecondary hover:bg-secondary'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
