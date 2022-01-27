import React from 'react';
import * as RB from 'react-bootstrap'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'

export default function Slider() {
  return (
  <div>
    <RB.Carousel>
  <RB.Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <RB.Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </RB.Carousel.Caption>
  </RB.Carousel.Item>
  <RB.Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <RB.Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </RB.Carousel.Caption>
  </RB.Carousel.Item>
  <RB.Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />

    <RB.Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </RB.Carousel.Caption>
  </RB.Carousel.Item>
</RB.Carousel>
  </div>
  );
}
