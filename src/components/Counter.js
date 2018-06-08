import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Counter.css';
import PropTypes from 'prop-types';


var Counter = (props) => {
    return <Grid container spacing={16} style={{ padding: 100 }}>
        <Grid item xs={12}>
            <Grid
                container
                spacing={16}
                alignItems="center"
                justify="center">
                <p>{props.counter}</p>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid
                container
                spacing={16}
                alignItems="center"
                justify="center">
                <Grid item >
                    <Button onClick={props.onIncrementClick} variant="contained" color="primary">
                        Increment
                    </Button>
                </Grid>
                <Grid item >
                    <Button onClick={props.onDecrementClick} variant="contained" color="primary">
                        Decrement
                    </Button>
                </Grid>
                <Grid item >
                    <Button onClick={props.onResetClick} variant="contained" color="primary">
                        Reset
                    </Button>
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

export default Counter;