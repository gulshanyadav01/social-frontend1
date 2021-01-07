import React, {useState} from 'react';
 

 const Register = () => {

     const [formData, setFormData] = useState({
         name:"",
         email:"",
         password:"",
         password2:"", 
     })
     const onChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})       
     }
     const {name, email, password, password2} = formData; 
     
     const onSubmit = (e) => {
         e.preventDefault(); 
         if(password !== password2){
             console.log("not match"); 
         }
         else{
             console.log(formData);
         }
         
     }
     
     

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <div>
                    <input 
                        type = "text"
                        placeholder = 'enter your name'
                        name = "name" 
                        value = {name}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
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


export default Register; 