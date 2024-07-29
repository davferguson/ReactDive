const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type:String},
    email: {type:String},
    password: {type:String},
    entryDate: {type:Date, default:Date.now}
})

const postSchema = new Schema({
    username: {type:String, required:true},
    title: {type:String, required:true},
    message: {type:String, required:true},
    postDate: {type:Date, default:Date.now}
})

const Users = mongoose.model('Users', userSchema, 'users')
const Posts = mongoose.model('Posts', postSchema, 'posts')
const mySchemas = {'Users':Users, 'Posts':Posts}

module.exports = mySchemas