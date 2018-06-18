/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../views/LoginForm';
import { TabsContainer } from '../../../components/tabs';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail: false,
            errorPassword: false,
            wasFirstSubmit: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.redirectAndClear = this.redirectAndClear.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        if (!this.state.wasFirstSubmit) {
            this.setState({ wasFirstSubmit: true }, this.redirectAndClear);
        } else {
            this.redirectAndClear();
        }
    }

    redirectAndClear() {
        if (this.checkStateValues()) {
            this.props.history.push(`${process.env.PUBLIC_URL}/login/data?email=${this.state.email}&password=${this.state.password}`);
            this.setState({ email: '', password: '' });
        }
    }

    onChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value }, this.checkStateValues);
    }

    checkStateValues() {
        if (this.state.wasFirstSubmit) {
            var isValidEmail = LoginContainer.checkEmail(this.state.email);
            var isValidPassword = LoginContainer.checkPassword(this.state.password);
            this.setState({ errorEmail: !isValidEmail });
            this.setState({ errorPassword: !isValidPassword });
        }
        return isValidEmail && isValidPassword;
    }

    static checkEmail(email) {
        var isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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
            onCloseDialog: this.onCloseDialog
        };

        return (
            <React.Fragment>
                <TabsContainer location='/login' />
                <LoginForm {...props} />
            </React.Fragment>
        );
    }
}

LoginContainer.propTypes = {
    history: PropTypes.object.isRequired
};

export default LoginContainer;