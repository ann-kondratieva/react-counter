import { handleActions } from 'redux-actions';

import loginActionCreators from '../../actions/login';

let initialState = false;

const loginSuccess = handleActions(
    {
        [loginActionCreators.setLoginSuccess]: () => {
            return true;
        },
        [loginActionCreators.exit]: () => {
            return initialState;
        },
    },
    initialState
);

export default loginSuccess;

