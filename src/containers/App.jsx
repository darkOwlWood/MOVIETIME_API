import React from 'react';
import '../assets/styles/containers/App.scss';

import RootLayout from './RootLayout';
import HomeLayout from './HomeLayout';
import LoginLayout from './LoginLayout';
import RegisterLayout from './RegisterLayout';

const App = () => {
    return (
        <div className="app">
            <RootLayout />
            {/* <HomeLayout /> */}
            {/* <LoginLayout /> */}
            {/* <RegisterLayout /> */}
        </div>
    );
}

export default App;