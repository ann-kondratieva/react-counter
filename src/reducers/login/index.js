import { combineReducers } from 'redux';

import email from './email';
import password from './password';
import firstSubmit from './firstSubmit';
import loginSuccess from './loginSuccess';

const login = combineReducers({
    email,
    password,
    firstSubmit,
    loginSuccess
});

export default login;