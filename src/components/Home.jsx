import React, { useLayoutEffect } from 'react';
import '../assets/styles/components/Home.scss';

import Carousel from './Carousel';
import SearchBox from '../components/SearchBox';

import { useDispatch, useSelector } from 'react-redux';
import { getMoviesSection, getUserMovieList } from '../moviesRedux/moviesSlice';
import { setMoviesSection, setUserMovies } from '../moviesRedux/moviesThunk';

const Home = () => {

    const dispatch = useDispatch();
    const userMovieList = useSelector(getUserMovieList);
    const moviesSectionA = useSelector(getMoviesSection('moviesSectionA'));
    const moviesSectionB = useSelector(getMoviesSection('moviesSectionB'));
    const moviesSectionC = useSelector(getMoviesSection('moviesSectionC'));

    useLayoutEffect(() => {
        (async () => {
            await dispatch(setMoviesSection(['Animation', 'Comedy', 'Adventure']));
            await dispatch(setUserMovies());
        })();
    }, []);

    return (
        <div className="home">
            <SearchBox />
            <div className="home__user-list">
                <span className="home__label">Lista del usuario:</span>
                <Carousel isUserList={true} movieList={userMovieList} />
            </div>
            <div className="home__trends">
                <span className="home__label">Animacion:</span>
                <Carousel movieList={moviesSectionA} />
            </div>
            <div className="home__trends">
                <span className="home__label">Comedia:</span>
                <Carousel movieList={moviesSectionB} />
            </div>
            <div className="home__trends">
                <span className="home__label">Fantasia:</span>
                <Carousel movieList={moviesSectionC} />
            </div>
        </div>
    );
}

export default Home;