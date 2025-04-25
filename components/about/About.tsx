import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image Column */}
          <motion.div 
            className="order-2 md:order-1 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image 
              src="/assets/images/about.png"
              alt="About Aura"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-primary-600">Aura</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-neutral-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                Aura was founded with a simple yet powerful mission: to help businesses create stunning digital experiences that drive growth and engagement.
              </p>
              
              <p>
                Our team of experts combines technical excellence with creative design to deliver solutions that not only look beautiful but perform exceptionally well.
              </p>
              
              <p>
With years of experience in digital transformation, we&apos;ve helped companies of all sizes reimagine their online presence and achieve remarkable results.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">Our Vision</h3>
                <p className="mt-2 text-neutral-600">
                  A world where every brand can express its unique story through captivating digital experiences.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">Our Approach</h3>
                <p className="mt-2 text-neutral-600">
                  Human-centered design combined with cutting-edge technology for results that matter.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}

export default About;
