import { handleActions } from 'redux-actions';

import userActionCreators from '../../actions/user';

let initialState = {};

const userData = handleActions(
    {
        [userActionCreators.setUserData]: (state, action) => {
            return action.payload;
        },
        [userActionCreators.exit]: () => {
            return initialState;
        },
    },
    initialState
);

export default userData;