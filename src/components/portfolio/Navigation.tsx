import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(8, 8, 8, 0)', 'rgba(8, 8, 8, 0.95)']
  );

  const navigationItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white relative group"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Kintoh Allen Nfor
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-white/60"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl relative group ${
                      activeSection === item.href.substring(1)
                        ? 'text-white bg-white/10 backdrop-blur-xl border border-white/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full"
                        initial={{ scale: 0, x: "-50%" }}
                        animate={{ scale: 1, x: "-50%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* AI Neural Progress bar */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-white/60 via-white/40 to-white/60 origin-left relative"
          style={{ scaleX: scrollYProgress }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-2 bg-white rounded-full shadow-white/50"
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], ["0%", "calc(100vw - 8px)"])
            }}
        />
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : -20 
        }}
        className={`fixed top-16 left-0 right-0 z-40 bg-[#023436]/95 backdrop-blur-xl border-b border-white/5 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href.substring(1))}
              className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-white bg-white/10 backdrop-blur-xl border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
