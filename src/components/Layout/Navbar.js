import React from 'react'
import {Link } from "react-router-dom"; 
import {connect } from "react-redux"; 
import PropTypes from "prop-types"; 
import {logout} from "../../components/store/Actions/auth"; 

const  Navbar = ({auth: {isAuthenticated, loading}, logout})  => {

    const Logout = () => {
        logout(); 
    }

    return (
        <div>
            <h1>Navbar is done </h1>
            <button onClick = {Logout}>Logout </button>
        </div>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth:state.authReducer
})

export default connect(mapStateToProps, {logout})(Navbar);
