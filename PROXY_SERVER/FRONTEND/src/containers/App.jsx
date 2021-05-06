import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Static/Layout';
import Home from '../components/Body/Home';
import Login from '../components/Body/Login';
import Signin from '../components/Body/Signin';
import MovieMenu from '../components/Body/Carousel/MovieMenu';

import { getUserLoginStatus } from '../redux/user/Selector';

const App = () => {

    const isLog = useSelector(getUserLoginStatus);

    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={isLog ? MovieMenu : Login} />
                    <Route exact path="/signin" component={isLog ? MovieMenu : Signin} />
                    <Route exact path="/moviemenu" component={isLog ? MovieMenu : Login} />
                </Switch>
            </Layout>
        </>
    );
}

export default App;