import React, { useLayoutEffect } from 'react';
import '../assets/styles/containers/App.scss';

import RootLayout from './RootLayout';
import HomeLayout from './HomeLayout';
import LoginLayout from './LoginLayout';
import RegisterLayout from './RegisterLayout';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getIsLog, getRequestError } from '../slices/moviesSlice';

const App = () => {

    const dispatch = useDispatch();
    const userIsLog = useSelector(getIsLog);
    const requestError = useSelector(getRequestError);

    useLayoutEffect(() => {
        requestError && dispatch(getToken());
    },[requestError]);


    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RootLayout} />
                    <Route exact path="/home" component={userIsLog? HomeLayout : RootLayout} />
                    <Route exact path="/login" component={userIsLog? HomeLayout : LoginLayout} />
                    <Route exact path="/register" component={userIsLog? HomeLayout : RegisterLayout} />
                    <Route component={() => <div>404</div>} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;