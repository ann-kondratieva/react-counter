import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from './styles';

const LoginReduxSuccess = ({ classes, email, password, onExitClick }) => {
    return (
        <React.Fragment>
            <Grid className={classes.container}
                container
                alignItems="center"
                justify="center">
                <Typography>
                    Email: {email} <br />
                    Password: {password}
                </Typography>
                <Grid item xs={12}>
                    <Grid className={classes.buttonContainer}
                        container
                        alignItems="center"
                        justify="center">
                        <Button onClick={onExitClick} variant="contained" color="primary">
                            Log Out
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

LoginReduxSuccess.propTypes = {
    classes: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onExitClick: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginReduxSuccess);