import React from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import { checkEmail, checkPassword } from '../../../../utils/login/validation';

const validate = values => {
    const errors = {};
    const requiredFields = [
        'email',
        'password'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = true;
        }
    });
    const { email, password } = values;
    if (
        email &&
        !checkEmail(email)
    ) {
        errors.email = true;
    }

    if (
        password &&
        !checkPassword(password)
    ) {
        errors.password = true;
    }
    return errors;
};

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => {
    return (
        < TextField
            error={touched && error}
            placeholder={label}
            {...input}
            {...custom}
        />
    );
};

const LoginReduxForm = props => {
    const { handleSubmit, pristine, submitting, classes } = props;
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
                        component={renderTextField}
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
                        component={renderTextField}
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

export default reduxForm({
    form: 'LoginReduxForm',
    validate
})(withStyles(styles)(LoginReduxForm));

