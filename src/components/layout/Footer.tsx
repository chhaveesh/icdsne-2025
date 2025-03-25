
import React from 'react';
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-icds-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">ICDSNE 2024</h3>
            <p className="text-gray-300 leading-relaxed">
              International Conference on Data Science and Engineering is a premier forum for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns in the field.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#call-for-papers" className="text-gray-300 hover:text-white transition-colors duration-200">Call for Papers</a>
              </li>
              <li>
                <a href="#speakers" className="text-gray-300 hover:text-white transition-colors duration-200">Speakers</a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-white transition-colors duration-200">Schedule</a>
              </li>
              <li>
                <a href="#registration" className="text-gray-300 hover:text-white transition-colors duration-200">Registration</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-icds-blue mt-1 flex-shrink-0" />
                <p className="text-gray-300">New England University Conference Center, 123 University Drive, Boston, MA 02115</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-icds-blue flex-shrink-0" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-icds-blue flex-shrink-0" />
                <p className="text-gray-300">info@icdsne.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} International Conference on Data Science and Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
