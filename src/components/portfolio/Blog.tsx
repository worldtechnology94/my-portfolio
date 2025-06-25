
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development: Trends and Predictions for 2024',
      excerpt: 'Exploring how artificial intelligence is revolutionizing web development workflows, from automated code generation to intelligent UI/UX optimization.',
      content: 'Full article content would be here...',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['AI', 'Web Development', 'Automation', 'Future Tech'],
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 2,
      title: 'Building Scalable React Applications with Modern Architecture Patterns',
      excerpt: 'A deep dive into advanced React patterns, state management strategies, and performance optimization techniques for large-scale applications.',
      content: 'Full article content would be here...',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Development',
      tags: ['React', 'Architecture', 'Performance', 'Scalability'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 3,
      title: 'Machine Learning Model Deployment: From Jupyter to Production',
      excerpt: 'Complete guide to deploying ML models in production environments, covering containerization, API design, and monitoring strategies.',
      content: 'Full article content would be here...',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'Machine Learning',
      tags: ['ML', 'Deployment', 'DevOps', 'Production'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 4,
      title: 'Creating Immersive User Experiences with Advanced CSS and JavaScript',
      excerpt: 'Techniques for building engaging, interactive web experiences using modern CSS features, animations, and JavaScript APIs.',
      content: 'Full article content would be here...',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Design',
      tags: ['CSS', 'JavaScript', 'UI/UX', 'Animation'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 5,
      title: 'The Ethics of AI: Responsible Development in the Age of Automation',
      excerpt: 'Discussing the ethical implications of AI development and the importance of building responsible, fair, and transparent AI systems.',
      content: 'Full article content would be here...',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Ethics',
      tags: ['AI Ethics', 'Responsibility', 'Society', 'Future'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 6,
      title: 'Optimizing Mobile App Performance: Tips from the Trenches',
      excerpt: 'Practical strategies for improving mobile app performance, from code optimization to user experience enhancements.',
      content: 'Full article content would be here...',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Mobile',
      tags: ['Mobile', 'Performance', 'Optimization', 'UX'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 px-4 relative">
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
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge about AI, web development, and emerging technologies. 
            Insights from real-world projects and industry experiences.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-400/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02] group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      Featured
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800/50 text-gray-300">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="border-purple-400/30 text-purple-300">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="border-purple-400/30 text-purple-300 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full text-purple-400 hover:text-white hover:bg-purple-600/20 justify-between group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
