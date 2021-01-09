import axios from "axios"; 
import {setAlert} from "./alert"; 
import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE
} from "./Types";

// GET THE CURRENT USER 

export const getCurrentProfile = () => async dispatch => {
    try{
        const res = await axios.get("http://localhost:5000/api/profile/me"); 

        dispatch({
            type:GET_PROFILE,
            payload: res.data
        }); 

    }catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })

    }
}

// create or update the profile

export const createProfile = (formData, history, edit = false) => async dispatch  => {
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res = await axios.post("http://localhost:5000/api/profile/",formData, config); 
        dispatch({
            type:GET_PROFILE,
            payload: res.data

        }); 
        dispatch(setAlert(edit? "profile updated" : "profile created")); 
        if(!edit){
            history.push("/dashboard"); 
        }
    } catch (err) {
        const errors = err.response.data.errors; 

        if(errors){
            errors.forEach(error => dispatch(setAlert(err.msg, "danger"))); 
        }

        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        }) 
        
    }


}


// ADD EXPERINCE 
export const addExprience = (formData, history) => async dispatch => {
    try{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res  = await axios.put("http://localhost:5000/api/profile/experience", formData, config); 
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        }); 
        dispatch(setAlert("experience added", 'success')); 
        history.push("/dashboard"); 
    }catch(err){
        const errors = err.response.data.errors; 
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, "danger"))); 

        }
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        }); 

    }
}


// ADD educatoin 
export const addEducation = (formData, history) => async dispatch => {
    try{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res  = await axios.put("http://localhost:5000/api/profile/education", formData, config); 
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        }); 
        dispatch(setAlert("education added", 'success')); 
        history.push("/dashboard"); 
    }catch(err){
        const errors = err.response.data.errors; 
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, "danger"))); 

        }
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        }); 

    }
}