import React from 'react'
import { useState } from "react"
import axios from "axios"

function PostForm({ updateVisibility }) {
  const [username, setUsername] = useState("")
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  const axiosPostData = async() => {
    const postData = {
        username: username,
        title: title,
        message: message
    }

    await axios.post('http://localhost:4000/submit-post/send', postData)
    .then(res => console.log(res.data))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username && title && message){
        axiosPostData()
    } else {
        alert("Please fill all fields.")
    }
  }

  const handleCancel = () => {
    updateVisibility(false)
  }

  return (
    <div className="postForm">
        <form className="contactForm">
            <label>Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            
            <label>Title</label>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            
            <br/>
            <label>Message</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <button type="submit" onClick={handleSubmit}>Post</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default PostForm