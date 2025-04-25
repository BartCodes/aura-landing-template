"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@heroui/button";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const menuItems = [
    { name: 'Home', href: 'hero', offset: 0 },
    { name: 'About', href: 'about', offset: -64 },
    { name: 'Services', href: 'services', offset: -64 },
    { name: 'Gallery', href: 'gallery', offset: -64 },
    { name: 'Contact', href: 'contact', offset: -64 },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      handleLinkClick();
    }
  };

  // Mobile home click handler - directly scrolls to the very top
  const handleMobileHomeClick = () => {
    setIsMenuOpen(false); // First close the menu
    
    // Use setTimeout to ensure menu closing animation completes before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <>
      {/* Backdrop overlay with reduced blur effect */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={toggleMenu}
        />
      )}
      
      <header className="bg-background/95 backdrop-blur-md shadow-sm fixed top-0 z-50 w-full max-w-[100vw] box-border">
        <div className="max-w-7xl mx-auto px-4 w-full box-border">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-inherit flex items-center" onClick={handleHomeClick}>
                <div className="w-10 h-10 mr-3 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                  <span className="text-lg font-bold">A</span>
                </div>
                <p className="font-bold text-xl">AURA</p>
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden sm:flex items-center space-x-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.name === 'Home' ? (
                    <Link 
                      href="/" 
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                      onClick={handleHomeClick}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <ScrollLink 
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      className="cursor-pointer text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </ScrollLink>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden sm:block">
              <motion.div
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  as={ScrollLink} 
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  color="primary"
                  className="cursor-pointer"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md hover:cursor-pointer transition-colors"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <motion.svg 
                  className="w-6 h-6 text-foreground" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {/* Hamburger Icon */}
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: isMenuOpen ? 0 : 1,
                      y: isMenuOpen ? -4 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16"
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: isMenuOpen ? 0 : 1,
                      x: isMenuOpen ? 8 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h16"
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: isMenuOpen ? 0 : 1,
                      y: isMenuOpen ? 4 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Close Icon */}
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 6l12 12"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="sm:hidden bg-background/95 backdrop-blur-md overflow-hidden w-full box-border"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { duration: 0.3, ease: "easeOut" }, 
                opacity: { duration: 0.2, delay: 0.1 }
              }
            },
            closed: { 
              height: 0, 
              opacity: 0,
              transition: { 
                height: { duration: 0.3, ease: "easeIn" }, 
                opacity: { duration: 0.2 }
              }
            }
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 w-full box-border">
            {menuItems.map((item) => (
              <div key={item.name} className="block py-2 w-full">
                {item.name === 'Home' ? (
                  <button 
                    className="text-left cursor-pointer text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full"
                    onClick={handleMobileHomeClick}
                  >
                    {item.name}
                  </button>
                ) : (
                  <ScrollLink 
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    className="cursor-pointer text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </div>
            ))}
            <div className="block py-2">
              <motion.div
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  as={ScrollLink}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  color="primary"
                  className="w-full cursor-pointer"
                  onPress={handleLinkClick}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}

export default Navbar;
