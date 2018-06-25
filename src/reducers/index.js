import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './login';
import user from './user';

const rootReducer = combineReducers({
    login,
    form: formReducer,
    user
});

export default rootReducer;