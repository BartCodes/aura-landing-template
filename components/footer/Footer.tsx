"use client";

import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'X', url: 'https://x.com/' },
    { name: 'LinkedIn', url: 'https://linkedin.com/' },
    { name: 'GitHub', url: 'https://github.com/' },
    { name: 'Instagram', url: 'https://instagram.com/' },
  ];

  return (
    <footer className="bg-background border-t border-default-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
              <span className="text-lg font-bold">A</span>
            </div>
            <p className="font-bold text-xl text-foreground">AURA</p>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-content3-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-content3-foreground hover:text-primary transition-colors"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-content3-foreground hover:text-primary transition-colors"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-content3-foreground hover:text-primary transition-colors"
            >
              Contact
            </ScrollLink>
          </nav>
          
          <div className="text-sm text-content3-foreground">
            © {currentYear} AURA. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <SocialIcon 
                key={link.name}
                url={link.url}
                style={{ height: 40, width: 40 }}
                bgColor="white"
                fgColor="var(--primary)"
                className="hover:opacity-80 transition-opacity duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-default-200 text-center text-sm text-content3-foreground">
          <p>Designed and built by <Link href="https://github.com/BartCodes" className="text-primary hover:text-primary/80 transition-colors">BartCodes</Link></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
