import React from 'react';
import '../assets/styles/components/Home.scss';

import Carousel from './Carousel';

const Home = () => {
    return (
        <div className="home">
            <div className="serach"></div>
            <Carousel />
            <Carousel />
            <Carousel />
        </div>
    );
}

export default Home;