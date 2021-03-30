import {LOGIN, SIGNUP, LOGOUT, AUTH_ERROR, LOAD_USER} from '../actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: false
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_USER: 
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,

        }
        case LOGIN:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
            }
        case SIGNUP:
            return {
                ...state
            }
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
   
            }
        default:
            return state   
    }

}

export default auth;