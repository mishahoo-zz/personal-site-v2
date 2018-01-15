import React from 'react';
import './DesignCard.css';

const DesignCard = () => (
  <div className="card">
    <img className="card-img-top" src="https://www.w3schools.com/howto/img_fjords.jpg" alt="Design Image" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
    </div>
  </div>
);

export default DesignCard;
