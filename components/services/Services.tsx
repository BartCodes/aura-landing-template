import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and applications built with modern frameworks and best practices for performance and accessibility.',
      icon: 'code',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances usability while creating beautiful, intuitive interfaces that engage your audience.',
      icon: 'design',
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your digital products with our optimization services, ensuring fast load times and smooth interactions.',
      icon: 'performance',
    },
    {
      title: 'Security Solutions',
      description: 'Protect your business with robust security measures and regular audits to safeguard your data and systems.',
      icon: 'security',
    },
    {
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with our comprehensive analytics solutions that provide actionable insights.',
      icon: 'analytics',
    },
    {
      title: 'Mobile Development',
      description: 'Responsive and native mobile applications that deliver an exceptional user experience across all devices.',
      icon: 'mobile',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.section 
      id="services" 
      className="py-16 md:py-24 bg-neutral-50"
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
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon as 'code' | 'design' | 'performance' | 'security' | 'analytics' | 'mobile'}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services; 