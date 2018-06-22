/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import LoginReduxForm from '../views/LoginReduxForm';
import TabsContainer from '../../../components/Tabs';
import loginActionCreators from '../../../actions/login';
import loginSelectors from '../../../selectors/login';
import FormValues from '../views/FormValues';

class LoginReduxFormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        const { setFormData } = this.props.actions;
        setFormData(values);
        this.props.history.push(`${process.env.PUBLIC_URL}/login-redux-form/success`);
    }

    render() {
        const props = {
            onSubmit: this.handleSubmit
        };
        return (
            <React.Fragment>
                <TabsContainer location='/login-redux-form' />
                <LoginReduxForm {...props} />
                <FormValues />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        formData: loginSelectors.getFormData(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActionCreators, dispatch)
    };
}


LoginReduxFormContainer.propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);
