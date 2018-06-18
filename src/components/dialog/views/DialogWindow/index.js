import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

var DialogWindow = ({ openDialog, email, password, onCloseDialog }) => {
    return (
        <Dialog
            open={openDialog}
            onClose={onCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{'Your data'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Email: {email}  <br />
                    Password: {password}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

DialogWindow.propTypes = {
    openDialog: PropTypes.bool.isRequired,
    onCloseDialog: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string
};

export default DialogWindow;