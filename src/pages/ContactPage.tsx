import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
          Connect with Pynevera
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're a passionate team of student developers and cybersecurity enthusiasts. 
          Have questions, ideas, or want to collaborate? We'd love to hear from you!
        </p>
      </motion.div>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Contact Methods */}
        <Card className="p-6 hover:bg-card/60 transition-colors">
          <Mail className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-xl font-quantico font-bold mb-2">Get in Touch</h3>
          <p className="text-muted-foreground mb-6">
            Email us at:<br />
            <a href="mailto:team@pynevera.com" className="text-accent hover:underline">team@pynevera.com</a>
          </p>
          <p className="text-muted-foreground">
            For collaboration inquiries:<br />
            <a href="mailto:collaborate@pynevera.com" className="text-accent hover:underline">collaborate@pynevera.com</a>
          </p>
        </Card>

        {/* Social Presence */}
        <Card className="p-6 hover:bg-card/60 transition-colors">
          <Globe className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-xl font-quantico font-bold mb-2">Find Us Online</h3>
          <div className="space-y-3">
            <a href="https://twitter.com/pynevera" target="_blank" rel="noopener noreferrer" 
               className="flex items-center text-muted-foreground hover:text-accent transition-colors">
              Twitter: @pynevera
            </a>
            <a href="https://github.com/pynevera" target="_blank" rel="noopener noreferrer"
               className="flex items-center text-muted-foreground hover:text-accent transition-colors">
              GitHub: pynevera
            </a>
            <a href="https://discord.gg/pynevera" target="_blank" rel="noopener noreferrer"
               className="flex items-center text-muted-foreground hover:text-accent transition-colors">
              Discord Community
            </a>
          </div>
        </Card>
      </div>

      {/* About Us */}
      <Card className="p-8 mb-16">
        <h2 className="text-2xl font-orbitron font-bold mb-6">About Pynevera</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-quantico font-bold mb-2">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              Pynevera started as a university project by a group of cybersecurity enthusiasts. 
              Today, we're working to make cybersecurity knowledge accessible to everyone through 
              our platform. We believe in the power of community-driven security awareness and 
              open-source collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-quantico font-bold mb-2">Join Our Mission</h3>
            <p className="text-muted-foreground">
              We're always looking for passionate individuals who want to contribute to our mission 
              of making the digital world safer. Whether you're a student, researcher, or enthusiast, 
              there's a place for you in our community.
            </p>
          </div>
        </div>
      </Card>

      {/* Community Updates */}
      <Card className="p-6 text-center">
        <h3 className="text-xl font-quantico font-bold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground">
          Join our Discord community to stay updated with our latest projects and discussions.<br />
          <span className="text-accent">Coming Soon: Newsletter signup for weekly cybersecurity insights!</span>
        </p>
      </Card>
    </div>
  );
};

export default ContactPage;
