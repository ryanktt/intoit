import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import publicReducer from './reducers/public';

const rootReducer = combineReducers({
    auth: authReducer,
    public: publicReducer
})

export default rootReducer;