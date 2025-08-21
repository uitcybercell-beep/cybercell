import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, ArrowUpRight } from 'lucide-react';

interface MagazineCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  gradient?: string;
  featured?: boolean;
  onClick?: () => void;
}

const MagazineCard = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  image, 
  gradient = 'from-cyber-blue to-cyber-purple',
  featured = false,
  onClick 
}: MagazineCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${featured ? 'md:col-span-2 md:row-span-2' : ''} cursor-pointer`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`magazine-card glass-card border-border/20 group overflow-hidden ${
        featured ? 'h-[500px]' : 'h-[320px]'
      }`}>
        <div className="relative h-full">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Animated Grid Overlay */}
          <div className="cyber-grid opacity-50" />

          {/* Content */}
          <CardContent className="relative h-full p-6 flex flex-col justify-end">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <Badge 
                  variant="secondary" 
                  className="bg-black/20 text-white border-white/20 backdrop-blur-sm"
                >
                  {category}
                </Badge>
                <motion.div
                  className="p-2 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              <h3 className={`font-quantico font-bold text-white mb-3 ${
                featured ? 'text-2xl md:text-3xl' : 'text-lg'
              }`}>
                {title}
              </h3>

              <p className={`text-gray-200 mb-4 ${
                featured ? 'text-base' : 'text-sm'
              }`}>
                {excerpt}
              </p>

              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {readTime} read
              </div>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default MagazineCard;