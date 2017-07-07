import { combineReducers } from 'redux';

import {loginReducer} from './form.login.reducer';

const reducers = combineReducers({
    loginReducer: loginReducer
});

export default reducers;