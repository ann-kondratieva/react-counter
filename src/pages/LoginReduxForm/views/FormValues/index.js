import React from 'react';
import { Values } from 'redux-form-website-template';

import Grid from '@material-ui/core/Grid';

const FormValues = () => {
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
        >
            <Values form="LoginReduxForm" />
        </Grid>
    );
};

export default FormValues;