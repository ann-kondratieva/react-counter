import { handleActions } from 'redux-actions';

import loginActionCreators from '../../actions/login';

let initialState = {};

const formData = handleActions(
    {
        [loginActionCreators.setFormData]: (state, action) => {
            return action.payload;
        },
        [loginActionCreators.exit]: () => {
            return initialState;
        },
    },
    initialState
);

export default formData;
