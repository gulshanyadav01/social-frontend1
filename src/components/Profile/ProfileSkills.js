import React from 'react'
import PropTypes from 'prop-types'
import { BiCheck } from "react-icons/bi"

const ProfileSkills = ({profile:{skills}}) => {
    return (
        <div className = "w-full h-32 mt-4 rounded shadow bg-white">
         <h1 className = "ml-72 font-bold text-xl capitalize mt-4"> Skills</h1>
         {/* <h2><BiCheck className = "inline"/>{skills[0]}</h2> */}
         <div className = "flex ml-40">
            {
                skills.map((skill) => {
                    return(
                        <div className = "flex ">
                        <h1 className = "font-bold capitalize m-2"><BiCheck className = "inline w-8 h-8 text-limegreen-500 "/>{skill}</h1>
                        </div>
                    )
                } )
            }
         </div>

        </div>
    )
}

ProfileSkills.propTypes = {
    profile:PropTypes.object.isRequired

}

export default ProfileSkills
