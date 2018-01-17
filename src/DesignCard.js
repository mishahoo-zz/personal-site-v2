import React from 'react';
import './DesignCard.css';

const DesignCard = ({ card }) => (
  <div>
    <img className="card-img" src={card.image} alt="Design Card" />
  </div>
);

export default DesignCard;
