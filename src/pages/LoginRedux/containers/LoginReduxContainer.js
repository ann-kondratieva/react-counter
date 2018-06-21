/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginReduxForm from '../views/LoginReduxForm';
import TabsContainer from '../../../components/Tabs';
import loginActionCreators from '../../../actions/login';
import loginSelectors from '../../../selectors/login';

class LoginReduxContainer extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setFormValue - this.setFormValue.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { loginSuccess } = nextProps;
        if (loginSuccess) {
            this.props.history.push(`${process.env.PUBLIC_URL}/login-redux/success`);
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const { wasFirstSubmit, setFirstSubmit, setLoginSuccess, isEmailError, isPasswordError } = this.props;
        if (!wasFirstSubmit) {
            setFirstSubmit();
        }
        if (isEmailError === false && isPasswordError === false) {
            setLoginSuccess();
        }
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setFormValue(name, value);
    }

    setFormValue(name, value) {
        const { setEmail, setPassword } = this.props;
        switch (name) {
        case 'email': setEmail(value); break;
        case 'password': setPassword(value); break;
        }
    }

    render() {
        const { email, password, isEmailError, isPasswordError } = this.props;
        const props = {
            email,
            password,
            onChange: this.onChange,
            isEmailError,
            isPasswordError,
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
    return {
        wasFirstSubmit: loginSelectors.wasFirstSubmit(state),
        email: loginSelectors.getEmail(state),
        password: loginSelectors.getPassword(state),
        loginSuccess: loginSelectors.isLoginSuccess(state),
        isEmailError: loginSelectors.isEmailError(state),
        isPasswordError: loginSelectors.isPasswordError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setFirstSubmit: loginActionCreators.setFirstSubmit,
        setLoginSuccess: loginActionCreators.loginSuccess,
        setEmail: loginActionCreators.setEmail,
        setPassword: loginActionCreators.setPassword
    }, dispatch);
}

LoginReduxContainer.propTypes = {
    history: PropTypes.object.isRequired,
    wasFirstSubmit: PropTypes.bool,
    setFirstSubmit: PropTypes.func,
    setLoginSuccess: PropTypes.func,
    isEmailError: PropTypes.bool,
    isPasswordError: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    setEmail: PropTypes.func,
    setPassword: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer);