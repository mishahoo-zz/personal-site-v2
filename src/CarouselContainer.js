import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselContainer = () => (
  <Carousel>
    <div>
      <img src="http://moziru.com/images/sphere-clipart-big-and-small-10.png" alt="balls" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="http://moziru.com/images/sphere-clipart-big-and-small-10.png" alt="balls" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="http://moziru.com/images/sphere-clipart-big-and-small-10.png" alt="balls" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);

export default CarouselContainer;
