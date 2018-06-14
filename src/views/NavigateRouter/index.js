/* global process */

import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ParentCounterContainer from '../../pages/Counters/containers/ParentCounterContainer';
import LoginContainer from '../../pages/Login/containers/LoginContainer';
import ErrorPage from '../../pages/Error/views/ErrorPage';
import Home from '../../pages/Home/views';
import AboutUsContainer from '../../pages/AboutUs/containers/AboutUsContainer';

const history = createBrowserHistory();

const NavigateRouter = () => {
    return (
        <Router history={history}>
            <React.Fragment>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={AboutUsContainer} />
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={ParentCounterContainer} />
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginContainer} />
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                    <Route exact path='*' component={ErrorPage} />
                </Switch>
            </React.Fragment>
        </Router>
    );
};

export default NavigateRouter;