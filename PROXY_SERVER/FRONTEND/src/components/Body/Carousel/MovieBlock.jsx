import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import Carousel from './Carousel';
import useStylesMovieBlock from '../../../assets/styles/components/MovieBlock';

import { setSectionsMovies, setUserMovies } from '../../../redux/movie/Thunk';
import { getMovieList } from '../../../redux/movie/Selector';

const MovieBlock = () => {

    const dispatch = useDispatch();
    const classes = useStylesMovieBlock();
    const sectionUserMovieList = useSelector(getMovieList('userMovieList'));
    const sectionAMovieList = useSelector(getMovieList('sectionAMovieList'));
    const sectionBMovieList = useSelector(getMovieList('sectionBMovieList'));
    const sectionCMovieList = useSelector(getMovieList('sectionCMovieList'));

    useLayoutEffect(() => {
        dispatch(setUserMovies({}));
        dispatch(setSectionsMovies(['Animation', 'Comedy', 'Adventure']));
    }, []);

    return (
        <>
            <div className={classes.root}>
                <div className={classes.carouselWrapper}>
                    <div className={`${classes.carouselWrapperHeader} ${classes.carouselWrapperHeaderUser}`}>
                        <Typography>User</Typography>
                    </div>
                    <Carousel isUserList={true} movieList={sectionUserMovieList} />
                </div>
                <div className={classes.carouselWrapper}>
                    <div className={classes.carouselWrapperHeader}>
                        <Typography>Animation</Typography>
                    </div>
                    <Carousel isUserList={false} movieList={sectionAMovieList} />
                </div>
                <div className={classes.carouselWrapper}>
                    <div className={classes.carouselWrapperHeader}>
                        <Typography>Comedy</Typography>
                    </div>
                    <Carousel isUserList={false} movieList={sectionBMovieList} />
                </div>
                <div className={classes.carouselWrapper}>
                    <div className={classes.carouselWrapperHeader}>
                        <Typography>Adventure</Typography>
                    </div>
                    <Carousel isUserList={false} movieList={sectionCMovieList} />
                </div>
            </div>
        </>
    );
}

export default MovieBlock;