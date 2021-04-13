import { LOADING, STOP_LOADING } from '../actionTypes';

const initialState = true
const loading = (state = initialState, action) => {
    const {type} = action;

    switch(type) {
        case LOADING: 
            return true
        case STOP_LOADING:
            return false
        
        default:
            return state   
    }

}

export default loading;