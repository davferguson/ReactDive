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
    await axios.get('http://localhost:4000/users')
    .then(res => {
        if (processing) {
          setPostData(res.data)
        }
    })
    .catch(err => console.log(err))
}

  return (
    <div className='forum'>
        <div className="posts">
            <Post title="Get Out of My Village!" author="JImmy63" message={ post_message } />
            <Post title="New Bug Found" author="DemonSlayer" />
        </div>
        <div className="sidebar">
            {postData.map(({ id, name, email, website}) => (
              <Post key={id} author={name} title={website} message={email} />
            ))}
        </div>
    </div>
  )
}

export default Forums