import { GET_CLASS, GET_COURSE, GET_COURSES } from '../actionTypes';

const initialState = {
    courses: null,
    course: null
}

const auth = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case GET_COURSES: 
            return {
                ...state,
                courses: payload,
         
        }
        case GET_COURSE: 
            return {
                ...state,
                course: payload,
        
            }
        case GET_CLASS: 
            return {
                ...state,
                class: payload,
     
            }
        
        default:
            return state   
    }

}

export default auth;