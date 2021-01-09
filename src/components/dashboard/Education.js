import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
// import Moment from "react-moment"; 

const Education = ({education}) => {
    const educations = education.map(exp =>(
        <tr key = {exp._id}>
            <td>{exp.school }</td>
            <td>{exp.degree}</td>
            <td>{exp.fieldOfStudy}</td>
            <td>
                <button >delete</button>
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
    education: PropTypes.array.isRequired

}

export default Education; 
