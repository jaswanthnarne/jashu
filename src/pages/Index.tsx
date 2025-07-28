
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
// import ChatbotButton from '@/components/ChatbotButton';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Index = () => {
  useEffect(() => {
    // Show welcome toast when the page loads
    setTimeout(() => {
      toast.success("Welcome to Jaswanth Narne's Portfolio", {
        description: "Explore my work and get in touch!",
        duration: 5000,
        style: {
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          color: 'white',
          border: '1px solid rgba(255, 58, 76, 0.3)',
        },
        icon: <div className="w-4 h-4 rounded-full bg-red animate-pulse" />,
      });
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Index;
