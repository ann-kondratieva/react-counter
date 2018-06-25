import { createAction } from 'redux-actions';

const userActionCreators = {
    setUserData: createAction('SET_USER_DATA'),
    exit: createAction('EXIT')
};

export default userActionCreators;