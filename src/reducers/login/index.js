import { combineReducers } from 'redux';

import email from './email';
import password from './password';
import firstSubmit from './firstSubmit';
import loginSuccess from './loginSuccess';
import formData from './formData';

const login = combineReducers({
    email,
    password,
    firstSubmit,
    loginSuccess,
    formData
});

export default login;