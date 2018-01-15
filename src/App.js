import React, { Component } from 'react';
import About from './About';
import DesignGrid from './DesignGrid';
import CarouselContainer from './CarouselContainer';
import Test from './Test';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <CarouselContainer />
        <DesignGrid />
        <Test />
        <Footer />
      </div>
    );
  }
}

export default App;
