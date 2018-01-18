import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import Project from './Project';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Landing} />
          <Route exact path="/project" component={Project} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
