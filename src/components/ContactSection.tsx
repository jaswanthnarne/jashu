
import React, { useState } from 'react';
import { Mail, Phone, Send, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { httpsCallable } from 'firebase/functions';
import { functions } from '@/lib/firebase';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formState.name || !formState.email || !formState.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This will need to be updated with the actual Firebase Function
      // const sendContactMessage = httpsCallable(functions, 'sendContactMessage');
      // await sendContactMessage(formState);
      
      // For demo purposes, let's just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully!');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Have a project in mind or interested in collaborating? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border-gradient bg-navy-dark p-6 rounded-lg space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy rounded-full">
                  <Mail size={20} className="text-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:narnejaswanth83@gmail.com" className="text-white/70 hover:text-cyan transition-colors">
                    narnejaswanth83@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy rounded-full">
                  <Phone size={20} className="text-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-white/70 hover:text-purple transition-colors">
                    +91 9848218418
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-gradient bg-navy-dark p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Resume</h3>
              <p className="text-white/70 mb-4">
                Download my resume to learn more about my experience, skills, and qualifications.
              </p>
              <Button className="bg-gradient-to-r from-cyan to-purple hover:from-cyan-dark hover:to-purple-dark transition-all flex items-center gap-2">
                <FileText size={18} />
                Download Resume
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/jashu7/" className="p-3 bg-navy rounded-full hover:bg-navy-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://x.com/Jaswanth06" className="p-3 bg-navy rounded-full hover:bg-navy-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://github.com/jaswanthnarne" className="p-3 bg-navy rounded-full hover:bg-navy-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="border-gradient bg-navy-dark p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/80 text-sm">
                    Name <span className="text-cyan">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-navy border-white/10 focus:border-cyan focus:ring-cyan"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/80 text-sm">
                    Email <span className="text-cyan">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-navy border-white/10 focus:border-cyan focus:ring-cyan"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/80 text-sm">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  className="bg-navy border-white/10 focus:border-cyan focus:ring-cyan"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/80 text-sm">
                  Message <span className="text-cyan">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-navy border-white/10 focus:border-cyan focus:ring-cyan min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan to-purple hover:from-cyan-dark hover:to-purple-dark transition-all flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
