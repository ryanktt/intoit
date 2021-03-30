import {GET_USER_COURSES} from '../actionTypes';

const initialState = {
    courses: null
}
const user = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case GET_USER_COURSES: 
            return {
                ...state,
                courses: payload
                
        }
        
        default:
            return state   
    }

}

export default user;