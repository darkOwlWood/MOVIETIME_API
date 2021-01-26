import React from 'react';
import '../assets/styles/containers/App.scss';

import RootLayout from './RootLayout';
import HomeLayout from './HomeLayout';
import LoginLayout from './LoginLayout';
import RegisterLayout from './RegisterLayout';
import NotFound from '../components/NotFound';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLog } from '../moviesRedux/moviesSelector';

const App = () => {

    const userIsLog = useSelector(getIsLog);

    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={RootLayout} />
                    <Route exact path="/home" component={userIsLog ? HomeLayout : RootLayout} />
                    <Route exact path="/login" component={userIsLog ? HomeLayout : LoginLayout} />
                    <Route exact path="/register" component={userIsLog ? HomeLayout : RegisterLayout} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;