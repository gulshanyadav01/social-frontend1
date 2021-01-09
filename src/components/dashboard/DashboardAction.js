
import { Link } from "react-router-dom"; 

import React from 'react'

const DashboardAction = () => {
    return (
        <div>
            <button><Link to = "/edit-profile">Edit Profile</Link></button>
            <button><Link to ="/add-experience">add experience</Link></button>
            <button><Link to = "/add-education">add education</Link></button>
        </div>
    )
}

export default DashboardAction; 
