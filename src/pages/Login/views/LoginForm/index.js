import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { styles } from './styles';

var LoginForm = ({ classes, email, password, onSubmit, onChange, errorEmail, errorPassword, openDialog, onCloseDialog }) => {
    return (
        <React.Fragment>
            <Grid
                container
                alignItems="center"
                justify="center">
                <form className={classes.container}>
                    <Grid item xs={12}  >
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            className={classes.textField}
                            value={email}
                            onChange={onChange}
                            margin="normal"
                            error={errorEmail}
                        />
                    </Grid>
                    <Grid item xs={12}  >
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            className={classes.textField}
                            value={password}
                            onChange={onChange}
                            margin="normal"
                            error={errorPassword}
                        />
                    </Grid>
                    <Grid item xs={12}  >
                        <Grid
                            container
                            alignItems="center"
                            justify="center">
                            <Button type="submit" className={classes.submitButton} onClick={onSubmit}
                                variant="contained" color="primary" disabled={errorEmail || errorPassword}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid item xs={12}  >
                    <Grid
                        container
                        alignItems="center"
                        justify="center">
                        <Typography>Your Data: {email} {password}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                open={openDialog}
                onClose={onCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{'Your data'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Email: {email} <br />
                        Password: {password}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errorPassword: PropTypes.bool.isRequired,
    errorEmail: PropTypes.bool.isRequired,
    openDialog: PropTypes.bool.isRequired,
    onCloseDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginForm);