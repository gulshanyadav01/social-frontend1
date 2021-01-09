import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
// import Moment from "react-moment"; 
import { deleteEducation} from "../store/Actions/profile"; 

const Education = ({education, deleteEducation}) => {
    const educations = education.map(exp =>(
        <tr key = {exp._id}>
            <td>{exp.school }</td>
            <td>{exp.degree}</td>
            <td>{exp.fieldOfStudy}</td>
            <td>
                <button onClick = {() => deleteEducation(exp._id)} >delete</button>
            </td>
        </tr>
    ) )
    return (
        <div>
            <h2>Education Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>company</th>
                        <th>Title</th>
                        <th>years</th>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </div>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(Education); 
