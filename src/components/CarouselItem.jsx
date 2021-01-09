import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import play from '../assets/static/play.png';
import plus from '../assets/static/plus.png';
import minus from '../assets/static/minus.png';

const CarouselItem = () => {

    return (
        <div className="carousel-item">
            <div className="carousel-item__info">
                <div className="carousel-item__info__icons">
                    <img src={play} alt="play icon"/>
                    <img src={plus} alt="add icon"/>
                </div>
                <div className="carousel-item__info__movie-title">Sample</div>
                <div className="carousel-item__info__movie-duration">000 min.</div>
            </div>
        </div>
    );
}

export default CarouselItem;