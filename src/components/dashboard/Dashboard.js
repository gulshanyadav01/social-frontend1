import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"; 
import {getCurrentProfile, deleteAccount} from "../../components/store/Actions/profile"; 
import {Link} from "react-router-dom"; 
import DashboardAction from './DashboardAction';
import Experience from "./Experience"; 
import Education from "./Education"; 
// import deleteAccount from "../../store/Actions/profile";

const Dashboard = ({getCurrentProfile, deleteAccount,  auth: {user}, profile: {profile, loading, history}}) => {

    useEffect(() =>{
        getCurrentProfile();
    },[getCurrentProfile]); 

    return loading && profile === null ? (<div><h1>loading...</h1></div>): <div>
    <h2 className = "uppercase mt-8 font-extrabold ml-6 text-xl   mb-8">Dashboard</h2>

    <DashboardAction/>
    {/* <h3>welcome {user && user.name}</h3> */}
    {profile === null ? <div></div> :<div><h1>please add some info </h1><Link to = "/"><button>login</button> </Link></div> }
    {profile !== null? (<div>
        <Experience experience = {profile.experience !== null ? profile.experience : []}/>
        <hr className = "h-0.5 ml-4 w-3/5 bg-gray-500"></hr>
        <Education education = {profile.education !== null ? profile.education: []}/>
        <div>
            <button onClick = {() => deleteAccount(history)}>Delete Account</button>
        </div>

    </div>
    ): <div> <h1> please add some info </h1> </div>}
   
     </div>
}

Dashboard.propTypes = {
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object,
    deleteAccount: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth:state.authReducer,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard); 
