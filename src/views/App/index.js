import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import RouterContainer from '../RouterContainer';
import theme from './styles';


const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <RouterContainer />
        </MuiThemeProvider>
    );
};

export default App;
