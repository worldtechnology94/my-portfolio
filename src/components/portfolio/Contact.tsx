import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nforallen94@yahoo.com',
      href: 'mailto:nforallen94@yahoo.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+8201021419930',
      href: 'tel:+8201021419930',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gimhae, South Korea',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://www.researchgate.net/profile/Kintoh-Allen-Nfor', label: 'ResearchGate', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kintoh-allen-nfor-453400125/', label: 'LinkedIn', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://orcid.org/0009-0009-9186-8369', label: 'ORCID', color: 'hover:text-white' },
    { icon: Twitter, href: '#', label: 'Google Scholar', color: 'hover:text-white' },
    { icon: Mail, href: 'mailto:nforallen94@yahoo.com', label: 'Email', color: 'hover:text-white' },
  ];

  return (
    <section id="contact" className="relative">
      {/* Let's Connect Intro - White Background */}
      <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#03B5AA]">
              Let's Connect
            </span>
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and explore how we can create something amazing together.
          </p>
        </motion.div>
        </div>
      </div>

      {/* Contact Form and Info - Dark Background */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <Card className="bg-[#023436]/40 backdrop-blur-xl border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              <CardHeader>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <CardTitle className="text-2xl text-white relative z-10">Send a Message</CardTitle>
                  <CardDescription className="text-gray-400 relative z-10">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                          className="bg-[#03B5AA]/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#03B5AA]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                          className="bg-[#03B5AA]/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#03B5AA]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                        className="bg-[#03B5AA]/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#03B5AA]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={6}
                        className="bg-[#03B5AA]/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 resize-none backdrop-blur-xl"
                    />
                  </div>
                  
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                      className="w-full bg-[#03B5AA]/10 backdrop-blur-xl hover:bg-[#03B5AA]/20 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-500 border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    {isSubmitting ? (
                        <div className="flex items-center relative z-10">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                        <span className="flex items-center relative z-10">
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                        </span>
                    )}
                  </Button>
                    </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
              {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block group"
                >
                    <Card className="bg-[#023436]/40 backdrop-blur-sm border-white/10 hover:border-[#03B5AA]/50 transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-[#03B5AA] group-hover:from-[#03B5AA]/80 group-hover:to-[#FF8552] transition-all duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold group-hover:text-[#03B5AA] transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-gray-300">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Schedule a Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
                <Card className="bg-[#023436]/50 border-[#03B5AA]/30 hover:border-[#03B5AA]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-[#03B5AA] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Schedule a Call</h3>
                  <p className="text-gray-300 mb-4">
                    Prefer to talk? Book a 30-minute call to discuss your project in detail.
                  </p>
                    <Button className="bg-[#03B5AA] hover:from-[#03B5AA]/80 hover:to-[#FF8552]">
                    Book a Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Connect on Social</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className={`p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group ${color}`}
                    whileHover={{ y: -5 }}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-inherit transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
