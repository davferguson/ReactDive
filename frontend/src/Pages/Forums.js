import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import './Forums.css';
import Post from '../Components/Post';

function Forums() {
  const [postData, setPostData] = useState([])
  let post_message = "You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the "
//   let post_message ="jo"

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

  const axiosPostData = async() => {
    const postData = {
        username: "bIDDLEbOp",
        title: "How I Took Over",
        message: post_message
    }

    await axios.post('http://localhost:4000/submit-post/send', postData)
    .then(res => console.log(res.data))
  }

  return (
    <div className='forum'>
        <div className="posts">
          {postData.map(({ _id, username, message, title}) => (
              <Post key={_id} author={username} title={title} message={message} />
          ))}
        </div>
        <div className="sidebar">
            Sidebar
        </div>
        <button onClick={axiosPostData}>Submit Post</button>
    </div>
  )
}

export default Forums