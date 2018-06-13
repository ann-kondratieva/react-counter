import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import About from '../About';
import ParentCounter from '../../containers/ParentCounter';
import NavigateTabsWithRouter from '../../containers/NavigateTabs';
import ErrorPage from '../ErrorPage';

const history = createBrowserHistory();

const RouterContainer = () => {
    return (
        <Router history={history}>
            <React.Fragment>
                <NavigateTabsWithRouter />
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/counters' component={ParentCounter} />
                    <Route path='*' component={ErrorPage} />
                </Switch>
            </React.Fragment>
        </Router>
    );
};

export default RouterContainer;