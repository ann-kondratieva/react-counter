import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import CounterContainer from './CounterContainer';

var CountersContainer = ({ countersIDs }) => {
    return (
        <Grid container spacing={16} alignItems="center" justify="center">
            {countersIDs.map((id) => (
                <CounterContainer key={id} countersNumber={countersIDs.length} />
            ))}
        </Grid>
    );

};

CountersContainer.propTypes = {
    countersIDs: PropTypes.array.isRequired
};

export default CountersContainer;