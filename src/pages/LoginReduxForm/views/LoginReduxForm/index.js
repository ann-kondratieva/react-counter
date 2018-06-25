import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

import RenderTextField from '../RenderTextField';

const LoginReduxForm = ({ handleSubmit, pristine, submitting, classes }) => {
    return (
        <Grid
            container
            alignItems="center"
            justify="center">
            <form className={classes.container} onSubmit={handleSubmit}>
                <Grid item xs={12}  >
                    <Field
                        className={classes.textField}
                        name="email"
                        component={RenderTextField}
                        label="Email"
                        helperText="Example: default@example.com"
                        margin="normal"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12}  >
                    <Field
                        className={classes.textField}
                        name="password"
                        component={RenderTextField}
                        label="Password"
                        margin="normal"
                        helperText="Password should contain at least 6 characters"
                        type="password"
                    />
                </Grid>
                <Grid item xs={12}  >
                    <Grid
                        container
                        alignItems="center"
                        justify="center">
                        <Button className={classes.submitButton} type="submit"
                            variant="contained" color="primary" disabled={pristine || submitting}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
};

LoginReduxForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm()(withStyles(styles)(LoginReduxForm));

