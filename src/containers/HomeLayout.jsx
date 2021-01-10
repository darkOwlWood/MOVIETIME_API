import React from 'react';

import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <>
            <Header label={'Welcome: User'} isHome={true} />
            <Home />
            <Footer />
        </>
    );
}

export default HomeLayout;