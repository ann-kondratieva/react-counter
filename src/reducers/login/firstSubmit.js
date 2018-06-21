import { handleActions } from 'redux-actions';

import LOGIN_TYPES from '../../types/login';

let initialState = {
    firstSubmit: false
};

const firstSubmitReducer = handleActions(
    {
        [LOGIN_TYPES.SET_FIRST_SUBMIT]: () => ({
            firstSubmit: true
        }),
        [LOGIN_TYPES.EXIT]: () => ({
            firstSubmit: false
        }),
    },
    initialState
);

export default firstSubmitReducer;