import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import NavigateRouter from '../NavigateRouter';
import theme from './theme';


const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <NavigateRouter />
        </MuiThemeProvider>
    );
};

export default App;
