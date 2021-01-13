import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addPost } from "../store/Actions/post"; 
import Logo from "../../asset/images/gulshan1.png"; 
import { FaTelegram } from "react-icons/fa"


const PostForm = ({ addPost }) => {
    const [text, setText ] = useState("");  
    return (
        <div className = "w-6/12 h-auto m-4 bg-white shadow rounded-lg border border-gray-400 ">
            {/* <h1 className = "font-bold">Say Something </h1> */}
            <form onSubmit = {(e) => {e.preventDefault();
             addPost({text})
             setText("");
             }}>
             <div className = "flex m-2">
                 <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 ml-2 rounded-full"/>
                 <textarea
                cols = "50"
                rows ="2"
                className = "rounded mt-4 ml-1"
                onChange = {(e) => setText(e.target.value)} 
                placeholder = "say something "
                value = {text} />
             </div>
             <hr className = "w-full h-0.5 bg-gray-100"></hr> 
                <button className = "w-10 h-10 rounded-full"><FaTelegram className = " w-10 h-10 rounded-full text-blue-300 m-2  hover:text-royalblue-500 rounded"/></button>
            </form>
           
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(PostForm); 
