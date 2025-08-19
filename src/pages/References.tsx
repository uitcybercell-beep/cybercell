import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink, Download, Star, Clock, Users } from 'lucide-react';

import references from '@/assets/references.jpg';

const References = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const resourceCategories = [
    {
      title: "Standards & Frameworks",
      icon: BookOpen,
      color: "from-cyber-blue to-cyber-purple",
      resources: [
        {
          title: "NIST Cybersecurity Framework 2.0",
          description: "Comprehensive framework for managing cybersecurity risks",
          type: "Framework",
          rating: 5,
          lastUpdated: "2024",
          url: "https://nist.gov/cyberframework"
        },
        {
          title: "ISO/IEC 27001:2022",
          description: "International standard for information security management systems",
          type: "Standard",
          rating: 5,
          lastUpdated: "2022",
          url: "https://iso.org/27001"
        },
        {
          title: "CIS Controls v8",
          description: "Prioritized set of actions for cyber defense",
          type: "Controls",
          rating: 4,
          lastUpdated: "2021",
          url: "https://cisecurity.org/controls"
        }
      ]
    },
    {
      title: "Threat Intelligence",
      icon: ExternalLink,
      color: "from-red-500 to-orange-500",
      resources: [
        {
          title: "MITRE ATT&CK Framework",
          description: "Knowledge base of adversary tactics and techniques",
          type: "Knowledge Base",
          rating: 5,
          lastUpdated: "2024",
          url: "https://attack.mitre.org"
        },
        {
          title: "CISA Cybersecurity Advisories",
          description: "Government-issued security alerts and advisories",
          type: "Alerts",
          rating: 5,
          lastUpdated: "Daily",
          url: "https://cisa.gov/cybersecurity-advisories"
        },
        {
          title: "OWASP Top 10",
          description: "Most critical web application security risks",
          type: "Guide",
          rating: 5,
          lastUpdated: "2021",
          url: "https://owasp.org/top10"
        }
      ]
    },
    {
      title: "Training & Certification",
      icon: Users,
      color: "from-cyber-green to-cyber-blue",
      resources: [
        {
          title: "SANS Training Programs",
          description: "Professional cybersecurity training and certification",
          type: "Training",
          rating: 5,
          lastUpdated: "2024",
          url: "https://sans.org"
        },
        {
          title: "Cybrary Free Courses",
          description: "Free cybersecurity training and career development",
          type: "Courses",
          rating: 4,
          lastUpdated: "2024",
          url: "https://cybrary.it"
        },
        {
          title: "EC-Council Certifications",
          description: "Ethical hacking and security professional certifications",
          type: "Certification",
          rating: 4,
          lastUpdated: "2024",
          url: "https://eccouncil.org"
        }
      ]
    },
    {
      title: "Tools & Resources",
      icon: Download,
      color: "from-purple-500 to-pink-500",
      resources: [
        {
          title: "Nmap Network Scanner",
          description: "Free and open source network discovery and security auditing",
          type: "Tool",
          rating: 5,
          lastUpdated: "2024",
          url: "https://nmap.org"
        },
        {
          title: "Wireshark Protocol Analyzer",
          description: "World's foremost network protocol analyzer",
          type: "Tool",
          rating: 5,
          lastUpdated: "2024",
          url: "https://wireshark.org"
        },
        {
          title: "YARA Pattern Matching",
          description: "Tool for malware identification and classification",
          type: "Tool",
          rating: 4,
          lastUpdated: "2024",
          url: "https://virustotal.github.io/yara"
        }
      ]
    }
  ];

  const essentialReads = [
    {
      title: "The Art of Deception",
      author: "Kevin Mitnick",
      description: "Social engineering techniques and human-based attacks",
      category: "Social Engineering"
    },
    {
      title: "Practical Malware Analysis",
      author: "Michael Sikorski",
      description: "Hands-on guide to malware analysis and reverse engineering",
      category: "Malware Analysis"
    },
    {
      title: "Blue Team Handbook",
      author: "Don Murdoch",
      description: "Incident response edition for security professionals",
      category: "Incident Response"
    },
    {
      title: "Hacking: The Art of Exploitation",
      author: "Jon Erickson",
      description: "Programming fundamentals for ethical hackers",
      category: "Ethical Hacking"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${references})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/60 via-background/70 to-cyber-pink/60" />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <Badge className="mb-6 bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30">
            References & Resources
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-white">
            <span className="gradient-text">Essential</span> Security Resources
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed">
            Curated collection of frameworks, standards, tools, and educational resources 
            for cybersecurity professionals and organizations.
          </p>
        </motion.div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
              Resource Library
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive collection of cybersecurity resources organized by category for easy access.
            </p>
          </motion.div>

          <div ref={contentRef} className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-lg mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold gradient-text">
                    {category.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resourceIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={contentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (resourceIndex * 0.1), 
                        duration: 0.5 
                      }}
                    >
                      <Card className="glass-card border-border/20 h-full magazine-card group">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs">
                              {resource.type}
                            </Badge>
                            <div className="flex items-center space-x-1">
                              {renderStars(resource.rating)}
                            </div>
                          </div>
                          <CardTitle className="text-lg font-orbitron group-hover:text-cyber-blue transition-colors">
                            {resource.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {resource.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>Updated {resource.lastUpdated}</span>
                            </div>
                            <motion.a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hoverable flex items-center space-x-1 text-cyber-blue hover:text-cyber-purple transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Visit</span>
                              <ExternalLink className="w-3 h-3" />
                            </motion.a>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Reading */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
              Essential Reading
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Must-read books that every cybersecurity professional should have in their library.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {essentialReads.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass-card border-border/20 magazine-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-cyber rounded-lg flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-orbitron font-semibold mb-1 group-hover:text-cyber-blue transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
                        <p className="text-sm leading-relaxed mb-3">{book.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {book.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Contribution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center glass-card p-12 rounded-3xl border-border/20"
          >
            <BookOpen className="w-16 h-16 text-cyber-purple mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-6">
              Contribute to Our Resource Library
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help expand our collection by suggesting valuable resources, tools, 
              or publications that benefit the cybersecurity community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber px-8 py-4 text-lg hoverable rounded-lg"
              >
                Submit Resource
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg border border-border/30 hover:bg-muted/20 hoverable rounded-lg transition-colors"
              >
                Request Addition
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default References;