import {REGISTER_FAIL, 
    REGISTER_SUCCESS, 
    USER_LOADED,
    AUTH_ERROR
} from "./Types"; 
import axios from "axios"; 
import {setAlert} from "./alert"; 
import setAuthToken from "../../../utils/setAuthToken";


// LOAD USER 
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);

    }
    try {
        const res = await axios.get("http://localhost:5000/api/auth/"); 
        dispatch({
            type:USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type:AUTH_ERROR,

        })
        
    }
}


export const register = ({name, email, password }) => async dispatch =>  {
    
    // const config = {
    //     headers: {
    //         "Content-Type":"application/json"
    //     }
    // }
    // const body = JSON.stringify({name, email, password}); 
    try{
        const newUser = {
            name,
            email,
            password
        }
        const res  = await axios.post("http://localhost:5000/api/users", newUser); 
        // console.log(res.data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        }); 

    }
    catch(err){
        // console.log(err.message); 
        const errors = err.response.data.errors; 
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))); 
        }
        dispatch({
            type: REGISTER_FAIL

        })
    }


}