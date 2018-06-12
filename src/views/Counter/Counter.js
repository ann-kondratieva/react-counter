import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { containerStyle } from './styles';

import PropTypes from 'prop-types';


var Counter = ({ counter, onIncrementClick, onDecrementClick, onResetClick }) => {
    return <Grid item xs={3}><Grid container spacing={16} style={containerStyle}>
        <Grid item xs={12}>
            <Grid
                container
                spacing={16}
                alignItems="center"
                justify="center">
                <p>{counter}</p>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid
                container
                spacing={16}
                alignItems="center"
                justify="center">
                <Grid item >
                    <Button onClick={onIncrementClick} variant="contained" color="primary">
                        Increment
                    </Button>
                </Grid>
                <Grid item >
                    <Button onClick={onDecrementClick} variant="contained" color="primary">
                        Decrement
                    </Button>
                </Grid>
                <Grid item >
                    <Button onClick={onResetClick} variant="contained" color="primary">
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </Grid>;
};

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrementClick: PropTypes.func.isRequired,
    onDecrementClick: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired
};

export { Counter };