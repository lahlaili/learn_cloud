const mongoose = require('mongoose')
const shema = mongoose.Schema()

const userSchema = new shema({
    email:String,
    password:String
})
user = mongoose.model("user",userSchema)
module.exports = user