import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import publicReducer from './reducers/public';
import userReducer from './reducers/user';
import loadingReducer from './reducers/loading';

const rootReducer = combineReducers({
    auth: authReducer,
    public: publicReducer,
    user: userReducer,
    loading: loadingReducer
})

export default rootReducer;