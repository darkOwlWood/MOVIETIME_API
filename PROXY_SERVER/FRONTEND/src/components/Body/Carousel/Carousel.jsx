import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';
import CarouselItem from './CarouselItem';
import useStylesCarousel from '../../../assets/styles/components/Carousel';
import { getUserMovieListFilter } from '../../../redux/movie/Selector';

const filterMoviesByCoincidence = (movieName, movieList) => {
    const nameLength = movieName.length;
    return movieList.filter(movie => movie.title.slice(0, nameLength).toLowerCase() === movieName.toLowerCase());
}

const Carousel = ({ isUserList, movieList }) => {

    const classes = useStylesCarousel();
    const userMovieListFilter = useSelector(getUserMovieListFilter);

    return (
        <>
            <Paper className={classes.wrapper}>
                <div className={classes.carousel}>
                    {
                        (isUserList && (userMovieListFilter !== '')) ?
                            filterMoviesByCoincidence(userMovieListFilter, movieList)
                                .map((movie, ndx) => (
                                    <CarouselItem
                                        key={ndx}
                                        movie={movie}
                                        isUserList={isUserList}
                                    />
                                ))
                            : movieList.map((movie, ndx) => (
                                <CarouselItem
                                    key={ndx}
                                    movie={movie}
                                    isUserList={isUserList}
                                />
                            ))
                    }
                </div>
            </Paper>
        </>
    );
}

export default Carousel;