import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { CarouselItem } from 'react-bootstrap';
import m1 from '../image/m1.jpeg';
import m3 from '../image/m3.webp';
import m7 from '../image/m7.webp';
import border from '../image/border.png';

import './Carosuel.css';
export default function Slider() {
  return (
    <div>
        <div>
          <Carousel className='cro_image'>
              <CarouselItem>
                  <img src = {m1} alt = "slide 1"></img>
              </CarouselItem>
              <CarouselItem>
                <img src = {m3}  alt = "slide 2"></img>
              </CarouselItem>
              <CarouselItem>
                <img src = {m7}  alt = "slide 3"></img>
              </CarouselItem>

          </Carousel>
        </div>

        <div className="imgDiv">
          <img src={border} alt="Heart Border"/>
      </div>
    </div>
  );
}
