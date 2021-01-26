import React from 'react';

import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useSelector } from 'react-redux';
import { getName } from '../moviesRedux/moviesSelector';

const HomeLayout = () => {
 
    const userName = useSelector(getName);

    return (
        <>
            <Header label={`Welcome: ${userName}`}/>
            <Home />
            <Footer />
        </>
    );
}

export default HomeLayout;