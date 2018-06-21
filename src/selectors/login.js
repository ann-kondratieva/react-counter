import { createSelector } from 'reselect';

import { checkEmail, checkPassword } from '../utils/login/validation';

const getEmail = state => state ? state.loginReducer.emailReducer.email : null;
const getPassword = state => state ? state.loginReducer.passwordReducer.password : null;
const wasFirstSubmit = state => state ? state.loginReducer.firstSubmitReducer.firstSubmit : null;
const isLoginSuccess = state => state ? state.loginReducer.loginSuccessReducer.loginSuccess : null;

const isEmailError = createSelector(
    [getEmail, wasFirstSubmit],
    (email, firstSubmit) => {
        if (firstSubmit) {
            const isEmailError = !checkEmail(email);
            return isEmailError;
        }
    }
);

const isPasswordError = createSelector(
    [getPassword, wasFirstSubmit],
    (password, firstSubmit) => {
        if (firstSubmit) {
            const isPasswordError = !checkPassword(password);
            return isPasswordError;
        }
    }
);

const loginSelectors = {
    getEmail,
    getPassword,
    isEmailError,
    isPasswordError,
    wasFirstSubmit,
    isLoginSuccess
};

export default loginSelectors;