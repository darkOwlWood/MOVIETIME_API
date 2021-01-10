import React from 'react';
import '../assets/styles/components/Carousel.scss';
import CarouselItem from '../components/CarouselItem';

const Carousel = ({isUserList,movieList}) => {

    return (
        <div className="carousel">
            <div className="carousel-item-wrapper">
                {
                    movieList &&
                    movieList.map( (movie,ndx) => 
                        <CarouselItem 
                            key={ndx}
                            movie={movie}
                            isUserList={isUserList} 
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Carousel;