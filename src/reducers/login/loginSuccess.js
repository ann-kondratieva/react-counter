import { handleActions } from 'redux-actions';

import LOGIN_TYPES from '../../types/login';

let initialState = {
    loginSuccess: false
};

const loginSuccessReducer = handleActions(
    {
        [LOGIN_TYPES.LOGIN_SUCCESS]: () => ({
            loginSuccess: true
        }),
        [LOGIN_TYPES.EXIT]: () => ({
            loginSuccess: false
        }),
    },
    initialState
);

export default loginSuccessReducer;