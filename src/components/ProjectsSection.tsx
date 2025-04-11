
import React, { useState } from 'react';
import { Layers, GitBranch, ExternalLink, ChevronRight } from 'lucide-react';

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Kira a C2 Frame_work',
    description: 'Crafted a Command and Control (C2) framework that runs remote systems with precision, stealth, and just a hint of mischief. 😌💻',
    tags: ['Cybersecurity', 'Post-Exploitation ', 'Command and control '],
    image: '/img2.webp'
  },
  {
    id: 2,
    title: 'Network Infrastructure Overhaul',
    description: 'Tore down outdated networks and built something actually worth connecting to — you are welocme',
    tags: ['Networking', 'Security', 'Infrastructure'],
    image: '/img3.jfif'
  },
  {
    id: 3,
    title: 'Automated System Health Monitor',
    description: 'Built an Automated System Health Monitor that keeps systems in check — because I like things running hot, not overheated. 😉',
    tags: ['Automation', 'Monitoring', 'System Administration'],
    image: '/img4.webp'
  },
  {
    id: 4,
    title: 'Security Operations Dashboard',
    description: 'Created a centralized dashboard for security operations, integrating multiple data sources and providing real-time visibility into security posture.',
    tags: ['Dashboard', 'Security Operations', 'Data Integration'],
    image: '/img5.png'
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 bg-navy-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Explore my recent work showcasing my expertise in cybersecurity, system administration, and IT operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project List */}
          <div className="lg:col-span-4 space-y-4">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeProject.id === project.id 
                    ? 'bg-navy-light border-gradient' 
                    : 'bg-navy border border-white/5 hover:border-white/20'
                }`}
                onClick={() => setActiveProject(project)}
              >
                <h3 className={`font-medium text-lg mb-2 ${activeProject.id === project.id ? 'text-gradient' : 'text-white'}`}>
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Project Detail */}
          <div className="lg:col-span-8">
            <div className="p-6 bg-navy-light rounded-lg border border-white/10 h-full">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-gradient">{activeProject.title}</h3>
                <div className="flex items-center gap-2">
                  <a href="#" className="p-2 bg-navy rounded-full hover:bg-navy-dark transition-colors">
                    <GitBranch size={18} />
                  </a>
                  <a href="#" className="p-2 bg-navy rounded-full hover:bg-navy-dark transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="mb-6 aspect-video rounded-lg overflow-hidden bg-navy flex items-center justify-center">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-white/80 mb-6">
                {activeProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-navy rounded-full text-white/70 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/10">
                <a 
                  href="#" 
                  className="inline-flex items-center text-cyan hover:text-cyan-light transition-colors"
                >
                  <span className="mr-1">View Project Details</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-navy-light border border-white/10 rounded-lg text-white/90 font-medium hover:bg-navy hover:border-white/20 transition-all"
          >
            <Layers className="mr-2" size={18} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
