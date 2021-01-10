import React from 'react';

import Register from '../components/Register';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterLayout = () => {
    return (
        <>
            <Header label={'Register'} />
            <Register />
            <Footer />
        </>
    );
}

export default RegisterLayout;