import React from 'react';
import { Navbar, Grid } from 'react-bootstrap';

const Navigation = () => (
  <div>
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Misha Hoo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
  </div>
);

export default Navigation;
