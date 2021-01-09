import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addExprience } from "../../components/store/Actions/profile"

const AddExperience = ({ addExprience, history }) => {
    const [formData, setFormData] = useState({
        company:"",
        title:"",
        location:"",
        from:"",
        to:"",
        current:false,
        description:""
    })
    const [toDataDisabled, toggleDisabled] = useState(false); 
    const {company, title, location, from, to  , current, description } = formData; 
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value}); 
    const onSubmit = (e) => {
        e.preventDefault(); 
        console.log("hi");
        addExprience(formData, history); 

    }
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <div>
                            <input 
                            type = "text"
                            placeholder = 'enter job title'
                            name = "title" 
                            value = {title}
                            onChange = {(e) => onChange(e)}
                        /> 
                </div> 
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
                        placeholder = 'enter your location'
                        name = "location" 
                        value = {location}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                        <input 
                        type = "date"
                        placeholder = 'from'
                        name = "from" 
                        value = {from}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                        <input 
                        type = "date"
                        placeholder = 'to'
                        name = "to" 
                        value = {to}
                        disabled = {toDataDisabled ? "disabled": ""}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                        <p><input 
                        type = "checkbox"
                        placeholder = 'current'
                        name = "current" 
                        value = {current}
                        checked = {current}
                        onChange = {(e) => {
                            setFormData({...formData, current:!current}); 
                            toggleDisabled(!toDataDisabled); 
                        }}
                    /> current job</p>
                </div> 
                <div>
                        <input 
                        type = "text"
                        placeholder = 'enter description'
                        name = "description" 
                        value = {description}
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

AddExperience.propTypes = {
    addExprience: PropTypes.func.isRequired

}

export default connect(null, {addExprience})(AddExperience); 

