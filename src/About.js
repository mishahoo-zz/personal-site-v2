import React from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import './About.css';

const About = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          <Button
            bsStyle="success"
            bsSize="large"
            href="http://react-bootstrap.github.io/components.html"
            target="_blank"
          >
            View React Bootstrap Docs
          </Button>
        </p>
      </Grid>
    </Jumbotron>
  </div>
);

export default About;

// <div className="about-container jumbotron">
//     <div className="container">
//       <h1>Hello</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
//         laborum.
//       </p>
//     </div>
//   </div>
