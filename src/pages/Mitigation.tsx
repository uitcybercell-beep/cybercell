import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Zap, Users, Server, Network, FileText } from 'lucide-react';

import mitigation from '@/assets/mitigation.jpg';

const Mitigation = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const strategies = [
    {
      icon: Shield,
      title: "Defense in Depth",
      category: "Architecture",
      description: "Implement multiple layers of security controls to create a comprehensive defense strategy.",
      techniques: [
        "Network segmentation",
        "Endpoint protection",
        "Application firewalls",
        "Access controls"
      ],
      effectiveness: "95%",
      complexity: "High"
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      category: "Detection",
      description: "Real-time surveillance and analysis of security events across all systems and networks.",
      techniques: [
        "SIEM implementation",
        "Behavioral analytics",
        "Threat hunting",
        "Log correlation"
      ],
      effectiveness: "90%",
      complexity: "Medium"
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      category: "Access Control",
      description: "Never trust, always verify approach to network security and access management.",
      techniques: [
        "Identity verification",
        "Micro-segmentation",
        "Least privilege access",
        "Continuous authentication"
      ],
      effectiveness: "93%",
      complexity: "High"
    },
    {
      icon: Users,
      title: "Security Awareness Training",
      category: "Human Factor",
      description: "Educate employees to become the first line of defense against cyber threats.",
      techniques: [
        "Phishing simulations",
        "Security workshops",
        "Incident reporting",
        "Regular assessments"
      ],
      effectiveness: "85%",
      complexity: "Low"
    },
    {
      icon: Zap,
      title: "Incident Response",
      category: "Recovery",
      description: "Rapid detection, containment, and recovery from security incidents.",
      techniques: [
        "Response playbooks",
        "Forensic analysis",
        "Communication plans",
        "Lessons learned"
      ],
      effectiveness: "88%",
      complexity: "Medium"
    },
    {
      icon: FileText,
      title: "Data Encryption",
      category: "Protection",
      description: "Protect sensitive data through encryption at rest, in transit, and in use.",
      techniques: [
        "AES-256 encryption",
        "Key management",
        "Database encryption",
        "Secure communications"
      ],
      effectiveness: "92%",
      complexity: "Medium"
    }
  ];

  const frameworks = [
    {
      name: "NIST Cybersecurity Framework",
      description: "Comprehensive framework for managing cybersecurity risks",
      pillars: ["Identify", "Protect", "Detect", "Respond", "Recover"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      pillars: ["Risk Assessment", "Controls", "Monitoring", "Improvement"]
    },
    {
      name: "MITRE ATT&CK",
      description: "Knowledge base of adversary tactics and techniques",
      pillars: ["Tactics", "Techniques", "Procedures", "Mitigations"]
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'High': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mitigation})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/60 via-background/70 to-cyber-blue/60" />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <Badge className="mb-6 bg-cyber-green/20 text-cyber-green border-cyber-green/30">
            Mitigation Strategies
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-quantico font-bold mb-6 text-white">
            <span className="gradient-text">Advanced</span> Defense Strategies
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed">
            Comprehensive mitigation strategies and best practices to protect your organization 
            against evolving cyber threats and minimize security risks.
          </p>
        </motion.div>
      </section>

      {/* Mitigation Strategies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-quantico font-bold gradient-text mb-6">
              Core Mitigation Strategies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven security strategies designed to prevent, detect, and respond to cyber threats effectively.
            </p>
          </motion.div>

          <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={contentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass-card border-border/20 h-full magazine-card group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-cyber rounded-lg group-hover:animate-pulse-glow">
                        <strategy.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={getComplexityColor(strategy.complexity)}>
                        {strategy.complexity}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-quantico">{strategy.title}</CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{strategy.effectiveness}</div>
                        <div className="text-xs text-muted-foreground">effective</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 text-xs">
                      {strategy.category}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {strategy.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-cyber-blue">Key Techniques:</h4>
                      <div className="space-y-2">
                        {strategy.techniques.map((technique, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={contentInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: (index * 0.1) + (techIndex * 0.05), duration: 0.3 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-cyber rounded-full" />
                            <span className="text-xs">{technique}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Frameworks */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-quantico font-bold gradient-text mb-6">
              Industry Frameworks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Established frameworks and standards that guide effective cybersecurity implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="glass-card border-border/20 h-full magazine-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-quantico text-center">{framework.name}</CardTitle>
                    <p className="text-muted-foreground text-center text-sm">
                      {framework.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {framework.pillars.map((pillar, pillarIndex) => (
                        <motion.div
                          key={pillarIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: (index * 0.2) + (pillarIndex * 0.1), duration: 0.4 }}
                          className="bg-muted/30 p-3 rounded-lg text-center"
                        >
                          <div className="text-xs font-medium">{pillar}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap 
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center glass-card p-12 rounded-3xl border-border/20"
          >
            <Server className="w-16 h-16 text-cyber-green mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-quantico font-bold gradient-text mb-6">
              Ready to Strengthen Your Defenses?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert guidance on implementing these mitigation strategies 
              tailored to your organization's specific needs and risk profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber px-8 py-4 text-lg hoverable rounded-lg"
              >
                Schedule Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg border border-border/30 hover:bg-muted/20 hoverable rounded-lg transition-colors"
              >
                Download Framework Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>*/}
    </div>
  );
};

export default Mitigation;