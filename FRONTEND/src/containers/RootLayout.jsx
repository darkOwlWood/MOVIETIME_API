import React from 'react';

import Root from '../components/Root';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <>
            <Header label={'Welcome'} />
            <Root />
            <Footer />
        </>
    );
}

export default RootLayout;