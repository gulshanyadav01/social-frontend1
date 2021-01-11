import React from 'react'
import PropTypes from 'prop-types'
import Logo from "../../asset/images/gulshan1.png"

const ProfileTop = ({ profile:{user:{avatar, name}} }) => {
    return (
        <div className = "w-full h-64 rounded shadow bg-white ">
            <div className = "w-full h-20 rounded-t bg-gulshan-lin flex-column">
                <img src = {Logo} className = "w-48 mt-10 h-48 mx-auto my-auto border-4 border-white rounded-full" alt = {name}/>
                <h1>hello</h1>
            </div>
            <div>
                
            </div>
        </div>
    )
}

ProfileTop.propTypes = {

}

export default ProfileTop; 
