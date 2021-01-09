import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
// import Moment from "react-moment"; 
import { deleteExperience } from "../../components/store/Actions/profile"; 

const Experience = ({experience, deleteExperience}) => {
    const experiences = experience.map(exp =>(
        <tr key = {exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>{exp.from}</td>
            <td>
                <button onClick = {() => deleteExperience(exp._id)} >delete</button>
            </td>
        </tr>
    ) )
    return (
        <div>
            <h2>Experience Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>company</th>
                        <th>Title</th>
                        <th>years</th>
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </div>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience:PropTypes.func.isRequired,

}

export default connect(null, {deleteExperience})(Experience); 
