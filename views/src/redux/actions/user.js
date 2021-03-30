import api from '../../utils/axios';


import {
    GET_USER_COURSES,
    ADD_CLASS,
    ADD_COURSE,
    LOADING,
    STOP_LOADING
} from '../actionTypes'


export const addCourse = (formData) => async dispatch => {
    dispatch({ type: LOADING});
    try { 
        await api.post(`/user/course`, formData);
    
        dispatch({
            type: ADD_COURSE
        });
        dispatch({type: STOP_LOADING});
    } catch(err) {
        console.error(err);
        dispatch({type: STOP_LOADING});

    }
}

export const addClass = (formData, courseId) => async dispatch => {
    dispatch({ type: LOADING});
    try { 
        await api.post(`/user/class/${courseId}`, formData);
    
        dispatch({
            type: ADD_CLASS
        })
        dispatch({type: STOP_LOADING});
    } catch(err) {
        console.error(err);
        dispatch({type: STOP_LOADING});

    }
}

export const getCourses = async dispatch => {
    dispatch({ type: LOADING});
    try { 
        const courses = await api.get('/user/courses');
    
        dispatch({
            type: GET_USER_COURSES,
            payload: courses.data
        })
        dispatch({type: STOP_LOADING});
    } catch(err) {
        console.error(err)
        dispatch({type: STOP_LOADING});

    }
}

