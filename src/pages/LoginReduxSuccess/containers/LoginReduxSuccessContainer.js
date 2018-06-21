/* global process */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TabsContainer from '../../../components/Tabs';
import LoginReduxSuccess from '../views/LoginReduxSuccess';
import loginActionCreators from '../../../actions/login';
import loginSelectors from '../../../selectors/login';

class LoginReduxSuccessContainer extends Component {

    constructor(props) {
        super(props);
        this.onExitClick = this.onExitClick.bind(this);
    }

    onExitClick() {
        const { exit, history } = this.props;
        exit();
        history.push(`${process.env.PUBLIC_URL}/login-redux`);
    }

    render() {
        const { email, password } = this.props;
        const props = {
            email,
            password,
            onExitClick: this.onExitClick
        };
        return (
            <React.Fragment>
                <TabsContainer location='/login-redux' />
                <LoginReduxSuccess {...props} />
            </React.Fragment>
        );
    }

};

function mapStateToProps(state) {
    return {
        email: loginSelectors.getEmail(state),
        password: loginSelectors.getPassword(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        exit: loginActionCreators.exit
    }, dispatch);
}

LoginReduxSuccessContainer.propTypes = {
    history: PropTypes.object.isRequired,
    email: PropTypes.string,
    password: PropTypes.string,
    exit: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxSuccessContainer);