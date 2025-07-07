import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, Star, BookOpen, Globe, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import education images
import aiImage from '@/assets/education images/Artificial Intelligence.png';
import computerNetworksImage from '@/assets/education images/Computer Networks & System Maintenance.png';
import koreanLanguageImage from '@/assets/education images/Korean Language.png';
import maintenanceNetworkingImage from '@/assets/education images/Maintenance & Networking.png';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Master's in Computer Engineering (Artificial Intelligence)",
      institution: 'Inje University',
      location: 'South Korea',
      period: '2023 – 2025',
      status: 'Current',
      type: 'Graduate',
      icon: Brain,
      color: '#03B5AA',
      image: aiImage,
      highlights: [
        'Conducting research in AI-powered food recognition and NLP-driven dietary assessment',
        'Developing transformer-based architectures for food image recognition and nutrition analysis',
        'Exploring intersection of quantum AI and nutrition to enhance computational models',
        'Specializing in federated learning and privacy-preserving model training',
        'Advanced coursework in neural networks, deep learning, and intelligent systems'
      ],
      technologies: ['AI Research', 'Machine Learning', 'Computer Vision', 'NLP', 'Federated Learning', 'Quantum AI'],
      achievement: 'Research Focus: Smart Agriculture & Nutrition AI'
    },
    {
      id: 2,
      degree: 'Korean Language Program',
      institution: 'Sunmoon University',
      location: 'South Korea',
      period: '2022 – 2023',
      status: 'Completed',
      type: 'Language',
      icon: Globe,
      color: '#FF8552',
      image: koreanLanguageImage,
      highlights: [
        'Completed intensive Korean language training under Global Korea Scholarship (GKS) program',
        'Achieved proficiency in Korean (TOPIK Level 3)',
        'Developed cross-cultural understanding and integration skills',
        'Prepared for academic research and professional communication in Korean environment',
        'Built foundation for successful graduate studies in South Korea'
      ],
      technologies: ['Korean Language', 'Cross-cultural Communication', 'Academic Korean', 'Professional Korean'],
      achievement: 'TOPIK Level 3 Certification'
    },
    {
      id: 3,
      degree: 'Bachelor of Technology: Computer Networks & System Maintenance',
      institution: 'University of Bamenda',
      location: 'Cameroon',
      period: '2017 – 2018',
      status: 'Completed',
      type: 'Undergraduate',
      icon: GraduationCap,
      color: '#03B5AA',
      image: computerNetworksImage,
      highlights: [
        'Graduated with First-Class Honors (GPA: 3.63/4)',
        'Excellence Award Winner - Best Student at University of Bamenda',
        'Specialized in computer networks, system administration, and maintenance',
        'Advanced coursework in network design, security, and infrastructure management',
        'Thesis focus on network optimization and performance analysis'
      ],
      technologies: ['Network Administration', 'System Maintenance', 'Network Security', 'Infrastructure Management'],
      achievement: 'First-Class Honors & Excellence Award'
    },
    {
      id: 4,
      degree: 'Higher National Diploma: Maintenance & Networking',
      institution: 'CITEC-Higher Institute of Management and Technology',
      location: 'Yaounde, Cameroon',
      period: '2015 – 2017',
      status: 'Completed',
      type: 'Diploma',
      icon: BookOpen,
      color: '#FF8552',
      image: maintenanceNetworkingImage,
      highlights: [
        'Graduated 3rd in Class (12.36/20)',
        'Comprehensive training in hardware and software maintenance',
        'Hands-on experience with networking technologies and protocols',
        'Practical workshops in system troubleshooting and repair',
        'Foundation in IT infrastructure and technical support'
      ],
      technologies: ['Hardware Maintenance', 'Software Troubleshooting', 'Network Protocols', 'Technical Support'],
      achievement: '3rd in Class - Academic Excellence'
    },
    {
      id: 5,
      degree: 'GCE Advanced Level Certificate',
      institution: 'Government Bilingual High School',
      location: 'NDU, Cameroon',
      period: '2013 – 2015',
      status: 'Completed',
      type: 'Secondary',
      icon: Star,
      color: '#03B5AA',
      image: null, // No image for this entry
      highlights: [
        'Completed advanced secondary education in bilingual environment',
        'Strong foundation in mathematics, sciences, and technology',
        'Developed analytical and problem-solving skills',
        'Prepared for higher education in technical fields',
        'Built communication skills in both English and French'
      ],
      technologies: ['Mathematics', 'Sciences', 'Technology', 'Bilingual Communication'],
      achievement: 'Advanced Level Certification'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#023436]">
              Educational Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A progressive academic path from foundational education to cutting-edge AI research,
            spanning multiple countries and cultivating both technical expertise and cultural adaptability.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white border-2 border-gray-100 hover:border-[#03B5AA]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#03B5AA]/10 group-hover:scale-[1.01] overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Content */}
                  <div className="flex-1 p-6">
                    <CardHeader className="pb-4 px-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            className="p-4 rounded-2xl"
                            style={{ backgroundColor: `${edu.color}15` }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <edu.icon 
                              className="w-8 h-8" 
                              style={{ color: edu.color }} 
                            />
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge 
                                variant="secondary" 
                                className="bg-gray-100 text-gray-700"
                              >
                                {edu.type}
                              </Badge>
                              <Badge 
                                variant={edu.status === 'Current' ? 'default' : 'outline'}
                                className={edu.status === 'Current' 
                                  ? 'bg-[#03B5AA] text-white' 
                                  : 'border-[#03B5AA]/30 text-[#03B5AA]'
                                }
                              >
                                {edu.status}
                              </Badge>
                            </div>
                            
                            <CardTitle className="text-2xl text-[#023436] group-hover:text-[#03B5AA] transition-colors leading-tight">
                              {edu.degree}
                            </CardTitle>
                            
                            <div className="space-y-1 mt-3">
                              <div className="flex items-center text-gray-600">
                                <GraduationCap className="w-4 h-4 mr-2" />
                                {edu.institution}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <MapPin className="w-4 h-4 mr-2" />
                                {edu.location}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Calendar className="w-4 h-4 mr-2" />
                                {edu.period}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <motion.div 
                            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#03B5AA]/10 to-[#FF8552]/10 border border-[#03B5AA]/20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Award className="w-4 h-4 mr-2" style={{ color: edu.color }} />
                            <span className="text-sm font-medium text-gray-700">
                              {edu.achievement}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6 px-0">
                      <div>
                        <h4 className="text-sm font-semibold text-[#03B5AA] uppercase tracking-wider mb-4">
                          Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <motion.li
                              key={highlightIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + highlightIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start text-gray-700"
                            >
                              <div className="w-2 h-2 bg-[#FF8552] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <span className="group-hover:text-gray-900 transition-colors leading-relaxed">
                                {highlight}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#03B5AA] uppercase tracking-wider mb-4">
                          Focus Areas & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: index * 0.1 + techIndex * 0.05 
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="border-[#023436]/20 text-[#023436] hover:bg-[#03B5AA]/10 hover:border-[#03B5AA]/40 transition-all text-xs"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Right side - Image */}
                  {edu.image && (
                    <div className="lg:w-80 lg:min-w-80 relative overflow-hidden">
                      <motion.div
                        className="h-full relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#03B5AA]/20 via-transparent to-[#FF8552]/20 z-10"></div>
                        
                        {/* Main image */}
                        <motion.img
                          src={edu.image}
                          alt={`${edu.degree} at ${edu.institution}`}
                          className="w-full h-full object-cover object-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Floating achievement badge overlay */}
                        <motion.div
                          className="absolute top-4 right-4 z-20"
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
                            <div className="flex items-center space-x-2">
                              <Award className="w-5 h-5" style={{ color: edu.color }} />
                              <span className="text-sm font-semibold text-gray-800">
                                {edu.achievement}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Institution name overlay */}
                        <motion.div
                          className="absolute bottom-4 left-4 z-20"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                            <h3 className="font-semibold text-sm">{edu.institution}</h3>
                            <p className="text-xs text-gray-300">{edu.location}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
