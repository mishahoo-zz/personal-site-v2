import React from 'react';
import Navigation from './Navigation';
import About from './About';
import DesignGrid from './DesignGrid';
import CarouselContainer from './CarouselContainer';
import Footer from './Footer';

const Landing = () => (
  <div>
    <Navigation />
    <About />
    <CarouselContainer />
    <DesignGrid />
    <Footer />
  </div>
);

export default Landing;
