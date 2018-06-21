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
        const { wasFirstSubmit, isEmailError, isPasswordError, actions: { setFirstSubmit, setLoginSuccess } } = this.props;
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
        const { actions: { setEmail, setPassword } } = this.props;
        switch (name) {
        case 'email': setEmail(value); break;
        case 'password': setPassword(value); break;
        }
    }

    render() {
        const { email, password, isEmailError, isPasswordError, wasFirstSubmit } = this.props;
        const props = {
            email,
            password,
            onChange: this.onChange,
            isEmailError,
            isPasswordError,
            onSubmit: this.onSubmit,
            showError: wasFirstSubmit
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
    return {
        actions: bindActionCreators(loginActionCreators, dispatch)
    };
}

LoginReduxContainer.propTypes = {
    history: PropTypes.object.isRequired,
    wasFirstSubmit: PropTypes.bool,
    isEmailError: PropTypes.bool,
    isPasswordError: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer);

