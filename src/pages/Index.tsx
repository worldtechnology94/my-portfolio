import { motion } from 'framer-motion';
import { ChevronDown, ArrowUp } from 'lucide-react';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Education from '@/components/portfolio/Education';
import Research from '@/components/portfolio/Research';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Navigation from '@/components/portfolio/Navigation';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#023436] text-white overflow-x-hidden relative">
      <Navigation />
      
      {/* AI-Themed Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating AI Particles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-400/[0.03] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-white/[0.025] rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Moving Data Streams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-400/10 to-transparent animate-pulse delay-1500"></div>
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Research />
        <Projects />
        <Contact />
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-[#03B5AA] hover:bg-[#03B5AA]/80 text-white shadow-lg"
      >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
