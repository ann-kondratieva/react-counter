/* global process */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TabsContainer from '../../../components/Tabs';
import LoginReduxSuccess from '../views/LoginReduxSuccess';
import loginActionCreators from '../../../actions/login';
import loginSelectors from '../../../selectors/login';

class LoginReduxFormSuccessContainer extends Component {

    constructor(props) {
        super(props);
        this.onExitClick = this.onExitClick.bind(this);
    }

    onExitClick() {
        const { history, actions: { exit } } = this.props;
        exit();
        history.push(`${process.env.PUBLIC_URL}/login-redux-form`);
    }

    render() {
        const { formData } = this.props;
        const props = {
            formData,
            onExitClick: this.onExitClick
        };
        return (
            <React.Fragment>
                <TabsContainer location='/login-redux-form' />
                <LoginReduxSuccess {...props} />
            </React.Fragment>
        );
    }

};

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

LoginReduxFormSuccessContainer.propTypes = {
    history: PropTypes.object.isRequired,
    formData: PropTypes.object,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormSuccessContainer);