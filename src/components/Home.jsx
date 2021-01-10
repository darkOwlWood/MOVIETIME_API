import React from 'react';
import '../assets/styles/components/Home.scss';

import { useSelector } from 'react-redux';
import { getUserMovieList, getMoviesSectionA, getMoviesSectionB, getMoviesSectionC } from '../slices/moviesSlice';
import Carousel from './Carousel';
import SearchBox from '../components/SearchBox';

const Home = () => {

    const userMovieList  = useSelector(getUserMovieList);
    const moviesSectionA = useSelector(getMoviesSectionA);
    const moviesSectionB = useSelector(getMoviesSectionB);
    const moviesSectionC = useSelector(getMoviesSectionC);

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