import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import './Forums.css';
import Post from '../Components/Post';
import PostForm from '../Components/PostForm';

function Forums() {
  const [postData, setPostData] = useState([])
  const [isPostForm, setIsPostForm] = useState(false)

  useEffect( () => {
    let processing = true
    axiosFetchData(processing)
    return () => {
        processing = false
    }
  },[])

  const axiosFetchData = async(processing) => {
    await axios.get('http://localhost:4000/posts')
    .then(res => {
        if (processing) {
          setPostData(res.data)
        }
    })
    .catch(err => console.log(err))
  }

  const updateFormVisibility = (isVisible) => {
    setIsPostForm(isVisible)
  }

  return (
    <div className='forum'>
      <div className="posts">
        {!isPostForm && <button className='create-post-btn' onClick={() => updateFormVisibility(true)}>Create a Post</button>}
        {isPostForm &&  <PostForm updateVisibility={updateFormVisibility} />}
        {postData.map(({ _id, username, message, title}) => (
            <Post key={_id} author={username} title={title} message={message} />
        ))}
      </div>
      <div className="sidebar">
        Sidebar
      </div>
    </div>
  )
}

export default Forums