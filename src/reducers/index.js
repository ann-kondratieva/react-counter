import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './login';

const rootReducer = combineReducers({
    login,
    form: formReducer
});

export default rootReducer;