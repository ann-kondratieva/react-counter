import { handleActions } from 'redux-actions';

import loginActionCreators from '../../actions/login';

let initialState = false;

const firstSubmit = handleActions(
    {
        [loginActionCreators.setFirstSubmit]: () => {
            return true;
        },
        [loginActionCreators.exit]: () => {
            return initialState;
        },
    },
    initialState
);

export default firstSubmit;
