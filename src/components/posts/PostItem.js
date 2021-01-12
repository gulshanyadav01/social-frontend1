import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"; 
import { AiOutlineLike } from "react-icons/ai"; 
import { addLike, removeLike } from "../store/Actions/post";
import { AiOutlineDislike } from "react-icons/ai";  

const Post = ({ auth,addLike, removeLike,   post: { _id, name, text, avatar, user, likes, comments, date  } }) => {
    return (
        <div>
            <img src = {avatar} alt = {name} className = "w-20 h-20 rounded-full"/>
            <h1>{date}</h1>
            <h1 className = "bg-blue-300 text-red-400 m-4 rounded-xl shadow-3xl" >{text}</h1>
            <h1 >{name}</h1>
            {
                !auth.loading && user === auth.user._id && (
                    <button className = "px-2 py-1 bg-red-400 rounded">Delete</button>
                )
            }
            <div className = "flex">
                <div className = "flex">
                   <button className = "bg-white hover:bg-blue-200 rounded text-royalblue-700" onClick = {() => addLike(_id)}><AiOutlineLike className = "w-8 h-8 ml-3  text-royalblue-500 inline"/>{likes.length} </button> 
                
                    {/* <h1 className = "w-5 h-5 rounded-full  px-1 py-1  text-white text-xs bg-royalblue-500">{likes.length}</h1> */}
                </div>
                <div className = "flex ">
                    <button className = "bg-white hover:bg-blue-200 ml-1 rounded " onClick = {() => removeLike(_id)}><AiOutlineDislike className = "w-8 h-8 ml-3  text-royalblue-500 inline"/></button> 
                </div>
                
                
            </div>
        </div>
    )
}

Post.propTypes = {
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired


}
const mapStateToProps = state => ({
    auth: state.authReducer,
    
})

export default connect(mapStateToProps, { addLike, removeLike}) (Post);
