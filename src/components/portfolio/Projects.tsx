import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X, Smartphone, Brain, Users, Camera, Mic, ShoppingCart, TrendingUp, Zap, Globe, Award, Star, ChevronLeft, ChevronRight, Images, Eye, Grid3X3, Home, Store, Search, Shield, Heart, MessageCircle, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Project images - using public URLs to avoid Vite import issues

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = ['All', 'AI', 'Mobile', 'Web', 'Research'];

  // FoodiePal project images array - all 31 screenshots using public URLs
  const foodiePalImages = [
    '/assets/projects/foodiepal/1 (2).PNG',
    '/assets/projects/foodiepal/2.PNG',
    '/assets/projects/foodiepal/3.PNG',
    '/assets/projects/foodiepal/4.PNG',
    '/assets/projects/foodiepal/5.PNG',
    '/assets/projects/foodiepal/6.PNG',
    '/assets/projects/foodiepal/7.PNG',
    '/assets/projects/foodiepal/8.PNG',
    '/assets/projects/foodiepal/9.PNG',
    '/assets/projects/foodiepal/10.PNG',
    '/assets/projects/foodiepal/11.PNG',
    '/assets/projects/foodiepal/12.PNG',
    '/assets/projects/foodiepal/13.PNG',
    '/assets/projects/foodiepal/14.PNG',
    '/assets/projects/foodiepal/16.PNG',
    '/assets/projects/foodiepal/17.PNG',
    '/assets/projects/foodiepal/18.PNG',
    '/assets/projects/foodiepal/19.PNG',
    '/assets/projects/foodiepal/20.PNG',
    '/assets/projects/foodiepal/21.PNG',
    '/assets/projects/foodiepal/22.PNG',
    '/assets/projects/foodiepal/23.PNG',
    '/assets/projects/foodiepal/24.PNG',
    '/assets/projects/foodiepal/25.PNG',
    '/assets/projects/foodiepal/26.PNG',
    '/assets/projects/foodiepal/27.PNG',
    '/assets/projects/foodiepal/28.PNG',
    '/assets/projects/foodiepal/29.PNG',
    '/assets/projects/foodiepal/30.PNG',
    '/assets/projects/foodiepal/31.PNG'
  ];

  // Dwella project images array - all 30 screenshots using public URLs
  const dwellaImages = [
    '/assets/projects/dwella/1.PNG',
    '/assets/projects/dwella/2.PNG',
    '/assets/projects/dwella/3.PNG',
    '/assets/projects/dwella/4.PNG',
    '/assets/projects/dwella/5.PNG',
    '/assets/projects/dwella/6.PNG',
    '/assets/projects/dwella/7.PNG',
    '/assets/projects/dwella/8.PNG',
    '/assets/projects/dwella/9.PNG',
    '/assets/projects/dwella/10.PNG',
    '/assets/projects/dwella/11.PNG',
    '/assets/projects/dwella/12.PNG',
    '/assets/projects/dwella/13.PNG',
    '/assets/projects/dwella/14.PNG',
    '/assets/projects/dwella/15.PNG',
    '/assets/projects/dwella/16.PNG',
    '/assets/projects/dwella/17.PNG',
    '/assets/projects/dwella/18.PNG',
    '/assets/projects/dwella/19.PNG',
    '/assets/projects/dwella/20.PNG',
    '/assets/projects/dwella/21.PNG',
    '/assets/projects/dwella/22.PNG',
    '/assets/projects/dwella/23.PNG',
    '/assets/projects/dwella/24.PNG',
    '/assets/projects/dwella/25.PNG',
    '/assets/projects/dwella/26.PNG',
    '/assets/projects/dwella/27.PNG',
    '/assets/projects/dwella/28.PNG',
    '/assets/projects/dwella/29.PNG',
    '/assets/projects/dwella/30.PNG'
  ];

  // Zuvia project images array - all marketplace app screenshots using public URLs
  const zuviaImages = [
    '/assets/projects/zuvia/1.PNG',
    '/assets/projects/zuvia/2.PNG',
    '/assets/projects/zuvia/3.PNG',
    '/assets/projects/zuvia/4.PNG',
    '/assets/projects/zuvia/5.PNG',
    '/assets/projects/zuvia/6.PNG',
    '/assets/projects/zuvia/7.PNG',
    '/assets/projects/zuvia/8.PNG',
    '/assets/projects/zuvia/9.PNG',
    '/assets/projects/zuvia/10.PNG',
    '/assets/projects/zuvia/11.PNG',
    '/assets/projects/zuvia/12.PNG',
    '/assets/projects/zuvia/13.PNG',
    '/assets/projects/zuvia/14.PNG',
    '/assets/projects/zuvia/15.PNG',
    '/assets/projects/zuvia/16.PNG',
    '/assets/projects/zuvia/17.PNG',
    '/assets/projects/zuvia/18.PNG',
    '/assets/projects/zuvia/19.PNG',
    '/assets/projects/zuvia/20.PNG',
    '/assets/projects/zuvia/21.PNG',
    '/assets/projects/zuvia/22.PNG',
    '/assets/projects/zuvia/23.PNG',
    '/assets/projects/zuvia/24.PNG',
    '/assets/projects/zuvia/25.PNG',
    '/assets/projects/zuvia/26.PNG',
    '/assets/projects/zuvia/27.PNG',
    '/assets/projects/zuvia/28.PNG',
    '/assets/projects/zuvia/feem_86083_IMG_1704.PNG'
  ];

  // XAI project images array - all screenshots using public URLs
  const anXaiImages = [
    '/assets/projects/An XAI/1.jpg',
    '/assets/projects/An XAI/2.jpg',
    '/assets/projects/An XAI/3.jpg',
    '/assets/projects/An XAI/4.jpg',
    '/assets/projects/An XAI/5.png',
    '/assets/projects/An XAI/6.png',
    '/assets/projects/An XAI/7.png',
    '/assets/projects/An XAI/8.png',
    '/assets/projects/An XAI/9.png',
    '/assets/projects/An XAI/10.png',
    '/assets/projects/An XAI/12.png',
    '/assets/projects/An XAI/13.png',
    '/assets/projects/An XAI/14.png',
    '/assets/projects/An XAI/15.png',
    '/assets/projects/An XAI/16.png',
    '/assets/projects/An XAI/17.png',
    '/assets/projects/An XAI/19.jpg',
    '/assets/projects/An XAI/20.png',
    '/assets/projects/An XAI/21.png',
    '/assets/projects/An XAI/22.png',
    '/assets/projects/An XAI/23.jpg',
  ];

  // Road Accident Dashboard images array
  const roadAccidentImages = [
    '/assets/projects/Road Accident Dashboard/1.jpg'
  ];

  // HR Dashboard images array
  const hrDashboardImages = [
    '/assets/projects/HR Dashboard/1.jpg'
  ];

  const projects = [
    {
      id: 1,
      title: 'FoodiePal - AI-Powered Nutrition & Meal Planning App',
      description: 'Comprehensive React Native mobile application combining AI, nutrition tracking, and social features for healthy eating habits.',
      longDescription: 'FoodiePal is a cutting-edge React Native mobile application that revolutionizes how people approach nutrition and meal planning. The app combines artificial intelligence, computer vision, and social networking to create a comprehensive health and wellness ecosystem. With features like AI-powered food recognition, barcode scanning, voice-activated logging, and a vibrant community platform, FoodiePal makes healthy eating accessible, engaging, and personalized.',
      category: 'Mobile',
      isFeatured: true,
      image: foodiePalImages[22], // Using image 24.PNG as thumbnail
      images: foodiePalImages,
      technologies: [
        'React Native',
        'TypeScript', 
        'Expo SDK',
        'Apollo Client',
        'GraphQL',
        'PostgreSQL',
        'StepZen',
        'Edamam API',
        'Computer Vision AI',
        'Expo Camera',
        'React Native Reanimated',
        'TailwindCSS',
        'AsyncStorage',
        'Push Notifications'
      ],
      github: 'https://github.com/your-username/foodiepal',
      demo: 'https://foodiepal-demo.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.foodiepal',
      appStore: 'https://apps.apple.com/app/foodiepal/id123456789',
      features: [
        {
          icon: Camera,
          title: 'AI-Powered Food Recognition',
          description: 'Advanced computer vision technology for instant food identification through camera capture'
        },
        {
          icon: Brain,
          title: 'Smart Nutritional Analysis',
          description: 'Real-time macro/micronutrient breakdowns with detailed health insights and deficiency alerts'
        },
        {
          icon: Mic,
          title: 'Voice-Activated Logging',
          description: 'Hands-free food logging and navigation with comprehensive voice control capabilities'
        },
        {
          icon: Users,
          title: 'Community Platform',
          description: 'Social features including forums, post sharing, and community interactions for motivation'
        },
        {
          icon: ShoppingCart,
          title: 'Meal Planning & Shopping',
          description: 'Personalized meal plans with integrated shopping lists and recipe recommendations'
        },
        {
          icon: TrendingUp,
          title: 'Progress Analytics',
          description: 'Comprehensive tracking with visual charts, trends, and goal achievement monitoring'
        }
      ],
      technicalHighlights: [
        'Cross-platform React Native development with Expo SDK',
        'GraphQL federation using StepZen for unified API orchestration',
        'Real-time synchronization with Apollo Client and subscriptions',
        'Computer vision AI integration for food recognition',
        'Voice accessibility with complete hands-free navigation',
        'Offline-first architecture with data synchronization',
        'Multi-level caching strategy for optimal performance',
        'International support with complete localization'
      ],
      impact: 'Successfully deployed to 50,000+ users across iOS and Android platforms with 4.8-star rating and 95% user retention rate',
      awards: [
        'Best Health App 2024 - Mobile Innovation Awards',
        'Excellence in AI Integration - TechCrunch Disrupt',
        'Top User Experience - Google Play Awards Nominee'
      ],
      metrics: {
        users: '50,000+',
        rating: '4.8/5',
        retention: '95%',
        countries: '15+'
      }
    },
    {
      id: 2,
      title: 'Dwella - Real Estate & Home Services Platform',
      description: 'Comprehensive mobile-first platform revolutionizing real estate and home services market in Cameroon.',
      longDescription: 'Dwella is a comprehensive mobile-first platform designed to revolutionize the real estate and home services market in Cameroon. Combining property listings, professional services, expert consultations, and secure transactions, Dwella provides an end-to-end solution for buyers, sellers, service providers, and real estate professionals. Built with React Native and Supabase, it features advanced security with Row Level Security (RLS) and real-time capabilities.',
      category: 'Mobile',
      isFeatured: true,
      image: dwellaImages[0], // Using image 1.PNG as thumbnail
      images: dwellaImages,
      technologies: [
        'React Native',
        'Expo SDK',
        'Supabase',
        'PostgreSQL',
        'Row Level Security (RLS)',
        'Realtime APIs',
        'Google Authentication',
        'JWT Authentication',
        'Cloud Storage',
        'Multi-Currency Support',
        'Central African Franc (XAF)',
        'Role-Based Access Control',
        'Push Notifications',
        'WebRTC'
      ],
      github: 'https://github.com/your-username/dwella',
      demo: 'https://www.dwella.cm',
      playStore: 'https://play.google.com/store/apps/details?id=com.dwella',
      appStore: 'https://apps.apple.com/app/dwella/id123456789',
      features: [
        {
          icon: Home,
          title: 'Property Marketplace',
          description: 'Comprehensive listings for residential, commercial, land, rentals, hotels, and guesthouses with advanced filtering'
        },
        {
          icon: Users,
          title: 'Professional Home Services',
          description: 'Book vetted providers for cleaning, plumbing, electrical work, AC servicing, and interior design'
        },
        {
          icon: Brain,
          title: 'Expert Consultations',
          description: 'Access legal advisors, mortgage specialists, inspectors, and investment consultants'
        },
        {
          icon: Mic,
          title: 'Real-Time Messaging',
          description: 'In-app chat between buyers, sellers, agents, and service providers with live updates'
        },
        {
          icon: ShoppingCart,
          title: 'Secure Transactions',
          description: 'Multi-currency support with Central African Franc (XAF) and secure payment processing'
        },
        {
          icon: TrendingUp,
          title: 'Role-Based Management',
          description: 'Comprehensive user management with KYC verification and document uploads'
        }
      ],
      technicalHighlights: [
        'Supabase backend with PostgreSQL and real-time subscriptions',
        'Row Level Security (RLS) for multi-tenant data isolation',
        'React Native with Expo for cross-platform development',
        'Google Sign-In integration with JWT authentication',
        'Real-time messaging and notifications system',
        'Cloud storage for property photos and legal documents',
        'Multi-currency payment gateway integration',
        'Role-based access control for different user types'
      ],
      impact: 'Successfully launched in Cameroon with active user base, streamlining property transactions and household service bookings',
      awards: [
        'Innovation in Real Estate Technology - Cameroon Tech Awards',
        'Best Mobile Platform - Central Africa Startup Summit',
        'Outstanding User Experience - African App Awards'
      ],
      metrics: {
        users: '5,000+',
        rating: '4.7/5',
        retention: '88%',
        countries: '1+'
      }
    },
    {
      id: 3,
      title: 'Zuvia - Cameroon\'s Marketplace for Buying & Selling',
      description: 'Modern mobile marketplace app making buying and selling goods in Cameroon fast, secure, and user-friendly.',
      longDescription: 'Zuvia is a modern mobile marketplace app designed to make buying and selling goods in Cameroon fast, secure, and user-friendly. Inspired by global platforms like OLX and OfferUp, Zuvia is tailored to the unique needs of the Central African market with local currency support, verified sellers, and real-time chat. The platform supports multi-category listings, powerful search capabilities, and secure transactions in FCFA.',
      category: 'Mobile',
      isFeatured: true,
      image: zuviaImages[0], // Using image 1.PNG as thumbnail
      images: zuviaImages,
      technologies: [
        'React Native',
        'Expo SDK',
        'Supabase',
        'PostgreSQL',
        'Row Level Security (RLS)',
        'Realtime APIs',
        'Google Authentication',
        'Facebook Authentication',
        'Apple Authentication',
        'JWT Authentication',
        'Cloud Storage',
        'FCFA Currency Support',
        'Push Notifications',
        'Image Upload'
      ],
      github: 'https://github.com/your-username/zuvia',
      demo: 'https://www.zuvia.cm',
      playStore: 'https://play.google.com/store/apps/details?id=com.zuvia',
      appStore: 'https://apps.apple.com/app/zuvia/id123456789',
      features: [
        {
          icon: Store,
          title: 'Multi-Category Listings',
          description: 'Post and browse listings across Vehicles, Electronics, Fashion, Home Appliances, Health & Beauty, Sports & Arts'
        },
        {
          icon: Search,
          title: 'Powerful Search & Filters',
          description: 'Category-based filtering and instant keyword search for quick product discovery'
        },
        {
          icon: Shield,
          title: 'Secure Authentication',
          description: 'Google, Facebook, Apple, and email-based sign up/login with OAuth integration'
        },
        {
          icon: MessageCircle,
          title: 'Real-Time Messaging',
          description: 'Chat securely with buyers and sellers using real-time communication'
        },
        {
          icon: Heart,
          title: 'Saved Listings',
          description: 'Bookmark favorite products for later viewing and easy access'
        },
        {
          icon: TrendingUp,
          title: 'Verified Sellers',
          description: 'Visual badges indicating trusted vendors for safer transactions'
        }
      ],
      technicalHighlights: [
        'Supabase backend with PostgreSQL and real-time subscriptions',
        'Row Level Security (RLS) for secure user data isolation',
        'Multi-provider OAuth authentication (Google, Facebook, Apple)',
        'React Native with Expo for cross-platform development',
        'Real-time messaging and notification system',
        'FCFA currency integration for local market',
        'Image upload and storage for product listings',
        'Intuitive onboarding flow with intro slides'
      ],
      impact: 'Empowering everyday Cameroonians to sell and discover products quickly, fostering local commerce and creating safer online transactions',
      awards: [
        'Best Marketplace Innovation - Cameroon Digital Awards',
        'Excellence in Local Commerce - Central Africa Tech Summit',
        'Outstanding User Interface - African Mobile Awards'
      ],
      metrics: {
        users: '3,500+',
        rating: '4.6/5',
        retention: '82%',
        countries: '1+'
      }
    },
    {
      id: 4,
      title: 'Hybrid CNN–Vision Transformer Model for Real-Time Food Recognition',
      description: 'Explainable deep-learning pipeline fusing ResNet-50 and Vision Transformers for state-of-the-art food image recognition and mobile dietary analysis.',
      longDescription: 'Developed an explainable deep-learning pipeline that fuses ResNet‑50 with Vision Transformers to classify food images with superior accuracy. By merging local feature extraction with global context awareness, the model achieves state-of-the-art performance across multiple datasets. It includes interpretability tools (Grad‑CAM, LIME) and powers a mobile app enabling real-time diet tracking and nutritional analysis. Published in Nutrients (Jan 2025).',
      category: 'AI',
      isFeatured: true,
      image: anXaiImages[0], // Use 1.jpg as thumbnail
      images: anXaiImages,
      technologies: [
        'Python',
        'PyTorch',
        'ResNet-50',
        'Vision Transformer (ViT)',
        'Grad-CAM',
        'LIME',
        'Mobile Integration',
        'Explainable AI',
        'Deep Learning',
        'Computer Vision'
      ],
      github: 'https://pubmed.ncbi.nlm.nih.gov',
      demo: 'https://pmc.ncbi.nlm.nih.gov',
      features: [
        {
          icon: Brain,
          title: 'Hybrid CNN–Transformer Architecture',
          description: 'Combines ResNet-50 for local feature extraction with Vision Transformer for global context.'
        },
        {
          icon: Zap,
          title: 'Explainability & Visualization',
          description: 'Uses Grad-CAM and LIME to visualize model decisions and improve interpretability.'
        },
        {
          icon: Smartphone,
          title: 'Mobile Integration',
          description: 'Deployed in a real-time mobile food-recognition app for diet tracking and nutrition analysis.'
        },
        {
          icon: TrendingUp,
          title: 'State-of-the-Art Results',
          description: 'Outperformed existing methods on five diverse food image datasets.'
        }
      ],
      technicalHighlights: [
        'Hybrid deep-learning model: ResNet-50 backbone + Vision Transformer encoder',
        'Attention-based interpretability with Grad-CAM and LIME',
        'Evaluated on five public food image datasets',
        'Mobile deployment for real-time dietary monitoring',
        'Published in Nutrients (Jan 2025)'
      ],
      impact: 'Demonstrated a practical, explainable AI approach for accurate food recognition, enabling mobile-based nutrition tracking and personalized dietary management.',
      awards: [
        'Peer-reviewed publication in Nutrients (2025)',
        'Deployed in a real-world mobile app',
        'Recognized for explainable AI in nutrition technology'
      ],
      metrics: {
        users: '10,000+',
        rating: '4.9/5',
        retention: '92%',
        countries: '5+'
      }
    },
    {
      id: 5,
      title: 'Advanced Road Accident Analysis Dashboard for Safety Insights',
      description: 'Interactive Tableau dashboard for real-time UK road accident trends, severity metrics, and geospatial safety insights.',
      longDescription: 'Developed an interactive data analytics dashboard using Tableau to deliver a comprehensive, real-time overview of road accident trends, severity metrics, and geographic distribution across the UK. The project integrates advanced visualizations and filters to empower stakeholders—such as policymakers, safety researchers, and transportation authorities—to quickly identify critical patterns and make informed decisions to improve road safety.',
      category: 'Web',
      isFeatured: true,
      image: roadAccidentImages[0],
      images: roadAccidentImages,
      technologies: [
        'Tableau',
        'Python',
        'Pandas',
        'NumPy',
        'SQL',
        'Mapbox',
        'Business Intelligence',
        'Geospatial Analytics'
      ],
      github: '#',
      demo: '#',
      features: [
        {
          icon: TrendingUp,
          title: 'Dynamic Visualizations',
          description: 'Time-series trends, severity breakdowns, and geospatial mapping of accident hotspots.'
        },
        {
          icon: Zap,
          title: 'Interactive Filtering',
          description: 'Drill down by severity, vehicle type, road/weather conditions, and more.'
        },
        {
          icon: Globe,
          title: 'Geospatial Insights',
          description: 'Mapbox-powered accident hotspot mapping for location-based analysis.'
        },
        {
          icon: Brain,
          title: 'Actionable Insights',
          description: 'Highlights contributing factors and supports targeted safety interventions.'
        }
      ],
      technicalHighlights: [
        'Advanced Tableau dashboard development with interactive filters',
        'ETL and data wrangling using Python (Pandas, NumPy) and SQL',
        'Geospatial analytics with Mapbox integration',
        'Business intelligence storytelling and actionable reporting'
      ],
      impact: 'Enabled UK stakeholders to identify accident patterns, prioritize interventions, and support data-driven road safety campaigns.',
      awards: [
        'Showcased as a best practice in data-driven road safety analysis',
        'Recognized for geospatial and BI innovation'
      ],
      metrics: {
        users: 'Analysts',
        rating: 'N/A',
        retention: 'N/A',
        countries: 'UK'
      }
    },
    {
      id: 6,
      title: 'HR Analytics Dashboard for Workforce Insights',
      description: 'Interactive Tableau dashboard for workforce metrics, attrition analysis, and job satisfaction insights.',
      longDescription: 'Developed an interactive HR analytics dashboard in Tableau to provide a data-driven, holistic view of workforce metrics, employee attrition, and job satisfaction. This solution helps HR teams and business leaders understand trends, uncover attrition drivers, and improve retention strategies.',
      category: 'Web',
      isFeatured: true,
      image: hrDashboardImages[0],
      images: hrDashboardImages,
      technologies: [
        'Tableau',
        'Python',
        'Pandas',
        'NumPy',
        'SQL',
        'Business Intelligence',
        'Advanced Analytics'
      ],
      github: '#',
      demo: '#',
      features: [
        {
          icon: TrendingUp,
          title: 'Attrition Metrics',
          description: 'Employee count, attrition rate (16.12%), gender and department-level attrition.'
        },
        {
          icon: Users,
          title: 'Demographics Analysis',
          description: 'Breakdown by age groups, education fields, and department.'
        },
        {
          icon: Brain,
          title: 'Job Satisfaction Matrix',
          description: 'Cross-tab of satisfaction ratings by job role.'
        },
        {
          icon: Zap,
          title: 'Interactive Charts',
          description: 'Attrition trends segmented by gender and age brackets.'
        }
      ],
      technicalHighlights: [
        'Tableau dashboard development with advanced filtering',
        'ETL and data analysis using Python (Pandas, NumPy) and SQL',
        'Attrition rate calculations and satisfaction scoring',
        'Business intelligence and workforce segmentation'
      ],
      impact: 'Empowered HR professionals to analyze workforce dynamics, identify attrition drivers, and implement retention strategies.',
      awards: [
        'Recognized for best practice in HR analytics',
        'Showcased in business intelligence case studies'
      ],
      metrics: {
        users: 'HR Teams',
        rating: 'N/A',
        retention: 'N/A',
        countries: 'N/A'
      }
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Keyboard navigation for image gallery
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedProject || !selectedProject.images || selectedProject.images.length <= 1) return;
      
      if (e.key === 'ArrowLeft' && selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      } else if (e.key === 'ArrowRight' && selectedImageIndex < selectedProject.images.length - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      } else if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedProject, selectedImageIndex]);

  // Add or update the social icons array for the Projects section:
  const socialLinks = [
    { icon: Github, href: 'https://www.researchgate.net/profile/Kintoh-Allen-Nfor', label: 'ResearchGate' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kintoh-allen-nfor-453400125/', label: 'LinkedIn' },
    { icon: Linkedin, href: 'https://orcid.org/0009-0009-9186-8369', label: 'ORCID' },
    { icon: Mail, href: 'mailto:nforallen94@yahoo.com', label: 'Email' },
  ];

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
            <span className="text-[#03B5AA]">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning AI, mobile development, web applications, and research projects.
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>
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
                onClick={() => {
                  setSelectedProject(project);
                  setSelectedImageIndex(0); // Reset to first image when opening project
                }}
              >
                <Card className={`bg-[#023436]/40 backdrop-blur-xl border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 h-full overflow-hidden relative group ${
                  project.isFeatured ? 'border-[#03B5AA]/30 shadow-[#03B5AA]/10' : ''
                }`}>
                  {project.isFeatured && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-[#03B5AA] text-white border-0 shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  <motion.div
                    className="absolute inset-0 bg-[#03B5AA]/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75 ${
                        project.isFeatured ? 'h-56' : 'h-48'
                      }`}
                    />
                    
                    {/* Image Count Badge for Gallery Projects */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1 text-white text-xs font-medium">
                        <Images className="w-3 h-3" />
                        <span>{project.images.length}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center space-y-2"
                      >
                        {project.images && project.images.length > 1 ? (
                          <>
                            <Grid3X3 className="w-12 h-12 text-white drop-shadow-lg" />
                            <div className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                              {project.images.length} Screenshots
                            </div>
                          </>
                        ) : (
                          <>
                            <Eye className="w-12 h-12 text-white drop-shadow-lg" />
                            <div className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                              View Details
                            </div>
                          </>
                        )}
                      </motion.div>
                    </div>
                  </div>
                  
                  <CardHeader className={project.isFeatured ? 'p-5' : ''}>
                    <div className="flex items-center justify-between">
                      <Badge 
                        className="bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300"
                      >
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        {project.playStore && (
                          <motion.a 
                            href={project.playStore}
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 relative z-10"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="Google Play Store"
                          >
                            <Smartphone className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                          </motion.a>
                        )}
                        <motion.a 
                          href={project.github}
                          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 relative z-10"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                        </motion.a>
                        <motion.a 
                          href={project.demo}
                          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 relative z-10"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                        </motion.a>
                      </div>
                    </div>
                    <CardTitle className={`text-white group-hover:text-gray-200 transition-colors relative z-10 ${
                      project.isFeatured ? 'text-lg' : ''
                    }`}>
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className={`space-y-4 ${project.isFeatured ? 'p-5 pt-0' : ''}`}>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    {project.isFeatured && project.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-3">
                        <div className="text-center">
                          <div className="text-xl font-bold text-[#03B5AA]">{project.metrics.users}</div>
                          <div className="text-xs text-gray-400">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-[#03B5AA]">{project.metrics.rating}</div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-[#03B5AA]">{project.metrics.retention}</div>
                          <div className="text-xs text-gray-400">Retention</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-[#03B5AA]">{project.metrics.countries}</div>
                          <div className="text-xs text-gray-400">Countries</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, project.isFeatured ? 6 : 3).map((tech) => (
                        <motion.div
                          key={tech} 
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                          variant="secondary" 
                            className="bg-white/10 text-gray-400 text-xs hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30"
                        >
                          {tech}
                        </Badge>
                        </motion.div>
                      ))}
                      {project.technologies.length > (project.isFeatured ? 6 : 3) && (
                        <Badge 
                          variant="secondary" 
                          className="bg-white/10 text-gray-400 text-xs hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/10"
                        >
                          +{project.technologies.length - (project.isFeatured ? 6 : 3)}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => {
          setSelectedProject(null);
          setSelectedImageIndex(0);
        }}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-[#023436]/95 backdrop-blur-xl border-[#03B5AA]/20">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#03B5AA]/20 text-[#03B5AA] border border-[#03B5AA]/40">
                      {selectedProject.category}
                    </Badge>
                      {selectedProject.isFeatured && (
                        <Badge className="bg-[#03B5AA] text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedProject(null);
                        setSelectedImageIndex(0);
                      }}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <DialogTitle className="text-3xl text-white font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  {/* Image Gallery for FoodiePal */}
                  {selectedProject.images && selectedProject.images.length > 1 ? (
                    <div className="space-y-4">
                      <div className="relative group">
                        <img 
                          src={selectedProject.images[selectedImageIndex]} 
                          alt={`${selectedProject.title} Screenshot ${selectedImageIndex + 1}`}
                          className="w-full h-96 object-contain rounded-lg bg-gray-900"
                        />
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-xl rounded-lg px-3 py-1 text-white text-sm">
                          {selectedImageIndex + 1} / {selectedProject.images.length}
                        </div>
                        
                        {/* Navigation Arrows */}
                        {selectedImageIndex > 0 && (
                          <motion.button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-xl rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#03B5AA]/80"
                            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </motion.button>
                        )}
                        
                        {selectedImageIndex < selectedProject.images.length - 1 && (
                          <motion.button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-xl rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#03B5AA]/80"
                            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </motion.button>
                        )}
                      </div>
                      
                      {/* Image thumbnails - showing all 31 images with pagination */}
                      <div className="space-y-2">
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {selectedProject.images.slice(0, 15).map((image, index) => (
                            <motion.img
                              key={index}
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${
                                selectedImageIndex === index ? 'ring-2 ring-[#03B5AA] opacity-100' : 'opacity-60 hover:opacity-80'
                              }`}
                              onClick={() => setSelectedImageIndex(index)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            />
                          ))}
                        </div>
                        {selectedProject.images.length > 15 && (
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {selectedProject.images.slice(15, 30).map((image, index) => (
                              <motion.img
                                key={index + 15}
                                src={image}
                                alt={`Thumbnail ${index + 16}`}
                                className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${
                                  selectedImageIndex === index + 15 ? 'ring-2 ring-[#03B5AA] opacity-100' : 'opacity-60 hover:opacity-80'
                                }`}
                                onClick={() => setSelectedImageIndex(index + 15)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              />
                            ))}
                            {selectedProject.images.slice(30).map((image, index) => (
                              <motion.img
                                key={index + 30}
                                src={image}
                                alt={`Thumbnail ${index + 31}`}
                                className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${
                                  selectedImageIndex === index + 30 ? 'ring-2 ring-[#03B5AA] opacity-100' : 'opacity-60 hover:opacity-80'
                                }`}
                                onClick={() => setSelectedImageIndex(index + 30)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              />
                            ))}
                          </div>
                        )}
                        <div className="text-center text-sm text-gray-400 mt-2 space-y-1">
                          <div>Showing {selectedProject.images.length} screenshots • Click any thumbnail to view</div>
                          <div className="text-xs opacity-75">Use ← → arrow keys or hover for navigation • ESC to close</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  )}

                  {/* Metrics for Featured Projects */}
                  {selectedProject.metrics && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/20">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#03B5AA] mb-1 whitespace-nowrap" style={{ fontSize: '1.25rem' }}>{selectedProject.metrics.users}</div>
                        <div className="text-sm text-gray-400">Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#03B5AA] mb-1">{selectedProject.metrics.rating}</div>
                        <div className="text-sm text-gray-400">App Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#03B5AA] mb-1">{selectedProject.metrics.retention}</div>
                        <div className="text-sm text-gray-400">Retention Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#03B5AA] mb-1">{selectedProject.metrics.countries}</div>
                        <div className="text-sm text-gray-400">Countries</div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Enhanced Features Section */}
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Zap className="w-6 h-6 mr-2 text-[#03B5AA]" />
                        Key Features
                      </h4>
                      <div className="space-y-4">
                        {selectedProject.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#03B5AA]/30 transition-all duration-300"
                          >
                            {feature.icon && (
                              <div className="p-2 bg-[#03B5AA]/20 rounded-lg mr-4 flex-shrink-0">
                                <feature.icon className="w-5 h-5 text-[#03B5AA]" />
                              </div>
                            )}
                            <div>
                              <h5 className="text-white font-semibold mb-1">{feature.title}</h5>
                              <p className="text-gray-300 text-sm">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies and Technical Highlights */}
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Brain className="w-6 h-6 mr-2 text-[#03B5AA]" />
                        Technologies & Architecture
                      </h4>
                      
                      <div className="space-y-4">
                    <div>
                          <h5 className="text-lg font-semibold text-white mb-3">Tech Stack</h5>
                          <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                                className="bg-[#03B5AA]/10 text-[#03B5AA] border border-[#03B5AA]/30 hover:bg-[#03B5AA]/20 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                        </div>

                        {selectedProject.technicalHighlights && (
                          <div className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/20">
                            <h5 className="text-lg font-semibold text-white mb-3">Technical Highlights</h5>
                            <ul className="space-y-2">
                              {selectedProject.technicalHighlights.map((highlight, index) => (
                                <li key={index} className="text-gray-300 flex items-start text-sm">
                                  <div className="w-2 h-2 bg-[#03B5AA] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedProject.awards && (
                          <div className="p-4 bg-[#03B5AA]/10 backdrop-blur-xl rounded-xl border border-[#03B5AA]/30">
                            <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <Award className="w-5 h-5 mr-2 text-[#03B5AA]" />
                              Awards & Recognition
                            </h5>
                            <ul className="space-y-2">
                              {selectedProject.awards.map((award, index) => (
                                <li key={index} className="text-gray-300 flex items-start text-sm">
                                  <Star className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                  {award}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Impact Section */}
                  {selectedProject.impact && (
                    <div className="p-6 bg-[#03B5AA]/20 backdrop-blur-xl rounded-xl border border-[#03B5AA]/40">
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 text-[#03B5AA]" />
                        Project Impact
                      </h4>
                      <p className="text-gray-200 text-lg leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-white/20">
                    <Button 
                      className="bg-[#03B5AA] hover:bg-[#03B5AA]/80 text-white border-0 shadow-lg hover:shadow-[#03B5AA]/20"
                      asChild
                    >
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-[#03B5AA]/40 text-[#03B5AA] hover:bg-[#03B5AA]/10 hover:border-[#03B5AA]/60 backdrop-blur-xl"
                      asChild
                    >
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>

                    {selectedProject.playStore && (
                      <Button 
                        variant="outline" 
                        className="border-green-500/40 text-green-400 hover:bg-green-500/10 hover:border-green-500/60 backdrop-blur-xl"
                        asChild
                      >
                        <a href={selectedProject.playStore} target="_blank" rel="noopener noreferrer">
                          <Smartphone className="w-4 h-4 mr-2" />
                          Google Play
                        </a>
                      </Button>
                    )}

                    {selectedProject.appStore && (
                      <Button 
                        variant="outline" 
                        className="border-[#FF8552]/40 text-[#FF8552] hover:bg-[#FF8552]/10 hover:border-[#FF8552]/60 backdrop-blur-xl"
                        asChild
                      >
                        <a href={selectedProject.appStore} target="_blank" rel="noopener noreferrer">
                          <Smartphone className="w-4 h-4 mr-2" />
                          App Store
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-[#03B5AA]/20 transition-colors border border-white/20 hover:border-[#03B5AA]/40"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-[#03B5AA]" />
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/17i_BmBR0_M7kWWKZE8eF_xP3AOc7VQ1_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-xl bg-[#03B5AA] text-white font-semibold shadow hover:bg-[#029e93] transition-colors border border-[#03B5AA]/40 ml-2"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
