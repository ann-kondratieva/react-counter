import { handleActions } from 'redux-actions';

import LOGIN_TYPES from '../../types/login';

let initialState = {
    password: ''
};

const passwordReducer = handleActions(
    {
        [LOGIN_TYPES.SET_PASSWORD]: (state, action) => ({
            password: action.payload
        }),
        [LOGIN_TYPES.EXIT]: () => ({
            password: ''
        }),
    },
    initialState
);

export default passwordReducer;