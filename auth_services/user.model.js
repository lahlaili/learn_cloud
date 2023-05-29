const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:String,
    password:String
})
user = mongoose.model("user",userSchema)
module.exports = user