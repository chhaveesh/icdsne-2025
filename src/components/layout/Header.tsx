<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
=======
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
>>>>>>> 587fd0c (eveverthing changed according to nit)
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  // Call for Papers is handled separately with dropdown
  { name: 'Speakers', path: '#speakers' },
  { name: 'Schedule', path: '#schedule' },
  { name: 'Registration', path: '#registration' },
  { name: 'Contact', path: '#contact' },
=======
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Committees", path: "#committees" },
  { name: "Speakers", path: "#speakers" },
  { name: "Schedule", path: "#schedule" },
  { name: "Important Dates", path: "#important-dates" },
  { name: "Registration", path: "#registration" },
  { name: "Contact", path: "#contact" },
>>>>>>> 587fd0c (eveverthing changed according to nit)
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 z-10">
          <img 
            src="/lovable-uploads/83e0eb93-1db1-4923-908c-f1bdcf4b8d3c.png" 
            alt="NITK Logo" 
            className="h-12 w-auto"
          />
          <div className="font-display font-bold text-xl md:text-2xl">
            <span className="text-icds-blue">ICDS</span>
            <span className="text-icds-dark">NE 2024</span>
=======
    <header className={cn("fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4", isScrolled ? "glass shadow-sm py-3" : "bg-transparent")}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 z-10">
          <img src="public/nit_logo.jpg" alt="NIT Logo" className="h-12 w-auto" />
          <div className="font-display font-bold text-xl md:text-2xl whitespace-nowrap">
            <span className="text-icds-blue">ICDSNE</span>
            <span className="text-icds-dark"> 2025</span>
>>>>>>> 587fd0c (eveverthing changed according to nit)
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className={cn("nav-link px-3 py-2", activeSection === link.path.substring(1) && "active")}>
              {link.name}
            </a>
          ))}
<<<<<<< HEAD
          
          {/* Call for Papers Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link flex items-center gap-1">
              Call for Papers <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white w-48">
              <DropdownMenuItem className="cursor-pointer">
                <a href="#call-for-papers" className="w-full" onClick={handleLinkClick}>Call for Papers</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#call-for-papers" className="w-full" onClick={() => {handleLinkClick(); document.querySelector('[data-section="guidelines"]')?.scrollIntoView();}}>Authors Guidelines</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <a href="#call-for-papers" className="w-full" onClick={() => {handleLinkClick(); document.querySelector('[data-section="publication"]')?.scrollIntoView();}}>Publication</a>
=======

          {/* Call for Papers Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link flex items-center gap-1 px-3 py-2">
              Call for Papers <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white w-48">
              <DropdownMenuItem>
                <a href="#call-for-papers">Call for Papers</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#authors-guidelines">Authors Guidelines</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#publication">Publication</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* History Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link flex items-center gap-1 px-3 py-2">
              History <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white w-48">
              <DropdownMenuItem>
                <a href="https://link.springer.com/book/10.1007/978-981-97-8336-6">ICDSNE 2024</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://link.springer.com/book/10.1007/978-981-99-6755-1">ICDSNE 2023</a>
>>>>>>> 587fd0c (eveverthing changed according to nit)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-10 text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={cn("fixed inset-0 bg-background/90 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out z-0", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="text-lg font-medium text-foreground hover:text-icds-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
<<<<<<< HEAD
            
            {/* Mobile Call for Papers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xl font-medium text-foreground hover:text-icds-blue transition-colors flex items-center gap-1">
                Call for Papers <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white">
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#call-for-papers" className="w-full" onClick={handleLinkClick}>Call for Papers</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#call-for-papers" className="w-full" onClick={() => {handleLinkClick(); document.querySelector('[data-section="guidelines"]')?.scrollIntoView();}}>Authors Guidelines</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="#call-for-papers" className="w-full" onClick={() => {handleLinkClick(); document.querySelector('[data-section="publication"]')?.scrollIntoView();}}>Publication</a>
=======

            {/* Call for Papers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-lg font-medium text-foreground hover:text-icds-blue transition-colors flex items-center gap-1">
                Call for Papers <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white">
                <DropdownMenuItem>
                  <a href="#call-for-papers">Call for Papers</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#authors-guidelines">Authors Guidelines</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#publication">Publication</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* History Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-lg font-medium text-foreground hover:text-icds-blue transition-colors flex items-center gap-1">
                History <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white">
                <DropdownMenuItem>
                  <a href="https://link.springer.com/book/10.1007/978-981-97-8336-6">ICDSNE 2024</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://link.springer.com/book/10.1007/978-981-99-6755-1">ICDSNE 2023</a>
>>>>>>> 587fd0c (eveverthing changed according to nit)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
