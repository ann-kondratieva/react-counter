import { handleActions } from 'redux-actions';

import LOGIN_TYPES from '../../types/login';

let initialState = {
    email: ''
};

const emailReducer = handleActions(
    {
        [LOGIN_TYPES.SET_EMAIL]: (state, action) => ({
            email: action.payload
        }),
        [LOGIN_TYPES.EXIT]: () => ({
            email: ''
        }),
    },
    initialState
);

export default emailReducer;