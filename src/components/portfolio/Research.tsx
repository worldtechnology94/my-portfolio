import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Users, Award, Brain, Search, Globe, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Research = () => {
  const researchProfiles = [
    {
      id: 1,
      platform: 'ResearchGate',
      username: 'Kintoh Allen Nfor',
      url: 'https://www.researchgate.net/profile/Kintoh-Allen-Nfor',
      icon: Search,
      color: '#03B5AA',
      description: 'Academic research profile showcasing publications, citations, and research interests',
      features: ['Research Publications', 'Citation Metrics', 'Collaboration Network', 'Research Interests']
    },
    {
      id: 2,
      platform: 'ORCID',
      username: '0009-0009-9186-8369',
      url: 'https://orcid.org/0009-0009-9186-8369',
      icon: Globe,
      color: '#FF8552',
      description: 'Unique researcher identifier connecting research outputs and scholarly activities',
      features: ['Verified Identity', 'Research Outputs', 'Professional Activities', 'Cross-platform Integration']
    },
    {
      id: 3,
      platform: 'Google Scholar',
      username: 'Kintoh Allen Nfor',
      url: 'https://scholar.google.com/citations?user=Kintoh-Allen-Nfor',
      icon: BookOpen,
      color: '#03B5AA',
      description: 'Citation tracking and academic paper indexing for research impact analysis',
      features: ['Citation Analysis', 'H-index Tracking', 'Publication Timeline', 'Research Impact']
    }
  ];

  const researchAreas = [
    {
      id: 1,
      title: 'AI-Powered Food Recognition',
      icon: Brain,
      color: '#03B5AA',
      description: 'Developing transformer-based architectures for accurate food image recognition and nutritional analysis using computer vision and deep learning techniques.',
      technologies: ['Computer Vision', 'Deep Learning', 'Transformer Models', 'Image Classification'],
      status: 'Active Research'
    },
    {
      id: 2,
      title: 'NLP-Driven Dietary Assessment',
      icon: FileText,
      color: '#FF8552',
      description: 'Creating natural language processing systems for automated dietary assessment, nutritional counseling, and personalized meal recommendations.',
      technologies: ['Natural Language Processing', 'Named Entity Recognition', 'Sentiment Analysis', 'Text Mining'],
      status: 'Active Research'
    },
    {
      id: 3,
      title: 'Federated Learning & Privacy',
      icon: Users,
      color: '#03B5AA',
      description: 'Exploring privacy-preserving machine learning techniques for distributed AI systems, ensuring data security while maintaining model performance.',
      technologies: ['Federated Learning', 'Privacy Preservation', 'Distributed Systems', 'Secure AI'],
      status: 'Active Research'
    },
    {
      id: 4,
      title: 'Quantum AI & Nutrition',
      icon: Award,
      color: '#FF8552',
      description: 'Investigating the intersection of quantum computing and artificial intelligence to enhance computational models for nutrition and smart agriculture.',
      technologies: ['Quantum Computing', 'Quantum Machine Learning', 'Computational Modeling', 'Smart Agriculture'],
      status: 'Exploratory Research'
    }
  ];

  return (
    <section id="research" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#03B5AA]">
              Research & Publications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advancing the frontiers of AI research with focus on smart agriculture, nutrition technology, 
            and privacy-preserving machine learning systems.
          </p>
        </motion.div>

        {/* Research Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Research Profiles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchProfiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#03B5AA]/50 transition-all duration-500 hover:shadow-2xl h-full">
                  <CardHeader className="text-center">
                    <motion.div
                      className="mx-auto p-4 rounded-2xl mb-4"
                      style={{ backgroundColor: `${profile.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <profile.icon 
                        className="w-8 h-8 mx-auto" 
                        style={{ color: profile.color }} 
                      />
                    </motion.div>
                    
                    <CardTitle className="text-xl text-white group-hover:text-[#03B5AA] transition-colors">
                      {profile.platform}
                    </CardTitle>
                    
                    <Badge 
                      variant="outline" 
                      className="border-[#03B5AA]/30 text-[#03B5AA] mt-2"
                    >
                      {profile.username}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <CardDescription className="text-gray-300 text-center leading-relaxed">
                      {profile.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {profile.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-400 text-sm"
                        >
                          <div className="w-2 h-2 bg-[#FF8552] rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-[#03B5AA] hover:bg-[#03B5AA]/80 text-white"
                    >
                      <motion.a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center"
                      >
                        Visit Profile
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Current Research Areas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#03B5AA]/50 transition-all duration-500 hover:shadow-2xl h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${area.color}20` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <area.icon 
                          className="w-6 h-6" 
                          style={{ color: area.color }} 
                        />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl text-white group-hover:text-[#03B5AA] transition-colors">
                            {area.title}
                          </CardTitle>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              area.status === 'Active Research' 
                                ? 'border-green-500/30 text-green-400' 
                                : 'border-yellow-500/30 text-yellow-400'
                            }`}
                          >
                            {area.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {area.description}
                    </CardDescription>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#03B5AA] uppercase tracking-wider mb-3">
                        Technologies & Methods
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, techIndex) => (
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
                              className="border-[#03B5AA]/30 text-[#03B5AA] hover:bg-[#03B5AA]/10 transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Impact Statement */}
      </div>
    </section>
  );
};

export default Research;
