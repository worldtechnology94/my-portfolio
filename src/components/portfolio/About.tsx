import { motion } from 'framer-motion';
import { Code, Brain, Zap, Smartphone, Award, Users, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import allenImage from '@/assets/images/allen.jpg';

const About = () => {
  const skills = [
    { name: 'Machine Learning & AI', level: 95, color: '#03B5AA' },
    { name: 'Python & Data Science', level: 92, color: '#03B5AA' },
    { name: 'Network Administration', level: 90, color: '#FF8552' },
    { name: 'Computer Vision & NLP', level: 88, color: '#03B5AA' },
    { name: 'IT Infrastructure', level: 90, color: '#FF8552' },
    { name: 'Education & Mentoring', level: 95, color: '#03B5AA' },
  ];

  const specializations = [
    {
      icon: Brain,
      title: 'AI & Machine Learning Research',
      description: 'Conducting cutting-edge research in AI-powered food recognition, transformer models, and federated learning with focus on smart agriculture applications.',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'BERT', 'ViT'],
    },
    {
      icon: Code,
      title: 'Computer Vision & NLP',
      description: 'Developing advanced systems for image recognition, object detection, and multilingual text processing with applications in nutrition and agriculture.',
      technologies: ['OpenCV', 'NER', 'Transformers', 'BiLSTM', 'XAI'],
    },
    {
      icon: Smartphone,
      title: 'IT Infrastructure & Networking',
      description: 'Expert in Computer Hardware and Software Maintenance, network administration, server management, and IT infrastructure with extensive experience in educational technology deployment.',
      technologies: ['Windows Server', 'Microsoft 365', 'VoIP', 'LAN/WAN', 'Cloud Systems'],
    },
    {
      icon: Zap,
      title: 'Education & Tech Leadership',
      description: 'Passionate educator and mentor with proven track record in curriculum design, tech bootcamps, and fostering innovation in young minds.',
      technologies: ['Curriculum Design', 'Bootcamp Facilitation', 'ICT Integration', 'Student Mentoring', 'Community Tech'],
    },
  ];

  const achievements = [
    { icon: Award, title: 'First-Class Honors', description: 'Bachelor of Technology with GPA: 3.63/4' },
    { icon: Users, title: '300+ Students', description: 'Taught and mentored in IT and Mathematics' },
    { icon: Lightbulb, title: '8+ Years Experience', description: 'IT infrastructure, education, and AI research' },
    { icon: Target, title: 'Excellence Award', description: 'Best Student at University of Bamenda' },
  ];

  return (
    <section id="about" className="relative">
      <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img
                    src={allenImage}
                    alt="Allen Kintoh - Creative Technologist"
                    className="w-80 h-80 object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 rounded-3xl border-4 border-[#03B5AA]/20 hover:border-[#03B5AA]/40 transition-all duration-300"></div>
                </motion.div>
                
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#03B5AA] rounded-full opacity-80"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#FF8552] rounded-full opacity-80"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#03B5AA]">
              About Me
            </span>
          </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                I am a passionate AI researcher and computer engineer currently pursuing my Master's in Computer Engineering 
                (Artificial Intelligence) at Inje University, South Korea. With 8+ years of experience in IT infrastructure, 
                education, and cutting-edge AI research, I specialize in developing intelligent systems that bridge technology 
                and real-world applications.
          </p>
        </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Core Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                  <div className="h-2 bg-[#023436] rounded-full overflow-hidden border border-[#03B5AA]/20 relative">
                  <motion.div
                      className="h-full rounded-full relative"
                      style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ 
                          x: ["-100%", "100%"],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2 + 1
                        }}
                  />
                    </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
            <div className="text-center mb-12">
              <motion.h3 
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Specializations
              </motion.h3>
              <motion.div
                className="w-24 h-1 bg-[#03B5AA] mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Main Card */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-[#03B5AA]/50 hover:shadow-2xl group-hover:transform group-hover:scale-[1.02]">
                      
                      {/* Top accent line */}
                      <motion.div
                        className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#03B5AA] to-[#FF8552] rounded-b-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Header Section */}
                      <div className="flex items-center space-x-6 mb-6">
                        {/* Icon Container */}
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-[#03B5AA]/20 to-[#FF8552]/20 rounded-xl flex items-center justify-center border border-[#03B5AA]/30 group-hover:border-[#03B5AA]/60 transition-all duration-300">
                            <spec.icon className="w-8 h-8 text-[#03B5AA] group-hover:text-white transition-colors duration-300" />
                          </div>
                          
                          {/* Icon background glow */}
                          <div className="absolute inset-0 bg-[#03B5AA]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </motion.div>

                        {/* Title */}
                        <div className="flex-1">
                          <motion.h4 
                            className="text-xl font-bold text-white group-hover:text-[#03B5AA] transition-colors duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                            viewport={{ once: true }}
                          >
                        {spec.title}
                          </motion.h4>
                        </div>
                    </div>

                      {/* Content Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                      >
                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {spec.description}
                        </p>

                        {/* Technologies Section */}
                        <div className="space-y-3">
                          <h5 className="text-sm font-semibold text-[#03B5AA] uppercase tracking-wider">
                            Technologies
                          </h5>
                          
                          {/* Tech Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {spec.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech} 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: index * 0.1 + techIndex * 0.05 + 0.7 
                                }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                  scale: 1.05,
                                  backgroundColor: "rgba(3, 181, 170, 0.1)"
                                }}
                                className="flex items-center space-x-2 p-2 rounded-lg border border-white/10 hover:border-[#03B5AA]/30 transition-all duration-200 cursor-pointer"
                              >
                                <div className="w-2 h-2 bg-[#FF8552] rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 truncate">
                          {tech}
                                </span>
                          </motion.div>
                      ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Side accent line */}
                      <motion.div 
                        className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[#03B5AA] to-[#FF8552] rounded-r-full"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                        viewport={{ once: true }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#03B5AA]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Bottom shadow line */}
                    <motion.div 
                      className="absolute -bottom-2 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#03B5AA]/20 to-transparent rounded-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                    />
                  </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="p-8 rounded-2xl bg-[#FF8552] shadow-2xl border-2 border-[#FF8552]/30 hover:border-[#FF8552] transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_rgba(255,133,82,0.3)] relative overflow-hidden group">
                    {/* Animated background pattern */}
                    <motion.div 
                      className="absolute inset-0 opacity-10"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-2 right-2 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-12 h-12 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </motion.div>

                    {/* Shimmer effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Floating decorative elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
                      animate={{
                        y: [-5, 5, -5],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/30 rounded-full"
                      animate={{
                        y: [5, -5, 5],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />

                    {/* Icon container with enhanced styling */}
                    <motion.div 
                      className="inline-flex p-5 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/40 mb-6 group-hover:bg-white/30 group-hover:border-white/60 group-hover:shadow-lg transition-all duration-500 relative z-10"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <achievement.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      
                      {/* Icon glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/10"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.4
                        }}
                      />
                    </motion.div>

                    {/* Content with enhanced typography */}
                    <div className="relative z-10">
                      <motion.h4 
                        className="text-2xl font-bold text-white mb-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                        whileHover={{ y: -2 }}
                      >
                        {achievement.title}
                      </motion.h4>
                      <motion.p 
                        className="text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors duration-300"
                        whileHover={{ y: -1 }}
                      >
                        {achievement.description}
                      </motion.p>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>
                </div>

                  {/* External floating elements */}
                  <motion.div
                    className="absolute -top-3 -left-3 w-2 h-2 bg-[#03B5AA] rounded-full opacity-60"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-3 -right-3 w-2 h-2 bg-[#03B5AA] rounded-full opacity-60"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
