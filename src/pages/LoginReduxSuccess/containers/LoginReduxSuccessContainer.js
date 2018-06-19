import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabsContainer from '../../../components/Tabs';
import LoginReduxSuccess from '../views/LoginReduxSuccess';
import loginActions from '../../../actions/login';


class LoginReduxSuccessContainer extends Component {

    constructor(props) {
        super(props);
        this.onExitClick = this.onExitClick.bind(this);
    }

    onExitClick() {
        this.props.dispatch(loginActions.exit());
        this.props.history.push(`${process.env.PUBLIC_URL}/login-redux`);
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
    const { email, password } = state;
    return {
        email,
        password
    };
}

export default connect(mapStateToProps)(LoginReduxSuccessContainer);