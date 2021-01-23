import React from 'react';

import Login from '../components/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginLayout = () => {
    return (
        <>
            <Header label={'Login'} />
            <Login />
            <Footer />
        </>
    );
}

export default LoginLayout;