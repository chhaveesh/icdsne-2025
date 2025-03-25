
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Programs', path: '#programs' },
  { name: 'Gallery', path: '#gallery' },
  { name: 'Contact', path: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-10">
          <div className="font-display font-bold text-xl md:text-2xl">
            <span className="text-icds-blue">ICDS</span>
            <span className="text-icds-dark"> New England</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={cn(
                'nav-link',
                activeSection === link.path.substring(1) && 'active'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden z-10 text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background/90 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out z-0',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-xl font-medium text-foreground hover:text-icds-blue transition-colors"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
