
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI', 'Web', 'Mobile', 'Research'];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Content Generator',
      description: 'Advanced NLP system for automated content creation using GPT and custom fine-tuned models.',
      longDescription: 'A comprehensive AI content generation platform that leverages state-of-the-art language models to create high-quality, contextually relevant content across multiple domains. The system includes custom fine-tuning capabilities, multi-modal content generation, and enterprise-grade security features.',
      category: 'AI',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenAI GPT', 'FastAPI', 'React', 'PostgreSQL'],
      github: '#',
      demo: '#',
      features: [
        'Multi-format content generation (articles, social media, emails)',
        'Custom model fine-tuning for specific industries',
        'Real-time collaboration and editing',
        'Advanced analytics and performance tracking',
        'Enterprise security and compliance features'
      ],
      impact: 'Increased content production efficiency by 300% for 50+ companies'
    },
    {
      id: 2,
      title: 'Smart City Dashboard',
      description: 'Real-time urban analytics platform with IoT integration and predictive modeling.',
      longDescription: 'An intelligent urban management system that integrates IoT sensors, traffic data, weather information, and citizen feedback to provide city administrators with actionable insights. Features predictive analytics for traffic optimization, energy management, and emergency response coordination.',
      category: 'Web',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'D3.js', 'Node.js', 'MongoDB', 'AWS IoT'],
      github: '#',
      demo: '#',
      features: [
        'Real-time IoT sensor data visualization',
        'Predictive traffic flow modeling',
        'Energy consumption optimization',
        'Emergency response coordination',
        'Citizen engagement portal'
      ],
      impact: 'Reduced city operational costs by 15% and improved response times by 40%'
    },
    {
      id: 3,
      title: 'HealthTech Mobile App',
      description: 'Telemedicine platform with AI diagnostics and patient monitoring capabilities.',
      longDescription: 'A comprehensive telemedicine solution that combines video consultations, AI-powered preliminary diagnostics, continuous patient monitoring, and seamless integration with healthcare systems. The app includes features for medication reminders, health tracking, and emergency alerts.',
      category: 'Mobile',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'TensorFlow Lite', 'Firebase', 'WebRTC', 'HL7 FHIR'],
      github: '#',
      demo: '#',
      features: [
        'HD video consultations with doctors',
        'AI-powered symptom checker and triage',
        'Continuous vital signs monitoring',
        'Prescription management and reminders',
        'Integration with electronic health records'
      ],
      impact: 'Served 100K+ patients with 95% satisfaction rate'
    },
    {
      id: 4,
      title: 'Neural Architecture Search',
      description: 'Automated ML pipeline for discovering optimal neural network architectures.',
      longDescription: 'A cutting-edge research project focused on automating the discovery of optimal neural network architectures for specific tasks. The system uses evolutionary algorithms and reinforcement learning to explore the architecture search space efficiently.',
      category: 'Research',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'PyTorch', 'Ray', 'Kubernetes', 'MLflow'],
      github: '#',
      demo: '#',
      features: [
        'Automated architecture discovery',
        'Multi-objective optimization (accuracy, efficiency, size)',
        'Distributed training and evaluation',
        'Visualization of search progress',
        'Export to production-ready formats'
      ],
      impact: 'Achieved 15% performance improvement over manual architectures'
    },
    {
      id: 5,
      title: 'E-commerce Analytics Suite',
      description: 'Comprehensive analytics platform with real-time insights and predictive modeling.',
      longDescription: 'An end-to-end analytics solution for e-commerce businesses, providing real-time insights into customer behavior, sales performance, inventory management, and predictive analytics for demand forecasting and customer lifetime value.',
      category: 'Web',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Apache Kafka', 'ClickHouse', 'Docker'],
      github: '#',
      demo: '#',
      features: [
        'Real-time sales and customer analytics',
        'Advanced segmentation and cohort analysis',
        'Predictive demand forecasting',
        'A/B testing framework',
        'Custom dashboard creation tools'
      ],
      impact: 'Improved conversion rates by 25% for 200+ e-commerce stores'
    },
    {
      id: 6,
      title: 'AR Shopping Experience',
      description: 'Augmented reality mobile app for virtual product try-ons and home visualization.',
      longDescription: 'An innovative augmented reality shopping application that allows customers to virtually try on products, visualize furniture in their homes, and interact with 3D product models before making purchases. Features advanced computer vision and 3D rendering capabilities.',
      category: 'Mobile',
      image: '/api/placeholder/600/400',
      technologies: ['Swift', 'ARKit', 'Unity', 'Core ML', 'Firebase'],
      github: '#',
      demo: '#',
      features: [
        'Virtual try-on for clothing and accessories',
        'Furniture placement in real environments',
        '3D product visualization and interaction',
        'Social sharing and collaboration',
        'Integration with e-commerce platforms'
      ],
      impact: 'Reduced return rates by 30% and increased customer engagement by 60%'
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning AI, web development, mobile apps, and research projects.
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
                  : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge 
                        className="bg-purple-900/30 text-purple-300 hover:bg-purple-800/40"
                      >
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <a 
                          href={project.github}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 text-gray-300" />
                        </a>
                        <a 
                          href={project.demo}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 text-gray-300" />
                        </a>
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-gray-800/50 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge 
                          variant="secondary" 
                          className="bg-gray-800/50 text-gray-300 text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-purple-400/20">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-900/30 text-purple-300 mb-2">
                      {selectedProject.category}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <DialogTitle className="text-2xl text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300 text-base">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            className="bg-purple-900/30 text-purple-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                        <p className="text-gray-300">{selectedProject.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      asChild
                    >
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      asChild
                    >
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
