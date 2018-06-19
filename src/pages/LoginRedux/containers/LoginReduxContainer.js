/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginReduxForm from '../views/LoginReduxForm';
import TabsContainer from '../../../components/Tabs';
import { REGEXP } from '../constants';
import loginActions from '../../../actions/login';

class LoginReduxContainer extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkStateValues = this.checkStateValues.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { email, password, wasFirstSubmit, loginSuccess } = nextProps;
        const propsChanged = wasFirstSubmit && (email !== this.props.email || password !== this.props.password);
        if (propsChanged) {
            this.checkStateValues();
        }
        if (loginSuccess) {
            this.props.history.push(`${process.env.PUBLIC_URL}/login-redux/success`);
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const { wasFirstSubmit, dispatch } = this.props;
        if (!wasFirstSubmit) {
            dispatch(loginActions.setFirstSubmit());
        }
        if (this.checkStateValues()) {
            dispatch(loginActions.loginSuccess());
        }
    }

    onChange(event) {
        const { name, value } = event.target;
        const { dispatch } = this.props;
        dispatch(loginActions.setFormValue(name, value));
    }

    checkStateValues() {
        const { email, password, dispatch } = this.props;
        var isValidEmail = LoginReduxContainer.checkValue(email, REGEXP.email);
        var isValidPassword = LoginReduxContainer.checkValue(password, REGEXP.password);
        dispatch(loginActions.setError('Email', !isValidEmail));
        dispatch(loginActions.setError('Password', !isValidPassword));
        return isValidEmail && isValidPassword;
    }

    static checkValue(value, regexp) {
        const isValid = regexp.test(value);
        return isValid;
    }

    render() {
        const { email, password, errorEmail, errorPassword } = this.props;
        const props = {
            email,
            password,
            onChange: this.onChange,
            errorEmail,
            errorPassword,
            onSubmit: this.onSubmit
        };
        return (
            <React.Fragment>
                <TabsContainer location='/login-redux' />
                <LoginReduxForm {...props} />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { wasFirstSubmit, email, password, errorEmail, errorPassword, loginSuccess } = state;
    return {
        wasFirstSubmit,
        email,
        password,
        errorEmail,
        errorPassword,
        loginSuccess
    };
}

LoginReduxContainer.propTypes = {
    history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(LoginReduxContainer);