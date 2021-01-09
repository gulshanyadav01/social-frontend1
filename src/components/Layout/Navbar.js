import React from 'react'
import {Link } from "react-router-dom"; 
import {connect } from "react-redux"; 
import PropTypes from "prop-types"; 
import {logout} from "../../components/store/Actions/auth"; 
import {GoDashboard} from "react-icons/go"
import {FaPeopleCarry } from "react-icons/fa"
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { GoRocket } from "react-icons/go"

const  Navbar = ({auth: {isAuthenticated, loading}, logout})  => {

    const Logout = () => {
        logout(); 
    }

    return (
        <div className = "w-full">
            <div className = "mt-8 ml-4 mr-2">
                <h1 className = "text-2xl font-bold text-mango-500" >Social Network</h1>
            </div>
            <div className = "mt-16">
                <h1 className = "w-20 h-20 rounded-full bg-cerise-500 hover:bg-cerise-600  m-auto"> </h1>
                <h1 className = "ml-16 mt-2 mr-2 capitalize font-bold  ">gulshan yadav</h1>
            </div>
            <h1 className = 'mt-4 ml-4 mr-4  hover:bg-gulshan-300 px-2 py-2 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><GoDashboard className = "inline text-flamingo-600  hover:text-white " /><Link to =  "/dashboard"> Dashboard</Link></h1>
            <h1  className = ' ml-4 mr-4 mt-3  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FaPeopleCarry className = "inline text-gulshan-400 hover:text-white"/> Developers </h1>
            <h1 className = ' ml-4 mr-4 mt-3  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FiLogIn className = "inline text-green-500  hover:text-white"/> Login </h1>
            <h1 className = ' ml-4 mr-4 mt-3  hover:bg-gulshan-300 px-3 py-3  font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><GoRocket className = "inline  hover:text-white"/> <Link to = "/register" className = "active:text-blue-100">Register</Link> </h1>
            <h1 className = ' ml-4 mr-4 mt-3  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow ' ><button  onClick = {Logout} className = "font-bold"> <FiLogOut className = "inline text-red-700  hover:text-white"/> Logout </button></h1>
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
