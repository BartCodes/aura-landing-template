import React from 'react';
import GalleryItem from './GalleryItem';
import { motion } from 'framer-motion';

export function Gallery() {
  const galleryItems = [
    {
      src: '/assets/images/gallery_1.png',
      alt: 'Modern website design for a tech company',
    },
    {
      src: '/assets/images/gallery_2.png',
      alt: 'Mobile app interface for a fitness application',
    },
    {
      src: '/assets/images/gallery_3.png',
      alt: 'E-commerce platform with seamless checkout flow',
    },
    {
      src: '/assets/images/gallery_4.png',
      alt: 'Dashboard design for analytics platform',
    },
    {
      src: '/assets/images/gallery_5.png',
      alt: 'Branding materials for startup business',
    },
    {
      src: '/assets/images/gallery_6.png',
      alt: 'Social media app with engaging features',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      id="gallery" 
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Our <span className="text-primary-600">Work</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects delivered for clients across various industries.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Gallery; 