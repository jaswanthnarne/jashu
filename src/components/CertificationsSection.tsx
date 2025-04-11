
import React from 'react';
import { Badge, Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Cisco Certified Ethical Hacker',
    issuer: 'Cisco',
    date: '2024',
    description: 'Certified in ethical hacking methodologies, vulnerability assessment, and penetration testing.'
  },
  {
    id: 2,
    title: 'CCNA',
    issuer: 'The Secops Group',
    date: '2024',
    description: 'Advanced training in network security protocols, threat detection, and mitigation strategies.'
  },
  {
    id: 3,
    title: 'System Administration Professional',
    issuer: 'Microsoft Learnig Platform',
    date: '2023',
    description: 'Expertise in managing enterprise systems, infrastructure optimization, and security implementation.'
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-navy relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="border-gradient bg-navy-dark p-6 rounded-lg group hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-between">
                <Badge size={30} className="text-cyan" />
                <span className="text-white/50 text-sm">{cert.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                {cert.title}
              </h3>
              
              <div className="flex items-center text-white/70 mb-4">
                <Award size={16} className="mr-2" />
                <span>{cert.issuer}</span>
              </div>
              
              <p className="text-white/60 mb-4">
                {cert.description}
              </p>
              
              <a 
                href="https://www.linkedin.com/in/jashu7/" 
                className="inline-flex items-center text-cyan hover:text-cyan-light transition-colors"
              >
                <span className="mr-1">View Certificate</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6">
            Continuously expanding knowledge through ongoing education and certifications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-navy-light rounded-lg border border-white/10">
              Ongoing: Advanced Cloud Security
            </div>
            <div className="px-4 py-2 bg-navy-light rounded-lg border border-white/10">
              Upcoming: DevSecOps Certification ( Maybe )
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
