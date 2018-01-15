import React, { Component } from 'react';
import Navigation from './Navigation';
import About from './About';
import DesignGrid from './DesignGrid';
import CarouselContainer from './CarouselContainer';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <CarouselContainer />
        <DesignGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
