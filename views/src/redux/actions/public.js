import axios from '../../utils/axios';

import {
    GET_COURSE,
    GET_COURSES,
    GET_CLASS,
    LOADING,
    STOP_LOADING
} from '../actionTypes';

export const getCourses = async dispatch => {
    dispatch({ type: LOADING});
    try { 
        const courses = await axios.get(`/courses`);
    
        dispatch({
            type: GET_COURSES,
            payload: courses.data
        })
        dispatch({type: STOP_LOADING});
    } catch(err) {
        console.error(err)
        dispatch({type: STOP_LOADING});

    }
}

export const getCourse = (courseId) => async dispatch => {
    dispatch({ type: LOADING});
    try { 
        const course = await axios.get(`/course/${courseId}`);
    
        dispatch({
            type: GET_COURSE,
            payload: course.data
        })
        dispatch({type: STOP_LOADING});
    } catch(err) {
        console.error(err)
        dispatch({type: STOP_LOADING});
    }
}

export const getClass = (classId) => async dispatch => {
    dispatch({ type: LOADING});
    try { 
        const lesson = await axios.get(`/class/${classId}`);
    
        dispatch({
            type: GET_CLASS,
            payload: lesson.data
        })
        dispatch({type: STOP_LOADING});
    } catch(err) {
        console.error(err)
        dispatch({type: STOP_LOADING});
    }
}