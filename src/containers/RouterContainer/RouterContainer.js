import React, { Component } from 'react';

import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { About } from '../../views/About';
import { ParentCounter } from '../ParentCounter';
import { NavigateTabs } from '../NavigateTabs';



class RouterContainer extends Component {
    render() {
        const history = createBrowserHistory();
        return (
            <React.Fragment>
                <Router history={history}>
                    <React.Fragment>
                        <Route path='/' component={NavigateTabs} />
                        <Route path='/about' component={About} />
                        <Route path='/counters' component={ParentCounter} />
                    </React.Fragment>
                </Router>
            </React.Fragment>
        );
    }
}

export { RouterContainer };