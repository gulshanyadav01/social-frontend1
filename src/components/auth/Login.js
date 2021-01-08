import React, {useState} from 'react';
import { connect } from "react-redux"; 
import {setAlert}  from "../store/Actions/alert"; 
import PropTypes from "prop-types"
import {login} from "../store/Actions/auth"; 
import { Redirect } from 'react-router-dom';

 const Login = ({setAlert, login, isAuthenticated}) => {

     const [formData, setFormData] = useState({
        
         email:"",
         password:"",
         password2:"", 
     })
     const onChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})       
     }
     const { email, password, password2} = formData; 
     
     const onSubmit = (e) => {
         e.preventDefault(); 
         if(password !== password2){
             console.log("not match");
            setAlert("password do not match", 'danger');  
         }
         else{
            //  console.log(formData);
             login({ email, password}); 
         }
         
     }
     
     // redirect if logged in 
     if(isAuthenticated){
         return <Redirect to = "/dashboard" />
     }
     

    return (
        <div>
            <form onSubmit = {onSubmit}>
                
                <div>
                    <input 
                        type = "email"
                        placeholder = 'enter your email'
                        name = "email" 
                        value = {email}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                    <input 
                        type = "password"
                        placeholder = 'enter your password'
                        name = "password" 
                        value = {password}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                    <input 
                        type = "password"
                        placeholder = 'enter your password again'
                        name = "password2" 
                        value = {password2}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                    <input 
                        type = "submit"
                        value = "sumbit" 
                        
                    /> 
                </div> 
            </form>
        </div>
    )
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
}

const mapStateToProps = (state ) => ({

    isAuthenticated: state.authReducer.isAuthenticated
})


export default connect(mapStateToProps, {setAlert, login})(Login); 