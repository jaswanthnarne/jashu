
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Particles from './Particles';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    const startTypewriterEffect = () => {
      const subtitles = document.querySelectorAll('.typewriter');
      
      subtitles.forEach((subtitle, index) => {
        setTimeout(() => {
          subtitle.classList.add('animate-typing');
        }, 500 * (index + 1));
      });
    };
    
    setTimeout(startTypewriterEffect, 1000);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Particles />
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="mb-4 opacity-0 animate-fade-in animation-delay-100">
            <span className="px-4 py-1 rounded-full bg-purple/10 text-purple text-sm">
            <br />
              Welcome to My Portfolio
            </span>
          </div>
          
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white opacity-0"
          >
            <span className="block">I'm </span>
            <span className="text-gradient">Jaswanth Narne</span>
          </h1>
          
          <div className="h-12 overflow-hidden mt-4">
            <div className="typewriter border-r-2 border-primary whitespace-nowrap overflow-hidden text-xl md:text-2xl text-white/90 font-spaceGrotesk">
              Aspiring in Cybersecurity....💀
            </div>
          </div>
          
          <div className="h-12 overflow-hidden">
            <div className="typewriter border-r-2 border-primary whitespace-nowrap overflow-hidden text-xl md:text-2xl text-white/90 font-spaceGrotesk">
              Experience in IT Support....🖧
            </div>
          </div>
          
          <div className="h-12 overflow-hidden">
            <div className="typewriter border-r-2 border-primary whitespace-nowrap overflow-hidden text-xl md:text-2xl text-white/90 font-spaceGrotesk">
             Mastering The  System Administration....💻 
            </div>
          </div>
          
          <p className="max-w-2xl text-lg text-white/70 mt-6 opacity-0 animate-fade-in animation-delay-300">
          I deploy apps and steal hearts — securely, of course 😏☁️.
          </p>
          
          <div className="flex space-x-4 mt-8 opacity-0 animate-fade-in animation-delay-500">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-cyan to-purple rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple/20 transition-all hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-navy-light border border-white/10 rounded-lg text-white/90 font-medium hover:bg-navy hover:border-white/20 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in animation-delay-700">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
