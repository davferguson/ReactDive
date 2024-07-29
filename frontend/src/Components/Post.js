import React from 'react'
import './Post.css';

function Post({ title, author, message }) {
  return (
    <div className='post'>
        <div className="header">
            <b>{ title }</b>
            <span>{ author }</span>
        </div>
        <div className="article">
            <p>{ message }</p>
        </div>
    </div>
  )
}

export default Post