import React from 'react';
import DesignCard from './DesignCard';
import data from './data';

const DesignGrid = () => (
  <div className="container col-md-8">{data.map(card => <DesignCard key={card.title} card={card} />)}</div>
);

export default DesignGrid;
