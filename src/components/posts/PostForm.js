import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addPost } from "../store/Actions/post"; 


const PostForm = ({ addPost }) => {
    const [text, setText ] = useState("");  
    return (
        <div className = "w-96 h-auto m-4 bg-white shadow rounded  ">
            <h1 className = "font-bold">Say Something </h1>
            <form onSubmit = {(e) => {e.preventDefault();
             addPost({text})}}>
                 <textarea
                cols = "30"
                rows ="3" 
                className = "rounded bg-blue-100 m-4 "
                onChange = {(e) => setText(e.target.value)} 
                value = {text} />
                <button className = "px-2 py-1 bg-blue-300 rounded">submit</button>
            </form>
           
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(PostForm); 
