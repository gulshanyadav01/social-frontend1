import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import { getProfileById } from "../store/Actions/profile"; 
import ProfileTop from "./ProfileTop"; 


const Profile = ({  getProfileById ,match, profile:{profile, loading, auth, } }) => {
    useEffect(() => {
        getProfileById(match.params.userId);

    },[getProfileById]); 
    return (
        <div>
            {profile ===  null || loading ? <div>loading</div>:(<div className = " ml-52 mt-20 mr-52  "><ProfileTop profile = {profile}/></div>)}
        </div>
    )
}

Profile.propTypes = {
    getProfileById:PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth:state.authReducer
})

export default connect(mapStateToProps, {getProfileById })(Profile);
