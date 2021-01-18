import React, { useLayoutEffect } from 'react';
import '../assets/styles/components/Home.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getUserMovieList, getMoviesSection, setMoviesSection, getRequestError, getUserMovies } from '../slices/moviesSlice';
import Carousel from './Carousel';
import SearchBox from '../components/SearchBox';

const Home = () => {

    const dispatch = useDispatch();
    const requestError = useSelector(getRequestError);
    const userMovieList  = useSelector(getUserMovieList);
    const moviesSectionA = useSelector(getMoviesSection('moviesSectionA'));
    const moviesSectionB = useSelector(getMoviesSection('moviesSectionB'));
    const moviesSectionC = useSelector(getMoviesSection('moviesSectionC'));
    
    useLayoutEffect( () => {
        if(!userMovieList.length && !moviesSectionA.length && !moviesSectionB.length && !moviesSectionC.length && !requestError){
            dispatch(setMoviesSection([ ['Animation'], ['Comedy'], ['Fantasy'] ] ));
            dispatch(getUserMovies());
        }
    });

    return (
        <div className="home">
            <SearchBox />
            <div className="home__user-list">
                <span className="home__label">Lista del usuario:</span>
                <Carousel isUserList={true} movieList={userMovieList}/>
            </div>
            <div className="home__trends">
                <span className="home__label">Animacion:</span>
                <Carousel movieList={moviesSectionA}/>
            </div>
            <div className="home__trends">
                <span className="home__label">Comedia:</span>
                <Carousel movieList={moviesSectionB}/>
            </div>
            <div className="home__trends">
                <span className="home__label">Fantasia:</span>
                <Carousel movieList={moviesSectionC}/>
            </div>
        </div>
    );
}

export default Home;