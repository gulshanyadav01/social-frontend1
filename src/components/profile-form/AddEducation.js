import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addEducation } from "../../components/store/Actions/profile"

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school:"",
        degree:"",
        fieldOfStudy:"",
        from:"",
        to:"",
        current:false,
        description:""
    })
    const [toDataDisabled, toggleDisabled] = useState(false); 
    const {school, degree, fieldOfStudy, from, to  , current, description } = formData; 
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value}); 
    const onSubmit = (e) => {
        e.preventDefault(); 
        // console.log("hi");
        addEducation(formData, history); 

    }
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <div>
                            <input 
                            type = "text"
                            placeholder = 'enter job degree'
                            name = "degree" 
                            value = {degree}
                            onChange = {(e) => onChange(e)}
                        /> 
                </div> 
                <div>
                        <input 
                        type = "text"
                        placeholder = 'enter your school'
                        name = "school" 
                        value = {school}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                        <input 
                        type = "text"
                        placeholder = 'enter your fieldOfStudy'
                        name = "fieldOfStudy" 
                        value = {fieldOfStudy}
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

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired

}

export default connect(null, {addEducation})(AddEducation); 

