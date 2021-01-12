import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { getPosts } from "../store/Actions/post"

const Posts = ({ getPosts, post: {posts, loading }}) => {

   useEffect(() => {
       getPosts()
   }, [getPosts])

   

    return (
        <div>
            
        </div>
    )
}

Posts.propTypes = {

}
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts }) (Posts);
