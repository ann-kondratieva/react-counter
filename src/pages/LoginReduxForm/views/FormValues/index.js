import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const FormValues = ({ formValues: { email, password } }) => {
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
        >
            <Typography>
                Email: {email} <br />
                Password: {password}
            </ Typography>
        </Grid>
    );
};

FormValues.propTypes = {
    formValues: PropTypes.object
};

export default FormValues;