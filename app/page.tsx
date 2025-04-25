"use client";

import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Gallery from '@/components/gallery/Gallery';
import ContactForm from '@/components/contact/ContactForm';
import { Element } from 'react-scroll';

export default function Home() {
  return (
    <>
      <Element name="hero" className="h-[calc(100vh-64px)]">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="contact">
        <ContactForm />
      </Element>
    </>
  );
}
