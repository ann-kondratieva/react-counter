import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../views/LoginForm';
import TabsContainer from '../../../containers/TabsContainer';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail: false,
            errorPassword: false,
            openDialog: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCloseDialog = this.onCloseDialog.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.email === '') {
            this.setState({ errorEmail: true });
        } else if (this.state.password === '') {
            this.setState({ errorPassword: true });
        } else {
            this.setState({ openDialog: true });
            console.log(JSON.stringify({ email: this.state.email, password: this.state.password }));
        }
    }

    onCloseDialog() {
        this.setState({ openDialog: false, email: '', password: '' });
    }

    onChange(event) {
        var value = event.target.value;
        switch (event.target.name) {
        case 'email': this.setEmail(value); break;
        case 'password': this.setPassword(value); break;
        }
    }

    setEmail(email) {
        if (LoginContainer.checkEmail(email)) {
            this.setState({ email: email, errorEmail: false });
        } else {
            this.setState({ email: email, errorEmail: true });
        }
    }

    setPassword(password) {
        if (LoginContainer.checkPassword(password)) {
            this.setState({ password: password, errorPassword: false });
        } else {
            this.setState({ password: password, errorPassword: true });
        }
    }

    static checkEmail(email) {
        var isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        return isValid;
    }

    static checkPassword(password) {
        var isValid = /\w{6,}/.test(password);
        return isValid;
    }

    render() {
        const props = {
            email: this.state.email,
            password: this.state.password,
            onChange: this.onChange,
            onSubmit: this.onSubmit,
            errorEmail: this.state.errorEmail,
            errorPassword: this.state.errorPassword,
            openDialog: this.state.openDialog,
            onCloseDialog: this.onCloseDialog
        };

        return (
            <React.Fragment>
                <TabsContainer location={this.props.location} />
                <LoginForm {...props} />
            </React.Fragment>
        );
    }
}

LoginContainer.propTypes = {
    location: PropTypes.object.isRequired
};

export default LoginContainer;