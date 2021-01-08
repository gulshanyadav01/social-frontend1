import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL
}  from "../Actions/Types"; 

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null, 
    loading: true,
    user: null

}

export const authReducer = (state = initialState, action) => {
    
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
                return{
                    ...state,
                    ...action.payload,
                    isAuthenticated: true,
                    loading:false
                }
        case REGISTER_FAIL:
            localStorage.removeItem("token");
                return{
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    loading:false
                }
        default:
            return state;
    }
}



