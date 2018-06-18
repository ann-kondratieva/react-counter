/* global process */

import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ParentCounterContainer from '../../pages/Counters';
import Login from '../../pages/Login';
import ErrorPage from '../../pages/Error';
import Home from '../../pages/Home';
import AboutUsContainer from '../../pages/AboutUs';

const history = createBrowserHistory();

const NavigateRouter = () => {
    return (
        <Router history={history}>
            <React.Fragment>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={AboutUsContainer} />
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={ParentCounterContainer} />
                    <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                    <Route exact path='*' component={ErrorPage} />
                </Switch>
            </React.Fragment>
        </Router>
    );
};

export default NavigateRouter;