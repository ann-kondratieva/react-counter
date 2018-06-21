import { handleActions } from 'redux-actions';

import loginActionCreators from '../../actions/login';

let initialState = '';

const password = handleActions(
    {
        [loginActionCreators.setPassword]: (state, action) => {
            return action.payload;
        },
        [loginActionCreators.exit]: () => {
            return initialState;
        },
    },
    initialState
);

export default password;

