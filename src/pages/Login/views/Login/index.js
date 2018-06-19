import React from 'react';
import { Route } from 'react-router-dom';

import LoginContainer from '../../containers/LoginContainer';
import DialogContainer from '../../../../components/Dialog';

var Login = (props) => {
    return (
        <React.Fragment>
            <LoginContainer {...props} />
            <Route path={`${process.env.PUBLIC_URL}/login/data`} children={({ match }) => (
                <DialogContainer {...props} openDialog={match} />
            )} />
        </React.Fragment>
    );
};

export default Login;