import React, { useLayoutEffect } from 'react';
import '../assets/styles/components/CarouselItem.scss';

import { useDispatch } from 'react-redux';
import { addUserMovie, deleteUserMovie, } from '../slices/moviesSlice';
import play from '../assets/static/play.png';
import plus from '../assets/static/plus.png';
import minus from '../assets/static/minus.png';

const CarouselItem = ({ movie, isUserList }) => {

    const dispatch = useDispatch();
    const { id, title, year, duration, cover } = movie;
    const styles = { backgroundImage: `url(${cover})` };

    return (
        <div className="carousel-item" style={styles}>
            <div className="carousel-item__info">
                <div className="carousel-item__info__icons">
                    <img src={play} alt="play icon"/>
                    {
                        isUserList? 
                            <img 
                                src={minus} 
                                alt="remove icon" onClick={ () => dispatch(deleteUserMovie(movie.id))}
                            /> 
                            :<img 
                                src={plus} 
                                alt="add icon" 
                                onClick={ () => dispatch(addUserMovie(movie)) } 
                            />
                    }
                </div>
                <div className="carousel-item__info__movie-title">{title}</div>
                <div className="carousel-item__info__movie-duration">{duration} min.</div>
            </div>
        </div>
    );
}

export default CarouselItem;