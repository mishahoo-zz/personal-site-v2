import React from 'react';
import DesignCard from './DesignCard';
import data from './data';
import { Grid, Jumbotron } from 'react-bootstrap';
import './DesignGrid.css';

const DesignGrid = () => (
  <Jumbotron>
    <Grid>
      <h1 id="design-title">Design</h1>
      <div id="design-grid" className="container">
        {data.map(card => <DesignCard key={card.title} card={card} />)}
      </div>
    </Grid>
  </Jumbotron>
);

export default DesignGrid;
