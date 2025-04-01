
import React from 'react';
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook, Github, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-icds-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">ICDSNE 2025</h3>
            <p className="text-gray-300 leading-relaxed">
              International Conference on Data Science and Engineering (ICDSNE) is a premier forum for the presentation of new advances and research results in the fields of Data Science and Engineering.
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
                <a href="#important-dates" className="text-gray-300 hover:text-white transition-colors duration-200">Important Dates</a>
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
                <a href="#committees" className="text-gray-300 hover:text-white transition-colors duration-200">Committees</a>
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
                <p className="text-gray-300">NIT Agartala,Tripura, India,PIN: 799046</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-icds-blue flex-shrink-0" />
                <p className="text-gray-300">+91 824 2474000</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-icds-blue flex-shrink-0" />
                <p className="text-gray-300">icdsne@gmail.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} International Conference on Data Science and Engineering. All Rights Reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-2">
            Developed by Chhaveesh Manocha
            <a href="https://x.com/chhaveesh33469" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="https://www.linkedin.com/in/chhaveesh/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
