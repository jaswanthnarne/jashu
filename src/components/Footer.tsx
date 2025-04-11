
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-navy-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-spaceGrotesk font-bold text-gradient">
              Jaswanth Narne
            </a>
            <p className="text-white/50 text-sm mt-1">
              Cybersecurity Professional | System Administrator
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#home" className="text-white/70 hover:text-white hover:text-gradient transition-all text-sm">
              Home
            </a>
            <a href="#about" className="text-white/70 hover:text-white hover:text-gradient transition-all text-sm">
              About
            </a>
            <a href="#skills" className="text-white/70 hover:text-white hover:text-gradient transition-all text-sm">
              Skills
            </a>
            <a href="#projects" className="text-white/70 hover:text-white hover:text-gradient transition-all text-sm">
              Projects
            </a>
            <a href="#contact" className="text-white/70 hover:text-white hover:text-gradient transition-all text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jaswanth Narne. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-white/50 text-sm flex items-center">
             Crafeted by Jaswanth Narne ....!! 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
