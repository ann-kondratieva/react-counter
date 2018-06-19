/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';

import LoginForm from '../views/LoginForm';
import TabsContainer from '../../../components/Tabs';
import { REGEXP } from '../constants';

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
            const { email, password } = this.state;
            const data = {
                email, password
            };
            this.props.history.push(`${process.env.PUBLIC_URL}/login/data?${qs.stringify(data)}`);
            this.setState({ email: '', password: '' });
        }
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value }, this.checkStateValues);
    }

    checkStateValues() {
        const { wasFirstSubmit, email, password } = this.state;
        if (wasFirstSubmit) {
            var isValidEmail = LoginContainer.checkValue(email, REGEXP.email);
            var isValidPassword = LoginContainer.checkValue(password, REGEXP.password);
            this.setState({ errorEmail: !isValidEmail, errorPassword: !isValidPassword });
        }
        return isValidEmail && isValidPassword;
    }

    static checkValue(value, regexp) {
        const isValid = regexp.test(value);
        return isValid;
    }

    render() {
        const { email, password, errorEmail, errorPassword } = this.state;
        const props = {
            email: email,
            password: password,
            onChange: this.onChange,
            onSubmit: this.onSubmit,
            errorEmail: errorEmail,
            errorPassword: errorPassword
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