import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"; 
import { AiOutlineLike } from "react-icons/ai"; 
import { addLike, removeLike } from "../store/Actions/post"; 

const Post = ({ auth,addLike, removeLike,   post: { _id, name, text, avatar, user, likes, comments, date  } }) => {
    return (
        <div>
            <img src = {avatar} alt = {name} className = "w-24 h-24 rounded-full"/>
            <h1>{date}</h1>
            {
                !auth.loading && user === auth.user._id && (
                    <button className = "px-2 py-1 bg-red-400 rounded">Delete</button>
                )
            }
            <AiOutlineLike className = "w-8 h-8 text-royalblue-500 inline" onClick = { () => addLike(_id)}/><h1>{likes.length}</h1>
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
