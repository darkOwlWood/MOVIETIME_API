import React from 'react';
import '../assets/styles/components/Carousel.scss';
import CarouselItem from '../components/CarouselItem';

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="carousel-item-wrapper">
                {
                    Array(10).fill(0).map( (val,ndx) => <CarouselItem key={ndx} />)
                }
            </div>
        </div>
    );
}

export default Carousel;