"use client";

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Parcours from '../components/Parcours';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Parcours />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}