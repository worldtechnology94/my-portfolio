import { motion, useAnimation } from 'framer-motion';
import { Calendar, MapPin, Users, Award, Code, Lightbulb, GraduationCap, Building, TrendingUp, Star, Zap, Target, Coffee, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const experiences = [
    {
      id: 1,
      title: 'IT Technician & Lecturer',
      company: 'CITEC-Higher Institute of Technology and Management',
      location: 'Yaounde, Cameroon',
      period: '2017 – 2022',
      duration: '5 years',
      type: 'Full-time',
      icon: Building,
      color: '#03B5AA',
      achievements: [
        'Led deployment of digital learning platforms, integrating technology into education for enhanced learning experiences',
        'Developed and delivered comprehensive IT training programs',
        'Demonstrated customer-focused approach with timely issue resolution',
        'Managed complex technical challenges independently and collaboratively',
        'Communicated technical solutions clearly to diverse audiences'
      ],
      technologies: ['Digital Learning Platforms', 'IT Training', 'Technical Support', 'Customer Service', 'Problem Solving']
    },
    {
      id: 2,
      title: 'Web Development & IT Lecturer',
      company: 'JIMIT-INSTITUTE',
      location: 'Yaounde, Cameroon',
      period: '2019 – 2020',
      duration: '1 year',
      type: 'Part-time',
      icon: Code,
      color: '#FF8552',
      achievements: [
        'Delivered comprehensive courses on Computer Architecture, DBMS, Web Programming',
        'Taught Network Administration and Unix/Linux OS systems',
        'Conducted hands-on workshops in Vector & Raster Imaging, Switching & Routing',
        'Introduced AI and data-driven concepts into curriculum for modern IT practices',
        'Led workshops on Electronic Circuits and practical implementations'
      ],
      technologies: ['Computer Architecture', 'DBMS', 'Web Programming', 'Network Administration', 'Unix/Linux', 'AI Concepts']
    },
    {
      id: 3,
      title: 'Computer Science & Mathematics Tutor',
      company: 'Government Bilingual High School',
      location: 'Etoug-Egbe, Yaounde, Cameroon',
      period: 'Nov 2017 – Dec 2018',
      duration: '1+ years',
      type: 'Full-time',
      icon: GraduationCap,
      color: '#03B5AA',
      achievements: [
        'Managed computer lab operations and infrastructure',
        'Tutored over 300 students in IT and Mathematics',
        'Organized groundbreaking workshop on integrating ICT into classrooms',
        'Mentored teachers on modern educational technology integration',
        'Developed curriculum for practical computer science education'
      ],
      technologies: ['Computer Lab Management', 'Mathematics', 'ICT Integration', 'Educational Technology', 'Curriculum Development']
    },
    {
      id: 4,
      title: 'Founder - Teenage ICT Initiative',
      company: 'Independent Community Project',
      location: 'Cameroon',
      period: '2016 – 2019',
      duration: '3 years',
      type: 'Founder',
      icon: Lightbulb,
      color: '#FF8552',
      achievements: [
        'Created initiative aimed at mentoring high school students in ICT and innovation',
        'Conducted tech boot camps introducing coding, web development, and AI basics',
        'Fostered tech entrepreneurship among young learners',
        'Built community of young tech enthusiasts and future developers',
        'Developed age-appropriate curriculum for teenage technology education'
      ],
      technologies: ['Tech Entrepreneurship', 'Coding Bootcamps', 'Web Development', 'AI Education', 'Community Building']
    }
  ];

  // Floating particles animation
  const FloatingParticles = ({ color, count = 15 }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{ backgroundColor: color }}
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 400,
            }}
            animate={{
              x: Math.random() * 400,
              y: Math.random() * 400,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };



  // Geometric background patterns
  const GeometricPattern = ({ index, color }) => {
    const patterns = [
      // Pattern 1: Rotating hexagons
      <motion.div
        key="hex"
        className="absolute top-20 left-1/2 transform -translate-x-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 border border-white/10 rounded-lg"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-40px)`,
                borderColor: `${color}30`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>,

      // Pattern 2: Floating tech icons
      <div key="icons" className="absolute inset-0 overflow-hidden">
        {[
          { Icon: Code, delay: 0 },
          { Icon: Zap, delay: 1 },
          { Icon: Target, delay: 2 },
          { Icon: Star, delay: 3 },
        ].map(({ Icon, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + delay,
              repeat: Infinity,
              delay: delay,
            }}
          >
            <Icon 
              className="w-6 h-6 opacity-20" 
              style={{ color: color }} 
            />
          </motion.div>
        ))}
      </div>,

      // Pattern 3: Animated progress rings
      <motion.div
        key="rings"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border rounded-full border-white/10"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              borderColor: `${color}${30 - i * 10}`,
              top: `${-30 - i * 20}px`,
              left: `${-30 - i * 20}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>,

      // Pattern 4: Data visualization
      <motion.div
        key="data"
        className="absolute top-10 right-10"
      >
        <div className="relative w-32 h-32">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-sm"
              style={{
                width: '4px',
                height: `${Math.random() * 60 + 20}px`,
                left: `${i * 14}px`,
                bottom: 0,
                backgroundColor: `${color}50`,
              }}
              animate={{
                height: [
                  `${Math.random() * 60 + 20}px`,
                  `${Math.random() * 60 + 20}px`,
                  `${Math.random() * 60 + 20}px`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>,
    ];

    return patterns[index % patterns.length];
  };

  // Network connection animation
  const NetworkConnections = ({ index, color }) => {
    return (
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${50 + i * 30},50 Q${150 + i * 20},${100 + i * 30} ${250 + i * 40},${80 + i * 25}`}
              stroke={color}
              strokeWidth="1"
              fill="none"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                repeatType: "loop",
              }}
            />
          ))}
        </svg>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <FloatingParticles color="#03B5AA" count={20} />
        <FloatingParticles color="#FF8552" count={15} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#03B5AA]">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            8+ years of diverse experience spanning IT infrastructure, education, research, and community leadership.
            Building bridges between technology and human potential.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#03B5AA] via-[#FF8552] to-[#03B5AA] transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-white bg-[#023436] transform md:-translate-x-1/2 z-10"
                  style={{ borderColor: exp.color }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-1 rounded-full"
                    style={{ backgroundColor: exp.color }}
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Pulsing rings around timeline dot */}
                  {hoveredCard === exp.id && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: exp.color }}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: exp.color }}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                      />
                    </>
                  )}
                </motion.div>

                {/* Enhanced Content card with visual elements */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Background geometric pattern */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <GeometricPattern index={index} color={exp.color} />
                      <NetworkConnections index={index} color={exp.color} />
                    </div>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#03B5AA]/50 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <motion.div
                              className="p-3 rounded-xl relative"
                              style={{ backgroundColor: `${exp.color}20` }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <exp.icon 
                                className="w-6 h-6 relative z-10" 
                                style={{ color: exp.color }} 
                              />
                              
                              {/* Animated background for icon */}
                              <motion.div
                                className="absolute inset-0 rounded-xl"
                                style={{ backgroundColor: `${exp.color}10` }}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.3,
                                }}
                              />
                            </motion.div>
                            <div>
                              <Badge 
                                variant="secondary" 
                                className="mb-2 bg-white/10 text-gray-300"
                              >
                                {exp.type} • {exp.duration}
                              </Badge>
                              <CardTitle className="text-xl text-white group-hover:text-[#03B5AA] transition-colors">
                                {exp.title}
                              </CardTitle>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Building className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 relative z-10">
                        <div>
                          <h4 className="text-sm font-semibold text-[#03B5AA] uppercase tracking-wider mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-start text-gray-300 text-sm"
                              >
                                <motion.div 
                                  className="w-2 h-2 bg-[#FF8552] rounded-full mt-2 mr-3 flex-shrink-0"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: achIndex * 0.2,
                                  }}
                                />
                                <span className="group-hover:text-gray-200 transition-colors">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-[#03B5AA] uppercase tracking-wider mb-3">
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: index * 0.1 + techIndex * 0.05 
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="border-[#03B5AA]/30 text-[#03B5AA] hover:bg-[#03B5AA]/10 transition-all text-xs relative overflow-hidden"
                                >
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: techIndex * 0.1,
                                    }}
                                  />
                                  <span className="relative z-10">{tech}</span>
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>

                      {/* Hover effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#03B5AA]/5 to-[#FF8552]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                        style={{
                          background: `linear-gradient(135deg, ${exp.color}10, transparent)`,
                        }}
                      />
                    </Card>
                  </motion.div>
                </div>

                {/* Empty space visual enhancement */}
                <div className={`hidden md:block w-5/12 relative h-96 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                }`}>
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Interactive floating elements based on experience type */}
                    {exp.type === 'Full-time' && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        viewport={{ once: true }}
                      >
                        {/* Tech innovation visualization */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: i % 2 === 0 ? exp.color : '#FF8552',
                                top: `${20 + (i % 4) * 20}%`,
                                left: `${10 + (i % 3) * 30}%`,
                              }}
                              animate={{
                                scale: [0.5, 1.5, 0.5],
                                opacity: [0.3, 0.8, 0.3],
                                rotate: [0, 180, 360],
                              }}
                              transition={{
                                duration: 3 + i * 0.2,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {exp.type === 'Part-time' && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        viewport={{ once: true }}
                      >
                        {/* Code/Learning visualization */}
                        <div className="relative">
                          {[Code, TrendingUp, Star, Zap].map((Icon, i) => (
                            <motion.div
                              key={i}
                              className="absolute"
                              style={{
                                top: `${-40 + i * 30}px`,
                                left: `${-40 + (i % 2) * 80}px`,
                              }}
                              animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 180, 0],
                                scale: [0.8, 1.3, 0.8],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                            >
                              <Icon 
                                className="w-8 h-8 opacity-40" 
                                style={{ color: exp.color }} 
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {exp.type === 'Founder' && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        viewport={{ once: true }}
                      >
                        {/* Innovation/Community building visualization */}
                        <div className="relative w-full h-full">
                          <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-4 h-4 rounded-full"
                                style={{
                                  backgroundColor: exp.color,
                                  transform: `rotate(${i * 45}deg) translateY(-60px)`,
                                }}
                                animate={{
                                  scale: [0.5, 1.2, 0.5],
                                  opacity: [0.4, 0.9, 0.4],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
 