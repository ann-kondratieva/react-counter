import { createAction } from 'redux-actions';

import LOGIN_TYPES from '../../types/login';

const loginActionCreators = {
    setEmail: createAction(LOGIN_TYPES.SET_EMAIL),
    setPassword: createAction(LOGIN_TYPES.SET_PASSWORD),
    setFirstSubmit: createAction(LOGIN_TYPES.SET_FIRST_SUBMIT),
    exit: createAction(LOGIN_TYPES.EXIT),
    loginSuccess: createAction(LOGIN_TYPES.LOGIN_SUCCESS),
};

export default loginActionCreators;
