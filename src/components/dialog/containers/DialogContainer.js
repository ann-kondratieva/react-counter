/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DialogWindow from '../views/DialogWindow';

class DialogContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            openDialog: false
        };
        this.onCloseDialog = this.onCloseDialog.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const search = nextProps.location.search;
        const params = new URLSearchParams(search);
        const email = params.get('email');
        const password = params.get('password');
        const newOpenDialog = nextProps.openDialog !== null && email !== null && password !== null;
        this.setState({ openDialog: newOpenDialog, email, password });
    }

    onCloseDialog() {
        this.setState({ openDialog: false, email: null, password: null });
        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    render() {
        const { openDialog, email, password } = this.state;
        const props = {
            openDialog: openDialog,
            email: email,
            password: password,
            onCloseDialog: this.onCloseDialog
        };

        return (
            <DialogWindow {...props} />
        );
    }
}

DialogContainer.propTypes = {
    openDialog: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    history: PropTypes.object.isRequired
};

export default DialogContainer;