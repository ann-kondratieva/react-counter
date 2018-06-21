import { combineReducers } from 'redux';

import emailReducer from './email';
import passwordReducer from './password';
import firstSubmitReducer from './firstSubmit';
import loginSuccessReducer from './loginSuccess';

const loginReducer = combineReducers({
    emailReducer,
    passwordReducer,
    firstSubmitReducer,
    loginSuccessReducer
});

export default loginReducer;