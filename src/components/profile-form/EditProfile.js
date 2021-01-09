import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { createProfile, getCurrentProfile} from "../store/Actions/profile"; 
import {connect} from "react-redux"; 
import {withRouter} from "react-router-dom"; 

const EditProfile = ({ profile: {profile, loading }, createProfile, getCurrentProfile,  history }) => {
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
    

    useEffect(() => {
        getCurrentProfile();
        setFormData({
            company: loading || !profile.company? "": profile.company,
            website: loading || !profile.website? "": profile.website,
            location: loading || !profile.location? "": profile.location,
            status: loading || !profile.status ? "": profile.status, 
            skills: loading || !profile.skills ? "": profile.skills,
            githubusername: loading || !profile.githubusername ? "": profile.githubusername,
            bio: loading || !profile.bio ? "": profile.bio,
            twitter: loading || !profile.twitter? "": profile.twitter,
            facebook: loading || !profile.facebook ? "": profile.facebook,
            linkedin: loading || !profile.linkedin ? "": profile.linkedin,
            youtube: loading || !profile.youtube ? "": profile.youtube,
            instagram: loading || !profile.instagram? "": profile.instagram
        })

    }, [loading]); 

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
        createProfile(formData, history, true); 
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

EditProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    createProfile:PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
    profile: state.profile

})

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile)); 
