import React from 'react';
import '../assets/styles/containers/App.scss';

import RootLayout from './RootLayout';
import HomeLayout from './HomeLayout';
import LoginLayout from './LoginLayout';
import RegisterLayout from './RegisterLayout';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RootLayout} />
                    <Route exact path="/home" component={HomeLayout} />
                    <Route exact path="/login" component={LoginLayout} />
                    <Route exact path="/register" component={RegisterLayout} />
                    <Route component={() => <div>404</div>} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;