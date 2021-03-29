import {} from '../actionTypes';

const initialState = {
    
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_USER: 
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false
        }
        
        default:
            return state   
    }

}

export default auth;