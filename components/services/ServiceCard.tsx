import React from 'react';
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: 'code' | 'design' | 'performance' | 'security' | 'analytics' | 'mobile';
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // Mouse position tracking for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const renderIcon = () => {
    switch (icon) {
      case 'code':
        return <CodeBracketIcon className="w-10 h-10 text-primary-600" />;
      case 'design':
        return <PaintBrushIcon className="w-10 h-10 text-primary-600" />;
      case 'performance':
        return <RocketLaunchIcon className="w-10 h-10 text-primary-600" />;
      case 'security':
        return <ShieldCheckIcon className="w-10 h-10 text-primary-600" />;
      case 'analytics':
        return <ChartBarIcon className="w-10 h-10 text-primary-600" />;
      case 'mobile':
        return <DevicePhoneMobileIcon className="w-10 h-10 text-primary-600" />;
      default:
        return <CodeBracketIcon className="w-10 h-10 text-primary-600" />;
    }
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
      }
    }
  };

  return (
    <motion.div 
      className="relative bg-white dark:bg-content1 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm overflow-hidden"
      variants={itemVariants}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 15 
        }
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight gradient effect (adapted from Aceternity UI) */}
      <motion.div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 111, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <motion.div 
        className="mb-4 relative z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
      >
        {renderIcon()}
      </motion.div>
      
      <motion.h3 
        className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100 relative z-10"
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-neutral-600 dark:text-neutral-300 relative z-10"
      >
        {description}
      </motion.p>

      {/* Bottom gradient line that appears on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default ServiceCard; 