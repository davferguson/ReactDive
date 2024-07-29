const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/submit-post/:a', async(req, res) => {
    const {username, title, message, postDate} = req.body
    const action = req.params.a
    
    switch(action) {
      case "send":
        const postData = {username: username, title: title, message: message, postDate: postDate}
        const newPost = new schemas.Posts(postData)
        const savePost = await newPost.save()
        if (savePost) {
          res.send('Post sent. Thank you.')
        } else {
          res.send('Failed to send post.')
        }
        break;
  
        default:
          res.send('Invalid Request')
          break
    }
  
    res.end()
  })

router.get('/posts', async (req, res) => {
    const posts = schemas.Posts
    const postData = await posts.find({}).exec()
    if (postData) {
      res.send(JSON.stringify(postData))
    }
  })
  
  module.exports = router