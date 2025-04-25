"use client";

import React from 'react';
import { Button } from "@heroui/button";
import { Link as ScrollLink } from 'react-scroll';
import { SparklesCore } from './SparklesCore';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="h-full flex items-center relative overflow-hidden bg-gradient-to-br from-background to-primary-50/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          particleColor="#5F8DDA"
          particleDensity={100}
          speed={1.5}
          className="w-full h-full"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 z-10 relative">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transform Your Digital Experience with <span className="text-primary">Aura</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-content3-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A powerful platform designed to elevate your online presence with stunning visuals and seamless performance.
          </motion.p>
          
          <motion.div 
            className="mt-4 space-x-4 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                as={ScrollLink}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                color="primary"
                size="lg"
                className="cursor-pointer"
              >
                Get Started
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                as={ScrollLink}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                variant="light"
                color="primary"
                className="cursor-pointer"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
