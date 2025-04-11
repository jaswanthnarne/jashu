
import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Server,
  Code,
  Monitor,
  Cpu,
  Database,
  Cloud,
  Brain,
  LineChart,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { ChartContainer } from "@/components/ui/chart";
import { useInView } from 'framer-motion';

// Skill categories with their icons, skills and proficiency scores
const skillCategories = [
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'text-red',
    skills: [
      { name: 'Network Security', score: 88 },
      { name: 'Endpoint Protection', score: 85 },
      { name: 'Vulnerability Assessment', score: 90 },
      { name: 'Security Monitoring', score: 82 },
      { name: 'Incident Response', score: 85 }
    ]
  },
  {
    name: 'System Administration',
    icon: Server,
    color: 'text-white',
    skills: [
      { name: 'Windows Server', score: 92 },
      { name: 'Linux Systems', score: 86 },
      { name: 'Active Directory', score: 89 },
      { name: 'Group Policy', score: 87 },
      { name: 'System Maintenance', score: 91 },
      { name: 'Backup & Recovery', score: 88 }
    ]
  },
  {
    name: 'IT Operations',
    icon: Cpu,
    color: 'text-red-light',
    skills: [
      { name: 'IT Support', score: 95 },
      { name: 'Hardware Troubleshooting', score: 90 },
      { name: 'Network Configuration', score: 87 },
      { name: 'Performance Optimization', score: 84 },
      { name: 'IT Infrastructure', score: 89 }
    ]
  },
  {
    name: 'Development',
    icon: Code,
    color: 'text-white',
    skills: [
      { name: 'HTML/CSS', score: 85 },
      { name: 'JavaScript', score: 82 },
      { name: 'Node Js', score: 88 },
      { name: 'Mongo_DB', score: 85 },
      { name: 'Frontend Development', score: 80 },
      { name: 'Backend Integration', score: 78 }
    ]
  },
  {
    name: 'Cloud & Networking',
    icon: Cloud,
    color: 'text-red',
    skills: [
      { name: 'AWS', score: 80 },
      { name: 'Azure', score: 60 },
      { name: 'Cloud Security', score: 92 },
      { name: 'Virtual Networks', score: 88 },
      { name: 'Firewalls', score: 91 },
      { name: 'DNS Management', score: 89 }
    ]
  },
  {
    name: 'Problem Solving',
    icon: Brain,
    color: 'text-white',
    skills: [
      { name: 'Critical Thinking', score: 94 },
      { name: 'Technical Troubleshooting', score: 96 },
      { name: 'Root Cause Analysis', score: 85 },
      { name: 'Process Improvement', score: 80 },
      { name: 'Documentation', score: 95 }
    ]
  }
];

// Main SkillsBar component for animated progress bars
const SkillBar = ({ skill, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-white">{skill.name}</span>
        <span className="text-sm text-red font-medium">
          {isVisible ? `${skill.score}%` : '0%'}
        </span>
      </div>
      <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red to-white transition-all duration-1500 ease-out"
          style={{ width: isVisible ? `${skill.score}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

// Skill card component with animation
const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <div 
      ref={cardRef}
      className="p-3 bg-gray-900 rounded-lg border border-white/5 hover:border-red/30 
        transition-all hover:translate-y-[-2px] skill-card animate-fade-in"
      style={{
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        animationFillMode: 'forwards'
      }}
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red animate-pulse-glow"></div>
        <span className="text-white/90">{skill.name}</span>
        <span className="ml-auto text-xs bg-gray-800 text-red px-2 py-0.5 rounded-full">
          {skill.score}%
        </span>
      </div>
    </div>
  );
};

// Animated icon component
const AnimatedIcon = ({ Icon, color }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-red/10 animate-pulse-glow rounded-full"></div>
      <div className="relative z-10 bg-gray-900 p-2 rounded-full">
        <Icon className={`${color}`} size={22} />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Calculate average score for the active category
  const averageScore = Math.round(
    activeCategory.skills.reduce((sum, skill) => sum + skill.score, 0) / 
    activeCategory.skills.length
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16 opacity-0 animate-fade-in-up"
          style={{ 
            animationDelay: '0.2s',
            animationFillMode: 'forwards' 
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red to-white mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            I've developed expertise across multiple domains with a focus on cybersecurity and system administration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Skills Categories */}
          <div className="lg:col-span-4 space-y-4">
            {skillCategories.map((category, index) => (
              <div 
                key={category.name}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                  activeCategory.name === category.name 
                    ? 'bg-gray-900 border-gradient shadow-[0_0_15px_rgba(255,58,76,0.2)]' 
                    : 'bg-gray-900/50 border border-white/5 hover:border-white/20'
                }`}
                onClick={() => setActiveCategory(category)}
                style={{
                  transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <AnimatedIcon Icon={category.icon} color={category.color} />
                <span className="font-medium">{category.name}</span>
                {activeCategory.name === category.name && (
                  <CheckCircle2 className="ml-auto text-red" size={16} />
                )}
              </div>
            ))}
          </div>
          
          {/* Skills Detail */}
          <div className="lg:col-span-8">
            <div 
              className="p-6 bg-gray-900 rounded-lg border border-white/10 h-full"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.6s ease-out 0.3s'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <activeCategory.icon className={`${activeCategory.color}`} size={26} />
                <h3 className="text-2xl font-bold">{activeCategory.name}</h3>
                <div className="ml-auto flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                  <LineChart size={14} className="text-red" />
                  <span className="text-sm font-medium">Avg: {averageScore}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategory.skills.map((skill, idx) => (
                  <SkillCard key={skill.name} skill={skill} index={idx} />
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center mb-4">
                  <h4 className="text-lg font-medium">Skill Proficiency</h4>
                  <Zap className="ml-2 text-red" size={16} />
                </div>
                
                <div className="space-y-4">
                  {activeCategory.skills.slice(0, 4).map((skill, idx) => (
                    <SkillBar key={skill.name} skill={skill} delay={idx * 100} />
                  ))}
                  
                  <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium">Overall Proficiency</span>
                      <span className="text-red font-medium">{averageScore}%</span>
                    </div>
                    <Progress 
                      value={isInView ? averageScore : 0} 
                      className="h-3 bg-gray-900" 
                      style={{ transition: 'all 1.5s ease-out' }}
                    />
                    <div className="mt-3 flex justify-between text-xs text-white/50">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
