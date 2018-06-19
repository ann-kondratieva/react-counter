import LOGIN_TYPES from '../types/login';

let initialState = {
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false,
    wasFirstSubmit: false,
    loginSuccess: false
};

const login = (state = initialState, action) => {
    let resultState = {};
    switch (action.type) {
    case LOGIN_TYPES.SET_VALUE: resultState = { ...state, [action.name]: action.value }; break;
    case LOGIN_TYPES.SET_ERROR: resultState = { ...state, ['error' + action.name]: action.value }; break;
    case LOGIN_TYPES.SET_FIRST_SUBMIT: resultState = { ...state, wasFirstSubmit: true }; break;
    case LOGIN_TYPES.EXIT: resultState = { ...state, email: '', password: '', loginSuccess: false }; break;
    case LOGIN_TYPES.LOGIN_SUCCESS: resultState = { ...state, loginSuccess: true }; break;
    default: return state;
    }
    return resultState;
};

export default login;