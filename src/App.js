import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import Project from './Project';
import Footer from './Footer';
import './App.css';

const fourOhFour = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/project" component={Project} />
            <Route component={fourOhFour} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
