import React from 'react';
import DesignCard from './DesignCard';
import data from './data';
import './DesignGrid.css';

const DesignGrid = () => (
  <div id="design-grid" className="container">
    {data.map(card => <DesignCard key={card.title} card={card} />)}
  </div>
);

export default DesignGrid;
