import React from 'react';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';

import NavigateRouter from '../NavigateRouter';
import theme from './theme';

import store from '../../store';

const App = () => {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <NavigateRouter />
            </MuiThemeProvider>
        </Provider>
    );
};

export default App;
