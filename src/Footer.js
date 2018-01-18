import React from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <div>
    <Navbar fixedBottom className="footer">
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Footer</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
  </div>
);

export default Footer;
