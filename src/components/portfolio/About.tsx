
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Smartphone, Award, Users, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    { name: 'Machine Learning', level: 95, color: 'from-purple-500 to-pink-500' },
    { name: 'React/Next.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Python/AI', level: 92, color: 'from-green-500 to-teal-500' },
    { name: 'UI/UX Design', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Cloud Architecture', level: 88, color: 'from-indigo-500 to-purple-500' },
    { name: 'Mobile Development', level: 82, color: 'from-pink-500 to-rose-500' },
  ];

  const specializations = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep expertise in neural networks, NLP, computer vision, and AI system architecture.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain'],
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development with modern technologies and best practices.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Innovation',
      description: 'Cross-platform mobile apps with native performance and seamless user experiences.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'High-performance applications with advanced optimization techniques and scalable architecture.',
      technologies: ['WebAssembly', 'GraphQL', 'Redis', 'Docker', 'Kubernetes'],
    },
  ];

  const achievements = [
    { icon: Award, title: '50+ Projects', description: 'Successfully delivered across various industries' },
    { icon: Users, title: '1M+ Users', description: 'Products serving millions of active users' },
    { icon: Lightbulb, title: '15+ Patents', description: 'Innovative solutions in AI and web technologies' },
    { icon: Target, title: '99.9% Uptime', description: 'Reliable, production-ready applications' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate creative technologist with 8+ years of experience building AI-powered solutions 
            and modern web applications. My mission is to bridge the gap between cutting-edge technology 
            and human-centered design.
          </p>
        </motion.div>

        {/* Skills Section */}
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
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                        <spec.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                        {spec.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {spec.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {spec.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-purple-900/30 text-purple-300 hover:bg-purple-800/40 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
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
                className="text-center group"
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
