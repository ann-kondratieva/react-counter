import { handleActions } from 'redux-actions';

import loginActionCreators from '../../actions/login';

let initialState = '';

const email = handleActions(
    {
        [loginActionCreators.setEmail]: (state, action) => {
            return action.payload;
        },
        [loginActionCreators.exit]: () => {
            return initialState;
        },
    },
    initialState
);

export default email;
