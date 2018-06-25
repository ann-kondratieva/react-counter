/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFormValues } from 'redux-form';

import LoginReduxForm from '../views/LoginReduxForm';
import TabsContainer from '../../../components/Tabs';
import userActionCreators from '../../../actions/login';
import FormValues from '../views/FormValues';
import { LOGIN_FORM } from '../../../constants/form';
import { validate } from '../utils/validate';

class LoginReduxFormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        const { setUserData } = this.props.actions;
        setUserData(values);
        this.props.history.push(`${process.env.PUBLIC_URL}/login-redux-form/success`);
    }

    render() {
        const { formValues } = this.props;
        const initialValues = {
            email: '',
            password: ''
        };
        const props = {
            onSubmit: this.handleSubmit,
            form: LOGIN_FORM,
            validate,
            initialValues
        };
        return (
            <React.Fragment>
                <TabsContainer location='/login-redux-form' />
                <LoginReduxForm {...props} />
                <FormValues formValues={formValues ? formValues : initialValues} />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        formValues: getFormValues(LOGIN_FORM)(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActionCreators, dispatch)
    };
}


LoginReduxFormContainer.propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object,
    formValues: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);
