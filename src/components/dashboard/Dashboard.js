import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"; 
import {getCurrentProfile} from "../../components/store/Actions/profile"; 
import {Link} from "react-router-dom"; 


const Dashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {

    useEffect(() =>{
        getCurrentProfile();
    },[getCurrentProfile]); 

    return loading && profile === null ? (<div><h1>loading...</h1></div>): <div>
    <h1>Dashboard</h1>
    <h3>welcome {user && user.name}</h3>
    {profile !== null ? <div>has</div> :<div><h1>please add some info </h1><Link to = "/"><button>login</button> </Link></div> }
     </div>
}

Dashboard.propTypes = {
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth:state.authReducer,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard); 
