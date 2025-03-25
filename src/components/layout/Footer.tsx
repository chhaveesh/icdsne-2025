
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-icds-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">ICDS New England</h3>
            <p className="text-gray-300 leading-relaxed">
              Integrated Child Development Services aims to provide nutrition, health services, and early childhood education to children under 6 years and pregnant and lactating mothers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors duration-200">Programs</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Gallery</a>
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
                <p className="text-gray-300">ICDS Office, New England, Main Street, New England - 110001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-icds-blue flex-shrink-0" />
                <p className="text-gray-300">+91 12345 67890</p>
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
          <p>© {currentYear} ICDS New England. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
