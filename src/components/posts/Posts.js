import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { getPosts } from "../store/Actions/post"
import PostItem from "./PostItem"; 

const Posts = ({ getPosts, post: {posts, loading }}) => {

   useEffect(() => {
       getPosts()
   }, [getPosts])

   

    return (
        <div>
            {
                loading ? <div> Loading ....</div> :
                 <div>
                    {
                        posts.map((post) =>{
                            return(
                                <PostItem key = {post._id} post = {post}/>
                            )
                        })
                    }
          
                </div>
            }
        </div>
    )
}

Posts.propTypes = {

}
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts }) (Posts);
