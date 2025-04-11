
import React from 'react';
import { Shield, Server, Cpu, Code, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed"> 
              Hello, I’m Jaswanth Narne....! just a cybersecurity guy who’s trying to really be  good at making sure things don’t break.
               While most people are crossing their fingers that everything works🤞🏻, 
               we are the team making sure it actually does.
                No big deal, just saving the day....one system at a time. 😏
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
            With a solid background in IT, I’ve dedicated myself to securing digital systems and 
            making sure the bad guys stay out. While others scramble to fix problems,
             I’m the one quietly keeping everything running like it should smooth and uninterrupted. 😌💻
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
            I currently work as a System Administrator, ensuring everything stays secure and efficient. 
              So, if you like your tech working perfectly and
             your systems running smoothly, we’re definitely on the same page. 🔐
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="skill-badge flex items-center gap-2">
                <Shield size={18} className="text-cyan" />
                <span>Cybersecurity</span>
              </div>
              <div className="skill-badge flex items-center gap-2">
                <Server size={18} className="text-cyan" />
                <span>Sys_Admin</span>
              </div>
              <div className="skill-badge flex items-center gap-2">
                <Cpu size={18} className="text-cyan" />
                <span>IT_Op's</span>
              </div>
              <div className="skill-badge flex items-center gap-2">
                <Code size={18} className="text-cyan" />
                <span>Full_Stack</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white mb-6"><span className="text-gradient">Roadmap</span></h3>
            
            <div className="space-y-6">
              <div className="timeline-item">
                <div className="mb-1 flex items-center gap-2">
                  <Clock size={16} className="text-cyan" />
                  <span className="text-white/60 text-sm">2023 (Dec) - Present</span>
                </div>
                <h4 className="text-xl font-medium text-white">System Administrator</h4>
                <p className="text-white/70 mt-1">
                Managing critical infrastructure, setting up security protocols, and making sure everything stays flawless.
                 I’m the one making sure things run smoothly… 
                and trust me, I’m as good at keeping systems secure as I am at keeping things interesting. 😏.
                </p>
              </div>
              
              <div className="timeline-item">
                <div className="mb-1 flex items-center gap-2">
                  <Clock size={16} className="text-cyan" />
                  <span className="text-white/60 text-sm">2022 - 2023</span>
                </div>
                <h4 className="text-xl font-medium text-white">IT Intern</h4>
                <p className="text-white/70 mt-1">
                Gained hands-on experience in IT support, network configuration, and security implementation 
                 making sure everything runs smoothly, all while keeping things secure...
                 because, you know, I’m just that good at keeping things locked down. 😏
                </p>
              </div>
              
              <div className="timeline-item">
                <div className="mb-1 flex items-center gap-2">
                  <Clock size={16} className="text-cyan" />
                  <span className="text-white/60 text-sm">2022</span>
                </div>
                <h4 className="text-xl font-medium text-white">System Support Cell </h4>
                <p className="text-white/70 mt-1">
                  Provided critical support services, troubleshooting complex system issues, and
                  implementing performance optimizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
