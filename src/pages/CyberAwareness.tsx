import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, Lock, AlertTriangle, CheckCircle, Target, ExternalLink } from 'lucide-react';

import cyberAwareness from '@/assets/cyber-awareness.jpg';

const CyberAwareness = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const awarenessTopics = [
    {
      icon: Brain,
      title: "Security Mindset",
      description: "Developing a proactive approach to identifying and mitigating cyber risks in daily operations.",
      points: ["Think before you click", "Verify before you trust", "Question unusual requests"],
      link: "https://www.cisa.gov/cyber-essentials",
      source: "CISA Cyber Essentials"
    },
    {
      icon: Users,
      title: "Human Factor",
      description: "Understanding how social engineering exploits human psychology and building defense mechanisms.",
      points: ["Phishing awareness", "Social engineering tactics", "Incident reporting"],
      link: "https://www.nist.gov/itl/applied-cybersecurity/nice",
      source: "NIST Cybersecurity Workforce Framework"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Implementing best practices for safeguarding sensitive information and maintaining privacy.",
      points: ["Encryption standards", "Access controls", "Data classification"],
      link: "https://www.enisa.europa.eu/topics/data-protection",
      source: "ENISA Data Protection"
    },
    {
      icon: AlertTriangle,
      title: "Threat Recognition",
      description: "Identifying common attack vectors and understanding the indicators of compromise.",
      points: ["Malware signatures", "Suspicious activities", "Network anomalies"],
      link: "https://www.mitre.org/attack",
      source: "MITRE ATT&CK Framework"
    }
  ];

  const principles = [
    {
      icon: CheckCircle,
      title: "Zero Trust",
      description: "Never trust, always verify - implementing comprehensive security validation for every access request."
    },
    {
      icon: Target,
      title: "Defense in Depth",
      description: "Layered security approach with multiple defensive measures to protect against various attack vectors."
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Staying updated with the latest threats, vulnerabilities, and security best practices."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cyberAwareness})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/80 via-background/70 to-cyber-purple/80" />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <Badge className="mb-6 bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30">
            Cyber Awareness
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-quantico font-bold mb-6 text-white">
            Building a <span className="gradient-text">Security-First</span> Culture
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed">
            Empowering individuals and organizations with the knowledge and skills 
            needed to recognize, prevent, and respond to cyber threats effectively.
          </p>
        </motion.div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-quantico font-bold gradient-text mb-6">
              Core Security Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fundamental concepts that form the foundation of effective cybersecurity awareness and practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="glass-card border-border/20 h-full magazine-card">
                  <CardHeader>
                    <div className="p-3 bg-gradient-cyber rounded-lg w-fit mb-4">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-quantico">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Topics */}
      <section ref={contentRef} className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-quantico font-bold gradient-text mb-6">
              Key Awareness Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential knowledge domains every security-conscious individual should master.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {awarenessTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass-card border-border/20 h-full magazine-card hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-cyber rounded-lg">
                        <topic.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-quantico">{topic.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                    <div className="space-y-2">
                      {topic.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-cyber rounded-full" />
                          <span className="text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                    {topic.link && (
                      <div className="mt-4 pt-4 border-t border-border/20">
                        <a
                          href={topic.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-accent hover:underline gap-1 group"
                        >
                          Learn more at {topic.source}
                          <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/*<section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center glass-card p-12 rounded-3xl border-border/20"
          >
            <h3 className="text-3xl md:text-4xl font-quantico font-bold gradient-text mb-6">
              Ready to Enhance Your Security Awareness?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our comprehensive training programs and resources designed to build 
              a strong security culture in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber px-8 py-4 text-lg hoverable rounded-lg"
              >
                Start Training
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg border border-border/30 hover:bg-muted/20 hoverable rounded-lg transition-colors"
              >
                Download Resources
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>*/}
    </div>
  );
};

export default CyberAwareness;