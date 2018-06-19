import LOGIN_TYPES from '../../types/login';

const loginActions = {
    setFormValue: (name, value) => ({
        type: LOGIN_TYPES.SET_VALUE,
        name,
        value
    }),
    setError: (name, value) => ({
        type: LOGIN_TYPES.SET_ERROR,
        name,
        value
    }),
    setFirstSubmit: () => ({
        type: LOGIN_TYPES.SET_FIRST_SUBMIT
    }),
    exit: () => ({
        type: LOGIN_TYPES.EXIT
    }),
    loginSuccess: () => ({
        type: LOGIN_TYPES.LOGIN_SUCCESS
    })
};

export default loginActions;
