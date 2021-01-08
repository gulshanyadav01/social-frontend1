import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import {connect} from "react-redux"; 

const CreateProfile = props => {
    const [formData, setFormData]  = useState({
        company:"",
        website:"",
        location:"",
        status:"",
        skills:"",
        githubusername:"",
        bio:"",
        twitter:"",
        facebook:"",
        linkedin:"",
        youtube:"",
        instagram:""
    }); 
    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData; 

    const onChange = (e) => { 
        e.preventDefault(); 
        setFormData({...formData, [e.target.name]: e.target.value}); 

    }
    const onSubmit = (e) => {
        e.preventDefault(); 
        console.log(formData); 
    }

    return (
        <div>
        <form onSubmit = {onSubmit}>
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter your company'
                    name = "company" 
                    value = {company}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter your website'
                    name = "website" 
                    value = {website}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter location'
                    name = "location" 
                    value = {location}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter your status'
                    name = "status" 
                    value = {status}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter skills '
                    name = "skills" 
                    value = {skills}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter githubusername'
                    name = "githubusername" 
                    value = {githubusername}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter bio'
                    name = "bio" 
                    value = {bio}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter twitter'
                    name = "twitter" 
                    value = {twitter}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter facebook '
                    name = "facebook" 
                    value = {facebook}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter instagram'
                    name = "instagram" 
                    value = {instagram}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input 
                    type = "text"
                    placeholder = 'linkedin'
                    name = "linkedin" 
                    value = {linkedin}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input 
                    type = "text"
                    placeholder = 'enter youtube'
                    name = "youtube" 
                    value = {youtube}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div>
                <input type = "submit" value = "submit"/>
                    
            </div>
            
        </form>
    </div>
    )
}

// CreateProfile.propTypes = {

// }

export default CreateProfile
