import { createSelector } from 'reselect';

import { checkEmail, checkPassword } from '../utils/login/validation';

const getEmail = state => state.login.email;
const getPassword = state => state.login.password;
const wasFirstSubmit = state => state.login.firstSubmit;
const isLoginSuccess = state => state.login.loginSuccess;
const getFormData = state => state.login.formData;

const isEmailError = createSelector(
    [getEmail],
    (email) => {
        return !checkEmail(email);
    }
);

const isPasswordError = createSelector(
    [getPassword],
    (password) => {
        return !checkPassword(password);
    }
);

const loginSelectors = {
    getEmail,
    getPassword,
    isEmailError,
    isPasswordError,
    wasFirstSubmit,
    isLoginSuccess,
    getFormData
};

export default loginSelectors;