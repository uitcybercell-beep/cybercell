import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Zap, Cpu, Wifi, Bot, Globe } from 'lucide-react';

import cyberThreats from '@/assets/cyber-threats.jpg';

const RecentThreats = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const threats = [
    {
      icon: Bot,
      title: "AI-Powered Attacks",
      severity: "Critical",
      description: "Advanced machine learning algorithms being used to automate and enhance cyber attacks, making them more sophisticated and harder to detect.",
      impact: "Automated phishing, deepfake fraud, intelligent malware",
      trend: "↗️ 340% increase",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Zero-Day Exploits",
      severity: "High",
      description: "Previously unknown vulnerabilities being weaponized faster than ever, with exploit kits becoming more accessible.",
      impact: "System compromise, data breaches, privilege escalation",
      trend: "↗️ 85% increase",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Supply Chain Attacks",
      severity: "Critical",
      description: "Targeting third-party vendors and software dependencies to gain access to multiple organizations simultaneously.",
      impact: "Widespread compromise, trusted software corruption",
      trend: "↗️ 200% increase",
      color: "from-red-600 to-red-400"
    },
    {
      icon: Wifi,
      title: "IoT Botnets",
      severity: "Medium",
      description: "Compromised Internet of Things devices being leveraged for large-scale DDoS attacks and cryptocurrency mining.",
      impact: "Network disruption, resource theft, privacy violation",
      trend: "↗️ 120% increase",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: Cpu,
      title: "Ransomware-as-a-Service",
      severity: "Critical",
      description: "Sophisticated ransomware operations being offered as subscription services, lowering the barrier for cybercriminals.",
      impact: "Business disruption, data encryption, financial loss",
      trend: "↗️ 180% increase",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: AlertTriangle,
      title: "Cloud Misconfigurations",
      severity: "High",
      description: "Improperly configured cloud services exposing sensitive data and creating entry points for attackers.",
      impact: "Data exposure, unauthorized access, compliance violations",
      trend: "↗️ 150% increase",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'High': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cyberThreats})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/60 via-background/70 to-orange-500/60" />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <Badge className="mb-6 bg-red-500/20 text-red-400 border-red-500/30">
            Recent Threats
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-white">
            <span className="gradient-text">Emerging</span> Cyber Threats
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed">
            Stay informed about the latest cybersecurity threats, attack vectors, 
            and emerging risks that pose significant challenges to organizations worldwide.
          </p>
        </motion.div>
      </section>

      {/* Threat Intelligence Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
              Threat Intelligence Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time analysis of the most significant cyber threats currently impacting organizations globally.
            </p>
          </motion.div>

          <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={contentInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="glass-card border-border/20 h-full magazine-card relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${threat.color} opacity-5`} />
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${threat.color} rounded-lg`}>
                        <threat.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={getSeverityColor(threat.severity)}>
                        {threat.severity}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-orbitron">{threat.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {threat.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-cyber-blue">Impact:</h4>
                        <p className="text-xs text-muted-foreground">{threat.impact}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border/20">
                        <span className="text-xs text-muted-foreground">Trend:</span>
                        <span className="text-xs font-mono text-green-400">{threat.trend}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    whileHover={{ opacity: 0.1 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Timeline */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
              Attack Evolution Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding how cyber threats have evolved and adapted over recent months.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cyber opacity-30" />
              
              {[
                { month: "Dec 2024", event: "AI-powered phishing campaigns surge", impact: "340% increase in detection difficulty" },
                { month: "Nov 2024", event: "Supply chain attacks target CI/CD pipelines", impact: "Major cloud providers affected" },
                { month: "Oct 2024", event: "Ransomware groups adopt RaaS model", impact: "Lower barrier to entry for attackers" },
                { month: "Sep 2024", event: "Zero-day exploits in popular frameworks", impact: "Millions of applications vulnerable" },
                { month: "Aug 2024", event: "IoT botnet reaches 2M+ devices", impact: "Record-breaking DDoS attacks launched" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative flex items-center mb-12"
                >
                  <div className="w-16 h-16 bg-gradient-cyber rounded-full flex items-center justify-center text-white font-mono text-xs mr-8 relative z-10">
                    {item.month.split(' ')[0]}
                  </div>
                  <div className="flex-1 glass-card p-6 rounded-lg border-border/20">
                    <h3 className="font-orbitron font-semibold text-lg mb-2">{item.event}</h3>
                    <p className="text-muted-foreground text-sm">{item.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center glass-card p-12 rounded-3xl border-red-500/20 bg-red-500/5"
          >
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-red-400 mb-6">
              Critical Alert: Stay Vigilant
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Current threat levels are elevated. Implement additional security measures 
              and ensure your incident response plans are updated and tested.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg hoverable rounded-lg transition-colors"
              >
                View Security Alerts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg border border-border/30 hover:bg-muted/20 hoverable rounded-lg transition-colors"
              >
                Contact Security Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecentThreats;