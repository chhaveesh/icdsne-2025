
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import CallForPapers from '@/components/home/CallForPapers';
import Speakers from '@/components/home/Speakers';
import Schedule from '@/components/home/Schedule';
import Registration from '@/components/home/Registration';
import Contact from '@/components/home/Contact';
import Committees from '@/components/home/Committees';
import ImportantDates from '@/components/home/ImportantDates';

const Index = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Get all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Committees />
        <ImportantDates />
        <CallForPapers />
        <Speakers />
        <Schedule />
        <Registration />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
