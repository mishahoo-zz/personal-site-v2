import React, { Component } from 'react';
import About from './About';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
