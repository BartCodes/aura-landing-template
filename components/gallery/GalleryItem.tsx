import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

export interface GalleryItemProps {
  src: string;
  alt: string;
}

export function GalleryItem({ src, alt }: GalleryItemProps) {
  // Mouse position for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform mouse position into rotation values
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Handle mouse movement for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  // Reset position on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className="overflow-hidden rounded-lg shadow-sm group cursor-pointer"
      variants={itemVariants}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        } 
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="relative aspect-square w-full"
        style={{ 
          transform: "translateZ(20px)",
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        {/* Overlay effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-primary-600/0 z-10"
          whileHover={{ 
            backgroundColor: "rgba(0, 111, 238, 0.15)",
            transition: { duration: 0.3 } 
          }}
        />
        
        {/* Uncommented Image component */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300"
        />
      </motion.div>
    </motion.div>
  );
}

export default GalleryItem; 