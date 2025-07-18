import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimationControls();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* AI-powered interactive background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255, 255, 255, 0.08) 0%, 
            rgba(128, 128, 128, 0.04) 30%, 
            rgba(255, 255, 255, 0.02) 60%, 
            transparent 100%)`
        }}
      />

      {/* Neural network connections */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M200,400 Q400,300 600,400 T1000,400"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </div>

      {/* AI Data Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <div className="w-1 h-1 bg-white/40 rounded-full">
              <div className="absolute inset-0 w-3 h-3 border border-white/20 rounded-full -translate-x-1 -translate-y-1"></div>
            </div>
          </motion.div>
        ))}
        
        {/* Binary data streams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-white/10 select-none"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight : 1000,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Array.from({ length: 10 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-[#03B5AA]">
              Creative Technologist
            </span>
            <br />
            <span className="text-white/90">& AI Engineer</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building the future through innovative AI solutions and cutting-edge web experiences. 
            Transforming complex problems into elegant, user-centered digital products.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-[#03B5AA] backdrop-blur-xl border border-[#03B5AA] hover:bg-[#03B5AA]/80 hover:border-[#03B5AA] text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-[#03B5AA]/20 group"
              onClick={scrollToAbout}
            >
                <span>View My Work</span>
                <ChevronDown className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
            </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <a
              href="https://drive.google.com/file/d/17i_BmBR0_M7kWWKZE8eF_xP3AOc7VQ1_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/5 border-[#FF8552] text-white hover:bg-[#FF8552] hover:text-white hover:border-[#FF8552] px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-500 backdrop-blur-xl group"
                >
                  <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  <span>Download CV</span>
              </Button>
            </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Twitter, href: '#', label: 'Twitter' },
              { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-[#03B5AA] hover:text-white hover:border-[#03B5AA] transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={scrollToAbout}
          >
          <span className="text-gray-400 text-sm mb-2 group-hover:text-[#FF8552] transition-colors">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#FF8552] transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
