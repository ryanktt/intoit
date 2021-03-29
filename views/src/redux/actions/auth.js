import axios from '../../utils/axios';

import {
    LOGIN, 
    SIGNUP, 
    AUTH_ERROR, 
    LOAD_USER, 
    LOGOUT, 
    LOADING, STOP_LOADING
} from '../actionTypes';

export const loadUser = async dispatch => {
    dispatch({ type: LOADING});
    try {
        const user = await axios.get('/user');
        return dispatch({
            type: LOAD_USER,
            payload: user.data
        })
    } catch (err) {
        dispatch({type: AUTH_ERROR})
        dispatch({type: STOP_LOADING});
    }
}

export const login = (formData) => async dispatch => {
    dispatch({ type: LOADING});
    try { 
        const response = await axios.post('/auth/login', formData);
    
        dispatch({
            type: LOGIN,
            payload: response.data
        })
        dispatch(loadUser);
        dispatch({type: STOP_LOADING});
    } catch(err) {

        dispatch({type: AUTH_ERROR});
        dispatch({type: STOP_LOADING});

    }
}

export const signup = formData => async dispatch => {
    dispatch({ type: LOADING});
    try { 
        const token  = await axios.post('/auth/signup', formData);
        dispatch({
            type: SIGNUP,
            payload: token.data
        })

        dispatch({type: STOP_LOADING});
    } catch(err) {
        dispatch({type: AUTH_ERROR});
        dispatch({type: STOP_LOADING});
    }
}

export const logout = dispatch => {
    dispatch({
        type: LOGOUT
    })
}