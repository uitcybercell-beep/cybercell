import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-auto border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Developed by</span>
            <div className="flex items-center gap-2">
              <img 
                src="assets/logo.png" 
                alt="Pynevera Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-quantico text-accent text-lg">Pynevera</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
