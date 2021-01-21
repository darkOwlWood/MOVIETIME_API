import React from 'react';
import '../assets/styles/containers/App.scss';

import RootLayout from './RootLayout';
import HomeLayout from './HomeLayout';
import LoginLayout from './LoginLayout';
import RegisterLayout from './RegisterLayout';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLog } from '../moviesRedux/moviesSlice';

const App = () => {

    const userIsLog = useSelector(getIsLog);

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RootLayout} />
                    <Route exact path="/home" component={userIsLog ? HomeLayout : RootLayout} />
                    <Route exact path="/login" component={userIsLog ? HomeLayout : LoginLayout} />
                    <Route exact path="/register" component={userIsLog ? HomeLayout : RegisterLayout} />
                    <Route component={() => <div>404</div>} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;