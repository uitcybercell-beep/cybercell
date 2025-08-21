import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MagazineCard from '@/components/MagazineCard';
import { ArrowRight, Shield, Eye, Zap, BookOpen } from 'lucide-react';

import heroCyber from '@/assets/hero-cyber.jpg';
import cyberAwareness from '@/assets/cyber-awareness.jpg';
import cyberThreats from '@/assets/cyber-threats.jpg';
import mitigation from '@/assets/mitigation.jpg';
import references from '@/assets/references.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [gridRef, gridInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const articles = [
    {
      title: "Building Cyber Awareness in the Digital Age",
      excerpt: "Understanding the fundamentals of cybersecurity and developing a security-first mindset in our increasingly connected world.",
      category: "Awareness",
      readTime: "8 min",
      image: cyberAwareness,
      gradient: "from-cyber-blue to-cyber-purple",
      featured: true
    },
    {
      title: "Latest Cyber Threats: 2024 Landscape",
      excerpt: "Comprehensive analysis of emerging threats including AI-powered attacks and zero-day exploits.",
      category: "Threats",
      readTime: "12 min",
      image: cyberThreats,
      gradient: "from-red-500 to-cyber-orange"
    },
    {
      title: "Effective Mitigation Strategies",
      excerpt: "Proven defense mechanisms and best practices for protecting your digital infrastructure.",
      category: "Mitigation",
      readTime: "10 min",
      image: mitigation,
      gradient: "from-cyber-green to-cyber-blue"
    },
    {
      title: "Essential Security References",
      excerpt: "Curated collection of frameworks, standards, and resources for cybersecurity professionals.",
      category: "References",
      readTime: "6 min",
      image: references,
      gradient: "from-cyber-purple to-cyber-pink"
    }
  ];

  const stats = [
    { icon: Shield, number: "2.5M+", label: "Threats Blocked" },
    { icon: Eye, number: "150+", label: "Articles Published" },
    { icon: Zap, number: "99.9%", label: "Uptime" },
    { icon: BookOpen, number: "50k+", label: "Readers" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCyber})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/80 via-background/60 to-cyber-blue/80" />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 100 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-6xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-quantico font-bold mb-8"
          >
            <span className="gradient-text">Cyber</span>
            <span className="text-white">Security</span>
            <br />
            <span className="neon-text">Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Navigate the evolving cybersecurity landscape with cutting-edge insights, 
            threat intelligence, and expert-curated defense strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="btn-cyber text-lg px-8 py-6 hoverable"
              onClick={() => navigate('/cyber-awareness')}
            >
              Explore Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hoverable"
              onClick={() => navigate('/recent-threats')}
            >
              Latest Threats
            </Button>
          </motion.div>

          {/* Quick Access Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            <Button
              variant="ghost"
              className="glass-card p-6 h-auto flex flex-col items-center text-center gap-4 hover:bg-white/5"
              onClick={() => navigate('/cyber-awareness#basics')}
            >
              <Shield className="w-8 h-8 text-cyber-blue" />
              <div>
                <h3 className="font-quantico text-lg mb-2">Security Basics</h3>
                <p className="text-sm text-muted-foreground">Essential cybersecurity fundamentals</p>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="glass-card p-6 h-auto flex flex-col items-center text-center gap-4 hover:bg-white/5"
              onClick={() => navigate('/recent-threats#analysis')}
            >
              <Eye className="w-8 h-8 text-cyber-purple" />
              <div>
                <h3 className="font-quantico text-lg mb-2">Threat Analysis</h3>
                <p className="text-sm text-muted-foreground">Current threat landscape</p>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="glass-card p-6 h-auto flex flex-col items-center text-center gap-4 hover:bg-white/5"
              onClick={() => navigate('/mitigation#strategies')}
            >
              <Zap className="w-8 h-8 text-cyber-pink" />
              <div>
                <h3 className="font-quantico text-lg mb-2">Defense Strategies</h3>
                <p className="text-sm text-muted-foreground">Protection techniques</p>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="glass-card p-6 h-auto flex flex-col items-center text-center gap-4 hover:bg-white/5"
              onClick={() => navigate('/references#frameworks')}
            >
              <BookOpen className="w-8 h-8 text-cyber-green" />
              <div>
                <h3 className="font-quantico text-lg mb-2">Resources</h3>
                <p className="text-sm text-muted-foreground">Tools and references</p>
              </div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-3 h-3 bg-cyber-blue rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-2 h-2 bg-cyber-pink rounded-full blur-sm"
        />
      </section>

      {/* Stats Section with Trending Topics */}
      <section className="py-20 relative">
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Stats Grid */}
            <div>
              <h2 className="text-3xl font-quantico font-bold gradient-text mb-8">Impact Metrics</h2>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center glass-card p-6 rounded-2xl"
                  >
                    <div className="inline-flex p-3 bg-gradient-cyber rounded-full mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-quantico font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div>
              <h2 className="text-3xl font-quantico font-bold gradient-text mb-8">Trending Topics</h2>
              <div className="space-y-6">
                <motion.a
                  onClick={() => navigate('/cyber-awareness#ai-security')}
                  style={{ cursor: 'pointer' }}
                  className="block glass-card p-6 rounded-2xl group hover:bg-white/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={statsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-quantico mb-2 group-hover:text-cyber-blue transition-colors">
                        AI in Cybersecurity
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Machine learning applications in threat detection and response
                      </p>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  onClick={() => navigate('/recent-threats#zero-day')}
                  style={{ cursor: 'pointer' }}
                  className="block glass-card p-6 rounded-2xl group hover:bg-white/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={statsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-cyber-orange rounded-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-quantico mb-2 group-hover:text-cyber-blue transition-colors">
                        Zero-Day Exploits
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Analysis of recently discovered vulnerabilities
                      </p>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  onClick={() => navigate('/mitigation#cloud-security')}
                  style={{ cursor: 'pointer' }}
                  className="block glass-card p-6 rounded-2xl group hover:bg-white/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={statsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-quantico mb-2 group-hover:text-cyber-blue transition-colors">
                        Cloud Security
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Best practices for securing cloud infrastructure
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Magazine Grid */}
      <section className="py-20 bg-muted/5">
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          className="container mx-auto px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-quantico font-bold gradient-text mb-6">
              Latest Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of emerging threats with our expert analysis and comprehensive security insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <MagazineCard
                  {...article}
                  onClick={() => {
                    const paths = {
                      'Awareness': '/cyber-awareness',
                      'Threats': '/recent-threats',
                      'Mitigation': '/mitigation',
                      'References': '/references'
                    };
                    navigate(paths[article.category]);
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <Button 
              variant="ghost" 
              size="lg" 
              className="glass-card px-8 py-6 group"
              onClick={() => navigate('/references')}
            >
              View All Resources
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;