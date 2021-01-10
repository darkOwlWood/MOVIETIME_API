import React from 'react';
import '../assets/styles/components/Carousel.scss';
import CarouselItem from '../components/CarouselItem';

const Carousel = ({isUserList,movieList}) => {

    return (
        <div className="carousel">
            <div className="carousel__item-wrapper">
                {
                    (movieList && movieList.length)?
                    movieList.map( (movie,ndx) => 
                        <CarouselItem 
                            key={ndx}
                            movie={movie}
                            isUserList={isUserList} 
                        />
                    )
                    :<div className="carousel__info">Aun no has agregado tus peliculas favoritas</div>
                }
            </div>
        </div>
    );
}

export default Carousel;